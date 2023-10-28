
export class Test1 {
    // foo(a: number);
    foo(a: number, b: number);
}

export class Test2 extends Test1 {
    foo(a: string | number);
}