namespace tmp {
    class Foo {
        private readonly hoge: string = 'hoge';

        // プロパティに定数は利用できない
        // A class member cannot have the 'const' keyword.
        // const fuga: string = 'fuga';
    }

    const foo = new Foo();
    console.log(foo);

    export interface RequiredParams {
        entryId: string;
        phoneNumber?: string;
        qmmcdk: string;
        caller: string;
    }

    const requiredParams: RequiredParams = {
        entryId: 'entryId',
        qmmcdk: 'qmmcdk',
        caller: 'caller'
    }

    console.log(requiredParams.phoneNumber);

}
