// import { Events, ExtensionManager } from "sef";
import { BlockMorph, Cloud, IDE_Morph, SpriteMorph, StageMorph, WorldMorph } from "./Snap";
import { BlockIDArgs } from "../events/SnapEventListener";


// TODO: Make an interface with an implementation that fetches from window
export class Snap {

    static lastRunBlock: BlockMorph;

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

    static get cloud() : Cloud {
        return this.IDE?.cloud;
    }

    static getSprite(name: string) {
        return this.sprites.filter(sprite => sprite.name == name)[0];
    }

    static getBlock(id: BlockIDArgs) {
        return this.world.allChildren()
            .filter(b => b instanceof BlockMorph && b.id == id.id)[0];
    }

}