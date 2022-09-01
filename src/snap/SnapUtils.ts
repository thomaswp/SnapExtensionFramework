import { IDE_Morph, StageMorph, WorldMorph } from "./Snap";


// TODO: Make an interface with an implementation that fetches from window
export class Snap {

    static get world() : WorldMorph {
        return window["world"];
    }

    static get IDE() : IDE_Morph {
        return this.world?.childThatIsA(window['IDE_Morph']) as IDE_Morph;
    }

    static get stage() : StageMorph {
        return this.IDE?.stage;
    }

}