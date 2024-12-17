async function fuga() {
    console.log('fuga');
    setTimeout(() => {
        console.log('fuga2');
    }, 1000);
}

async function poyo() {
    console.log('poyo');
    setTimeout(() => {
        console.log('poyo2');
    }, 1000);
}

// 非同期
fuga();
poyo();


function foo() {
    return new Promise<void>((resolve, reject) => {
        console.log('foo');
        setTimeout(() => {
            console.log('foo2');
            resolve();
        }, 3000);
    });
}

function bar() {
    return new Promise<void>((resolve, reject) => {
        console.log('bar');
        setTimeout(() => {
            console.log('bar2');
            resolve();
        }, 3000);
    });
}
// 同期
async function baz() {
    await foo();
    await bar();
    return 'baz';
}
baz().then((value) => {
    console.log(value);
});


async function aaa(value) {
    console.log(value);
    await (() => {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                console.log(value + '2');
                resolve();
            }, 1000);
        });
    })();
    return;
}




async function bbb() {
    await aaa('あああ');
    await aaa('いいい');
    return 'ううう';
}

setTimeout(() => {
    console.log('setTimeout');
}, 10000);

bbb().then((value) => {
    console.log(value);
});

