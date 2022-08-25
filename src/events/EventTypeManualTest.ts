import { BlockIDArgs, InputIDArgs, SnapEventListener } from "./SnapEventListener"

export namespace Events {

    export namespace Block {

        export interface RenameEventArgs {
            id: BlockIDArgs,
            name: any,
        }

        export class RenameListener extends SnapEventListener {

            static readonly type = 'Block.rename';

            constructor(args: (args: RenameEventArgs) => void) {
                super(RenameListener.type, args);
            }
        }
    }

    export namespace InputSlot {

        export interface MenuItemSelectedArgs {
            id: InputIDArgs,
            item: any,
        }

        export class MenuItemSelectedListener extends SnapEventListener {

            static readonly type = 'InputSlot.menuItemSelected';

            constructor(args: (args: MenuItemSelectedArgs) => void) {
                super(MenuItemSelectedListener.type, args);
            }
        }
    }

}
