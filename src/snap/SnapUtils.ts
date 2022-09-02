import { IDE_Morph, SpriteMorph, StageMorph, WorldMorph } from "./Snap";


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

    static get currentSprite() : SpriteMorph | StageMorph{
        return this.IDE?.currentSprite;
    }

    static get sprites() : SpriteMorph[] {
        return this.IDE?.sprites?.contents || [];
    }

    static getSprite(name: string) {
        return this.sprites.filter(sprite => sprite.name == name)[0];
    }

}