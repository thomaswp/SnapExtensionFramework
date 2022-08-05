export enum SnapEvents {

}

export interface SnapEvent {
    type: string;


}

export class EventManager {

    trigger(type: SnapEvents) {
        console.log(type);
    }
}