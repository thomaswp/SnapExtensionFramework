import { Blocks } from "../blocks/BlockFactory";
import { EventManager } from "../events/EventManager";
import { SnapTypes } from "../snap/SnapTypes";
import { Extension } from "./Extension";


export class ExtensionManager {

    static extensions = [] as Extension[];

    static blocks = new Blocks.BlockFactory();
    static snap = new SnapTypes();
    static events = new EventManager();

    static register(extension : Extension) {
        this.extensions.push(extension);
    }

    static init() {
        // TODO: this should just register them
        // with snap to be loaded
        this.extensions.forEach(e => {
            e.init();
        });
    }
}