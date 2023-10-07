import { Blocks } from "./blocks/BlockFactory";
import { EventManager } from "./events/EventManager";
import { Extension } from "./extension/Extension";
import { ExtensionManager } from "./extension/ExtensionManager";
import { DefGenerator } from "./meta/DefGenerator";
import { Snap } from "./snap/SnapUtils";
import { Events } from "./events/SnapEvents";
import { OverrideRegistry } from "./extend/OverrideRegistry";
import { Cloud } from "./io/CloudUtils";

window.addEventListener('load', () => {
    setTimeout(() => {
        // Snap is loaded after the window
        ExtensionManager.init();
    }, 0);
})

// For convenience, make snap global
window['Snap'] = Snap;

// Everything else can be accessed via library with
// SEF.XXX
export {
    Blocks,
    Cloud,
    DefGenerator,
    EventManager,
    Events,
    Extension,
    ExtensionManager,
    OverrideRegistry,
    Snap,
};
