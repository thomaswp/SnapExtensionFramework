
import { Events } from "./SnapEvents";
import { SnapEventListener } from "./SnapEventListener";


export class EventManager {

    // trigger(type: SnapEvents) {
    //     console.log(type);
    // }

    addListener(listener: SnapEventListener) {

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
    }
}