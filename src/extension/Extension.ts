import { EventManager } from "../events/EventManager";
import { SnapTypes } from "../snap/SnapTypes";
import { ExtensionManager } from "./ExtensionManager";

export abstract class Extension {

    private _snap = new SnapTypes();
    private _events = new EventManager();

    get snap() : SnapTypes {
        return this._snap;
    }

    get events() : EventManager {
        return this._events;
    }

    abstract init();

    register() {
        ExtensionManager.register(this);
    }
}