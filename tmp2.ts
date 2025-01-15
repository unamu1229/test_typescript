namespace tmp2 {
    const foo = Object.keys({"hoge": 1, "fuga": 2}).map((key) => {
        return {[key]: key};
    });

    console.log(foo);
    console.log(...foo);
    console.log(Object.assign({}, ...foo));
}
