import { IDE_Morph, StageMorph, WorldMorph } from "./Snap";


// TODO: Make an interface with an implementation that fetches from window
export class SnapTypes {
    get world() : WorldMorph {
        return window["world"];
    }

    get IDE() : IDE_Morph {
        return this.world?.childThatIsA(window['IDE_Morph']) as IDE_Morph;
    }

    get stage() : StageMorph {
        return this.IDE?.stage;
    }

}