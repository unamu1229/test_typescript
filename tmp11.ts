namespace tmp11 {
    type Hoge = {
        name: string;
        event?: string;
    }


    const hoge: Hoge = {
        name: 'hoge',
        event: "update"
    }

    console.log(hoge);

    const fuga: Hoge = {
        name: 'fuga'
    }

    console.log(fuga);
}