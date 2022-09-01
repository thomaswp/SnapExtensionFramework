import { Blocks } from "../blocks/BlockFactory";
import { EventManager } from "../events/EventManager";
import { ExtensionManager } from "./ExtensionManager";

export abstract class Extension {

    constructor() {
        this.addBlocks(this.blocks);
    }

    get events() : EventManager {
        return ExtensionManager.events;
    }

    get blocks() : Blocks.BlockFactory {
        return ExtensionManager.blocks;
    }

    addBlocks(blocks : Blocks.BlockFactory) {}
    init() {}

    register() {
        ExtensionManager.register(this);
    }
}