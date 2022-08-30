
import { Events } from "./SnapEvents";
import { SnapEventListener } from "./SnapEventListener";
import { SnapEventManager } from "../snap/Snap";


export class EventManager {

    Trace: SnapEventManager;
    listeners: Map<string, SnapEventListener[]>;

    constructor() {
        this.Trace = window['Trace'];
        if (!this.Trace) {
            throw new Error('Cannot create Event Manager - Trace does not exist!');
        }
        this.listeners = new Map();
        this.Trace.addGlobalListener((message: string, data: any) => {
            this.handleEvent(message, data);
        });
    }

    private handleEvent(message: string, data: any) {
        let listeners = this.listeners.get(message);
        if (!listeners) return;
        listeners.forEach(l => {
            let args = l.convertArgs(data);
            l.callback(args);
        });
    }

    addListener(listener: SnapEventListener) {
        if (!listener) return;
        let type = listener.type;
        if (!this.listeners.has(type)) this.listeners.set(type, []);
        let list = this.listeners.get(listener.type);
        list.push(listener);
    }

    test() {
        this.addListener(new Events.Block.RenameListener(args => {
            console.log(args.id.selector);
        }));
        this.addListener(new Events.InputSlot.MenuItemSelectedListener(args => {
            console.log(args.item);
        }));
        this.addListener(new Events.Block.CreatedListener(args => {
            console.log(args.id);
        }));
        this.addListener(new Events.IDE.AddSpriteListener(args => {
            console.log(args.name);
        }));
    }
}