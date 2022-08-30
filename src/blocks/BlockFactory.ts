import { OverrideRegistry } from "../extend/OverrideRegistry";
import { Color, localize, SpriteMorph, StageMorph, ToggleMorph } from "../snap/Snap";

export namespace Blocks {

    export class BlockFactory {

        blocks: Block[];
        needsInit = false;

        constructor() {
            this.blocks = [];
            this.needsInit = false;
            let myBlocks = this.blocks;

            const override = function(base, category: string, all: boolean) {
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

            OverrideRegistry.extend(SpriteMorph, 'blockTemplates', override, false);
            OverrideRegistry.extend(StageMorph, 'blockTemplates', override, false);

            this.refresh();
        }

        registerBlock(block: Block) {
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

        addCategory(name: string, color: Color) {
            SpriteMorph.prototype.categories.push(name);
            SpriteMorph.prototype.blockColor[name] = color;
        }
    }

    export enum BlockType {
        Command = "command",
        Reporter = "reporter",
        Predicate = "predicate",
    }

    export class Block {

        selector: string;
        spec: string;
        defaults: any[];
        type: BlockType;
        category: string;
        spriteOnly: boolean;
        top: boolean;
        togglable: boolean;

        constructor(
            selector: string, spec: string, defaults: any[], type: BlockType,
            category: string, spriteOnly = false, top = false, togglable = false,
        ) {
            this.selector = selector;
            this.spec = spec;
            this.defaults = defaults;
            this.type = type;
            this.category = category;
            this.spriteOnly = spriteOnly;
            this.top = top;
            this.togglable = togglable;
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
                SpriteMorph.prototype.blockForSelector(this.selector, true);
            if (!newBlock) {
                console.warn('Cannot initialize block', this.selector);
                return null;
            }
            newBlock.isTemplate = true;
            return newBlock;
        }

        toToggle(sprite : SpriteMorph) {
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

        addSpriteAction(action: any) : Block {
            SpriteMorph.prototype[this.selector] =
                StageMorph.prototype[this.selector] = action;
            return this;
        }
    }

}