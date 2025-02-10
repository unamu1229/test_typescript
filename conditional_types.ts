namespace conditional_types {
    /**
     * Conditional Types
     */
    interface Say {
        say(): void;
    }

    type Hoge<T> = T extends Say ? T : any;

    class Foo implements Say {
        say() {
            return 'Foo';
        }
    }

    const hoge: Hoge<Foo> = new Foo();
    console.log(hoge.say());

    let fuga: Hoge<string> = "fuga";
    fuga = 123;

    console.log(fuga);

    /**
     * infer と Conditional Types を利用して　piyo の型を取得する
     */
    interface Fuga<T> {
        piyo: T;
        poyo: string;
    }

    type Bar<T> = T extends Fuga<infer U> ? U : T;


    const bar: Bar<Fuga<string>> = 'barbar';

    console.log(bar);

    type Piyo = {
        foo: string;
        bar: string;
    }

    const piyo: Bar<Piyo> = { foo: 'foo', bar: 'bar' };
    console.log(piyo);

    const hoyoyo: Bar<Fuga<Piyo>> = {
        foo: 'hoyoyo-foo',
        bar: 'hoyoyo-bar',
        // Object literal may only specify known properties, and 'poyo' does not exist in type 'Piyo'.
        //poyo: 'hoyoyo-poyo',
    };
    console.log(hoyoyo);

}
