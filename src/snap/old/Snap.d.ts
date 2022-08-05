export const localize : Function;

export interface SnapType extends Function {
    uber: object;
}

export class Morph extends Object {
    children : Morph[];
    childThatIsA(type : SnapType) : Morph;
}

export class WorldMorph extends Morph {

}

export class IDE extends Morph {
    stage : StageMorph;
}

export class SpriteMorph extends Morph {

}

export class StageMorph extends SpriteMorph {

}