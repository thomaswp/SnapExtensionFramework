export class SnapEventListener {
    readonly type: string;
    readonly callback: Function;

    constructor(type: string, callback: (args: SnapEventArgs) => void) {
        this.type = type;
        this.callback = callback;
    }
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