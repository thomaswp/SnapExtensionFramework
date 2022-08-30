import { Blocks } from "../blocks/BlockFactory";
import { EventManager } from "../events/EventManager";
import { SnapTypes } from "../snap/SnapTypes";
import { ExtensionManager } from "./ExtensionManager";

export abstract class Extension {

    constructor() {
        this.addBlocks(this.blocks);
    }

    get snap() : SnapTypes {
        return ExtensionManager.snap;
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