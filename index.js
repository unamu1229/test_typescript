var message = "Hello, TypeScript!";
console.log(message);
var foo = {
    name: "foo"
};
console.log(foo.name);
// Mapはキーにオブジェクトを使える
var bar = new Map();
bar.set(foo, 123);
console.log(bar.get(foo));
var poyo1;
