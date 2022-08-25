import { BlockFactory } from "./blocks/BlockFactory";
import { EventManager } from "./events/EventManager";
import { DefGenerator } from "./meta/DefGenerator";
import { SnapHelper } from "./snap/SnapHelper";

// Add object to window for debuggin
window['SEM'] = {
    events: new EventManager(),
    blocks: new BlockFactory(),
    helper: new SnapHelper(),
    generator: new DefGenerator(),
};
