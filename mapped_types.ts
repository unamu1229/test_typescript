namespace mapped_types {
    /**
     * Mapped Types
     */
    type Hoge = "hoge" | "fuga" | "piyo";
    type Foo = {
        [K in Hoge]: string;
    }

    const foo: Foo = {
        hoge: "ほげ",
        fuga: "ふが",
        piyo: "ぴよ"
    };
    // foo.poyo = "ぽよ";

    console.log(foo);


    type Fuga = {
        hoge: string;
        fuga: number;
        poyo: boolean;
    }

    type Bar = {
        [K in keyof Fuga]: string;
    }

    const bar: Bar = {
        hoge: "ほげ",
        fuga: "ふが",
        poyo: "ぽよ"
    }

    console.log(bar);
}
