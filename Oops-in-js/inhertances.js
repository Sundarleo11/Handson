let a = { P: 10, q: "harry", r: false };

let b = Object.create(a);
let c = Object.create(b);

//let b=Object.create(a);

console.log(a);
console.log(b);
console.log(b.q);
b.q = "demo";
console.log(b.q);
console.log(b);
console.log(b.c);
console.log(b.q);
// proto chain
/*
let a={b:"killed"};
undefined
console.log(a);
VM201:1 {b: 'killed'}b: "killed"[[Prototype]]: Object
undefined
Object.__proto__
ƒ () { [native code] }
Object.__proto__.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
Object.__proto__.isPrototypeof(String.prototype)
*/
