namespace tmp2 {
    const hoge = 'aaa';
    const foo: boolean = Boolean(hoge && 111);
    console.log(foo);

    const hoge2 = {
        name: 'aaa',
        age: true
    }

    console.log(Object.values(hoge2).every((value) => value));


    enum Color {
        RED,
        BLUE,
        GREEN,
    }

    const myColor1: Color = Color.RED;
    const myColor2: number = Color.RED;
    const myColor3: Color = 1;

// Type '3' is not assignable to type 'Color'.
// const myColor4: Color = 3;


    console.log(myColor1);
    console.log(myColor2);
    console.log(myColor3);
}
