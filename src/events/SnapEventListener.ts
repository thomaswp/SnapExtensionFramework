export class SnapEventListener {
    readonly type: string;
    readonly callback: Function;

    constructor(type: string, callback: (args: SnapEventArgs) => void) {
        this.type = type;
        this.callback = callback;
    }

    convertArgs(data: any) {
        if (data == null) return {};
        if (typeof data === 'object') return data;
        let obj = {};
        obj[this.getValueKey()] = data;
        return obj;
    }

    getValueKey() { return 'value'; }
}

export interface SnapEventArgs {

}

export interface EmptyArgs extends SnapEventArgs {

}

export interface ValueArgs extends SnapEventArgs {
    value: any;
}

export interface BlockIDArgs extends SnapEventArgs {
    id: number;
    selector: string;
    template: boolean;
    spec: string;
}

export interface InputIDArgs extends BlockIDArgs {
    argIndex: number;
}

export interface CustomBlockDefArgs extends SnapEventArgs {
    spec: string;
    category: string;
    type: string;
    guid: string;
    isGlobal: boolean;
}