import { SnapTypes } from "./SnapTypes";

export class SnapHelper {

    private _snap = new SnapTypes();

    snap() : SnapTypes {
        return this._snap;
    }

}
