import { IDE_Morph, StageMorph, WorldMorph } from "./Snap";


// TODO: Make an interface with an implementation that fetches from window
export class SnapTypes {
    world() : WorldMorph {
        return window["world"];
    }

    IDE() : IDE_Morph {
        return this.world().childThatIsA(window['IDE_Morph']) as IDE_Morph;
    }

    stage() : StageMorph {
        return this.IDE().stage;
    }

}