// import { Events, ExtensionManager } from "sef";
import { BlockMorph, Cloud, IDE_Morph, SpriteMorph, StageMorph, VariableFrame, WorldMorph } from "./Snap";
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

<<<<<<< Updated upstream
    static get currentSprite() : SpriteMorph | StageMorph {
=======
    static get currentSprite() : SpriteMorph | StageMorph{
>>>>>>> Stashed changes
        return this.IDE?.currentSprite as SpriteMorph | StageMorph;
    }

    static get sprites() : SpriteMorph[] {
        return this.IDE?.sprites?.contents || [];
    }

    static get cloud() : Cloud {
        return this.IDE?.cloud;
    }

    static get globalVariables() : VariableFrame {
        return this.stage?.globalVariables();
    }

    static getSprite(name: string) {
        return this.sprites.filter(sprite => sprite.name == name)[0];
    }

    static getBlock(id: BlockIDArgs) {
        return this.world.allChildren()
            .filter(b => b instanceof BlockMorph && b.id == id.id)[0];
    }

}