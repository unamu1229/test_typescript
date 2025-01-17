namespace tmp5 {
    type Hoge = {
        hoge: string;
        fuga: number;
        piyo: Piyo;
    }

    type Piyo = {
        foo: string;
        bar: number;
        baz: boolean;
    }

    const hoge: Hoge = {
        hoge: "hoge",
        fuga: 1,
        piyo: {
            foo: "foo",
            bar: 2,
            baz: true
        }
    }

    const {
        fuga: konoFuga,
        piyo: {
            baz: konoHensuuniDaiyuuSareru
        }
    } : {
        piyo: {
            baz: boolean;
        };
        fuga: number;
    } = hoge;

    console.log(konoFuga);
    console.log(konoHensuuniDaiyuuSareru);
}
