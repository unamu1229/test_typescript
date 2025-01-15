namespace index {
let message: string = "Hello, TypeScript!";
console.log(message);

type hoge = {
    name: string;
}


let foo: hoge = {
    name: "foo"
}

console.log(foo.name);

// Mapはオブジェクトと異なり、キーにオブジェクトを使える
let bar: Map<hoge, number> = new Map();
bar.set(foo, 123);

console.log(bar.get(foo));

// error TS1268: An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type.
// let poyo1 : {
//     [k: hoge]: number;
// }
}
