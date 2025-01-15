namespace tmp3 {
export interface Hoge {
    hoge: string;
}

const hoge: Hoge = {
    hoge: "hoge"
}

console.log(hoge.hoge);

export interface Fuga {
    fuga: string;
}

type HogeFuga = Hoge & Fuga;

const hogeFuga: HogeFuga = {
    hoge: "hoge",
    fuga: "fuga"
}

console.log(hogeFuga.hoge);

interface Poyo extends Hoge {
    poyo: string;
}

const poyo: Poyo = {
    hoge: "hoge",
    poyo: "poyo"
}

console.log(poyo.hoge);

type Boo = {
    hoge: Hoge;
}

const boo: Boo = {
    hoge: {
        hoge: "Boohoge"
    }
}
console.log(boo.hoge);

interface Bar {
    hoge: string;
}

const bar: Bar = {
    hoge: "barHoge"
}

console.log(bar.hoge);

}
