namespace tmp13 {

    interface Hoge {
        name: string;
        id: number;
    }

    // これだとエラーになる
    // Object literal may only specify known properties, and 'age' does not exist in type 'Hoge'
    // オブジェクトリテラルがインターフェースに定義されていないプロパティを持つことを許可されない。
    // const hoge: Hoge = {
    //     name: 'hoge',
    //     id: 1,
    //     age: 20
    // }


    const poyo =  {
        name: 'hoge',
        id: 1,
        age: 20
    }

    // 一方これはエラーにならない
    // poyoはオブジェクトなので、インターフェイスに無いプロパティを持っていてもエラーにならない
    const foo: Hoge = poyo;



    console.log(foo);


    type Fuga = {
        name: string;
        id: number;
    }

    // typeもinterfaceと同じようにオブジェクトリテラルだとエラーになる
    // const poke: Fuga = {
    //     name: 'poke',
    //     id: 1,
    //     age: 20
    // }

    const fuga = {
        name: 'fuga',
        id: 2,
        age: 20
    }

    const baz: Fuga = fuga;

    console.log(baz);
}