//coercion

let a = 10;
let b = "6";
b = parseInt(b, 10);
let c = a + b;
console.log("Answer is " + c);

let d = parseInt("bob", 10);
let e = isNaN(d);
console.log(d);
console.log(e);