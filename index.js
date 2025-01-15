"use strict";
var index;
(function (index) {
    let message = "Hello, TypeScript!";
    console.log(message);
    let foo = {
        name: "foo"
    };
    console.log(foo.name);
    // Mapはオブジェクトと異なり、キーにオブジェクトを使える
    let bar = new Map();
    bar.set(foo, 123);
    console.log(bar.get(foo));
    // error TS1268: An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type.
    // let poyo1 : {
    //     [k: hoge]: number;
    // }
})(index || (index = {}));
