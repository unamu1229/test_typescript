namespace tmp10 {
    const command_line_args: string = process.argv[2];

    type Hoge = {
        foo: string;
        bar: number;
        hoge: string;
        kind: 'hoge';
    }

    type Fuga = {
        foo: string;
        bar: number;
        baz: string;
        kind: 'fuga';
    }

    let poyo: Hoge | Fuga;

    if (command_line_args === 'hoge') {
        let tmp = {
            foo: 'foo',
            bar: 1,
            hoge: 'hogehoge',
        }
        poyo = {
            kind: 'hoge',
            ...tmp
        }
    } else if (command_line_args === 'fuga') {
        let tmp = {
            foo: 'foo',
            bar: 1,
            baz: 'bazbazbaz',
        }
        poyo = {
            kind: 'fuga',
            ...tmp
        }
    } else {
        throw new Error('Invalid command line args');
    }

// if ("hoge" in poyo) {
//     poyo as Hoge;
//     console.log(poyo.hoge);
// } else if ("baz" in poyo) {
//     poyo as Fuga;
//     console.log(poyo.baz);
// }

    if (poyo.kind === 'hoge') {
        poyo as Hoge;
        console.log(poyo.hoge);
    } else if (poyo.kind === 'fuga') {
        poyo as Fuga;
        console.log(poyo.baz);
    }

}
