import { OverrideRegistry } from "../extend/OverrideRegistry";
import { Snap } from "../snap/SnapUtils";
import { Color, localize, SpriteMorph, StageMorph, SyntaxElementMorph, ToggleMorph } from "../snap/Snap";

export namespace Blocks {

    export class BlockFactory {

        private blocks: Block[];
        private needsInit = false;

        constructor() {
            this.blocks = [];
            this.needsInit = false;
            let myBlocks = this.blocks;

            let myself = this;
            const override = function(base, category: string, all: boolean) {
                if (myself.needsInit) {
                    // In case a refresh is pending when blocks are created
                    // go ahead and do that now.
                    SpriteMorph.prototype.initBlocks();
                    myself.needsInit = false;
                }
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
                if (!this.needsInit) return;
                SpriteMorph.prototype.initBlocks();
                this.needsInit = false;
            }, 1);
        }

        addCategory(name: string, color: Color) {
            // TODO: Fix this so that the layout works
            // SpriteMorph.prototype.categories.push(name);
            // SpriteMorph.prototype.blockColor[name] = color;
            Snap.IDE.addPaletteCategory(name, color);
        }

        addLabeledInput(name: string, options: { [key: string]: any }, ...tags: InputTag[]) {
            if (SyntaxElementMorph.prototype.labelParts[name]) {
                throw new Error(`Input type with label ${name} already exists.`);
            }
            // Ensure that all string values are array-enclosed
            Object.keys(options).forEach(k => {
                if (typeof(options[k]) === 'string') {
                    options[k] = [options[k]];
                }
            })
            SyntaxElementMorph.prototype.labelParts[name] = {
                type: 'input',
                tags: tags.join(' '),
                menu: options,
            };
        }
    }

    export enum InputTag {
        /** Values will be interpreted as numeric. */
        Numberic = 'numeric',
        ReadOnly = 'read-only',
        Unevaluated = 'unevaluated',
        /** The input cannot be replaced with a reporter. */
        Static = 'static',
        Landscape = 'landscape',
        /** Monospace font. */
        Monospace = 'monospace',
        Fading = 'fading',
        Protected = 'protected',
        Loop = 'loop',
        /** The input is a lambda expression. */
        Lambda = 'lambda',
        /** The input is edited using a custom widget. */
        Widget = 'widget'
    }

    export enum BlockType {
        Command = 'command',
        Reporter = 'reporter',
        Predicate = 'predicate',
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

        addSpriteAction(action: (...args : any) => any) : Block {
            SpriteMorph.prototype[this.selector] =
                StageMorph.prototype[this.selector] = action;
            return this;
        }
    }

}