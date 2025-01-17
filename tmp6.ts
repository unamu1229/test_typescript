namespace tmp6 {

    interface Hoge<T = any> {
        poyo: T;
        fuga: string;
    }

    function makeHoge<T>(poyo: T, fuga: string): Hoge<T> {
        const hoge: Hoge<T> = {
            poyo,
            fuga
        }
        return hoge;
    }

    console.log(makeHoge({ foo: "foo"}, "fugafuga"));

    interface Poyo {
        foo: string;
        bar: number;
        baz: Baz
    }

    interface Baz {
        bazFoo: string;
        bazBar: number;
    }

    const hoge: Hoge<Poyo> = {
        poyo: {
            foo: "foo",
            bar: 1,
            baz: {
                bazFoo: "bazfoo",
                bazBar: 200
            }
        },
        fuga: "fuga"
    }

    const {
        poyo: { bar: varBar, baz: { bazBar: varBazBar } },
        fuga: varFuga
    } : Hoge<{
        bar: number;
        baz: {
            bazBar: number;
        }
        // chatGPTによると
        // 関数の返り値とはことなり、
        // 分割代入の型定義をジェネリクスで指定した場合、
        //
        // interface Hoge<T = any> {
        //         poyo: T;
        //
        // の為、poyo内の定義に限定されてしまうらしい、なのでfugaは分割代入時に型定義できない。
    }> = hoge;

    console.log(varBar);
    console.log(varBazBar);
    console.log(varFuga);


    const {
        poyo: { bar: var2Bar, baz: { bazBar: var2BazBar } },
        fuga: var2Fuga
    } : {
        poyo: {
            bar: number;
            baz: {
                bazBar: number;
            }
        };
        fuga: string;
    } = hoge;

    console.log(var2Bar);
    console.log(var2BazBar);
    console.log(var2Fuga);


    // const {
    //     data: { bar: varvarBar},
    //     fuga: varvarFuga
    // } : {
    //     data: {
    //         bar: number;
    //     };
    //     fuga: string;
    // } = hoge;
    // console.log(varvarFuga);
    // console.log(varvarBar);

}
