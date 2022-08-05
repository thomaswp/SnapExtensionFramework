import { OverrideRegistry } from "../extend/OverrideRegistry";
import { localize, SpriteMorph, StageMorph, ToggleMorph } from "../snap/Snap";

export class BlockFactory {

    blocks = [] as Block[];
    needsInit = false;

    constructor() {
        this.blocks = [];
        this.needsInit = false;
        let myBlocks = this.blocks;

        let override = function(base, category) {
            let blocks = base.call(this, category);
            let checkSprite = this instanceof StageMorph;
            let added = 0;
            myBlocks.forEach(block => {
                if (block.category === category &&
                        !(checkSprite && block.spriteOnly)) {
                    if (block.top) {
                        blocks.splice(added, 0, block.toBlockMorph());
                        blocks.splice(added, 0, block.toToggle(this));
                        added++;
                    } else {
                        blocks.push(block.toToggle(this));
                        blocks.push(block.toBlockMorph());
                    }
                }
            });
            return blocks;
        };

        OverrideRegistry.extend(SpriteMorph, 'initBlocks', function(base) {
            base.call(this);
            myBlocks.forEach(block => {
                block.addToMap(SpriteMorph.prototype.blocks);
            });
        });

        OverrideRegistry.extend(SpriteMorph, 'blockTemplates', override);
        OverrideRegistry.extend(StageMorph, 'blockTemplates', override);

        this.refresh();
    }

    registerBlock(block) {
        this.blocks.push(block);
        this.refresh();
    }

    refresh() {
        if (this.needsInit) return;
        this.needsInit = true;
        setTimeout(() => {
            SpriteMorph.prototype.initBlocks();
            this.needsInit = false;
        }, 1);
    }

    addCategory(name, color) {
        SpriteMorph.prototype.categories.push(name);
        SpriteMorph.prototype.blockColor[name] = color;
    }
}

class Block {

    selector: string;
    spec: string;
    defaults: [];
    type: string;
    category: string;
    spriteOnly: boolean;
    top: boolean;
    togglable: boolean;

    constructor(
        selector, spec, defaults, type, category, spriteOnly, top, togglable
    ) {
        this.selector = selector;
        this.spec = spec;
        this.defaults = defaults;
        this.type = type;
        this.category = category;
        this.spriteOnly = spriteOnly;
        this.top = top || false;
        this.togglable = togglable || false;
    }

    addToMap(map) {
        map[this.selector] = {
            only: this.spriteOnly ? SpriteMorph : undefined,
            type: this.type,
            category: this.category,
            spec: localize(this.spec),
            defaults: this.defaults,
        };
    }

    toBlockMorph() {
        if (StageMorph.prototype.hiddenPrimitives[this.selector]) {
            return null;
        }
        var newBlock =
            StageMorph.prototype.blockForSelector(this.selector, true);
        if (!newBlock) {
            console.warn('Cannot initialize block', this.selector);
            return null;
        }
        newBlock.isTemplate = true;
        return newBlock;
    }

    toToggle(sprite) {
        if (!this.togglable) return null;
        let selector = this.selector;
        if (StageMorph.prototype.hiddenPrimitives[selector]) {
            return null;
        }
        var info = StageMorph.prototype.blocks[selector];
        return new ToggleMorph(
            'checkbox',
            this,
            function () {
                sprite.toggleWatcher(
                    selector,
                    localize(info.spec),
                    sprite.blockColor[info.category]
                );
            },
            null,
            function () {
                return sprite.showingWatcher(selector);
            },
            null
        );
    }

    addSpriteAction(action) {
        SpriteMorph.prototype[this.selector] =
            StageMorph.prototype[this.selector] = action;
        return this;
    }
}
