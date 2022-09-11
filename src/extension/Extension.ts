import { Blocks } from "../blocks/BlockFactory";
import { EventManager } from "../events/EventManager";
import { ExtensionManager } from "./ExtensionManager";

export abstract class Extension {

    constructor() {
    }

    get events() : EventManager {
        return ExtensionManager.events;
    }

    get blocks() : Blocks.BlockFactory {
        return ExtensionManager.blocks;
    }

    init() {}

    register() {
        ExtensionManager.register(this);
    }

    dependencies(): string[] {
        return [];
    }
}