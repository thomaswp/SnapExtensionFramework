import { Blocks } from "./blocks/BlockFactory";
import { EventManager } from "./events/EventManager";
import { Extension } from "./extension/Extension";
import { ExtensionManager } from "./extension/ExtensionManager";
import { DefGenerator } from "./meta/DefGenerator";
import { Snap } from "./snap/SnapUtils";
import { Events } from "./events/SnapEvents";

window.addEventListener('load', () => {
    setTimeout(() => {
        // Snap is loaded after the window
        ExtensionManager.init();
    }, 0);
})

export {
    Blocks,
    DefGenerator,
    EventManager,
    Events,
    Extension,
    ExtensionManager,
    Snap,
};
