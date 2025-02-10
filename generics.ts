namespace generics {
    /**
     * Generics
     */
    type Hoge<T> = {
        foo: T;
        bar: T;
        baz: T;
    }

    const hoge: Hoge<string> = {
        foo: 'foo',
        bar: 'bar',
        baz: 'baz'
    }

    console.log(hoge);

    type Fuga<T> = Readonly<Hoge<T>>;

    const fuga: Fuga<string> = {
        foo: 'foo',
        bar: 'bar',
        baz: 'baz'
    }

    console.log(fuga);

}
