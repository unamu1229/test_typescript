namespace utility_types {

    /**
     * Readonly<T> はオブジェクトの全てのプロパティを読み取り専用にする
     */

    type Hoge = {
        foo: string;
        bar: number;
        baz: boolean;
    }

    const hoge: Hoge = {
        foo: 'foo',
        bar: 1,
        baz: true
    }

    hoge.foo = 'hoge';

    console.log(hoge);

    type Fuga = Readonly<Hoge>;

    const fuga: Fuga = {
        foo: 'foo',
        bar: 1,
        baz: true
    }

    // Cannot assign to 'foo' because it is a read-only property.
    //fuga.foo = 'hoge';

    console.log(fuga);
}
