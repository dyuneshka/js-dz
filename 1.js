// 1 задание

let x1 = 2;
let y1 = 3;

let x2 = 10;
let y2 = 5;

let a = Math.abs(x1 - x2);
let b = Math.abs(y1 - y2);

console.log(a*b);

// 2 задание

let a1 = 13.890123;
let b1 = 2.891564;
let n = 2;

let adrob = Math.round(a1 % 1 * Math.pow(10,n));
let bdrob = Math.round(b1 % 1 * Math.pow(10,n));


console.log("adrob > bdrob ", adrob > bdrob);
console.log("adrob < bdrob ", adrob < bdrob);
console.log("adrob >= bdrob ", adrob >= bdrob);
console.log("adrob <= bdrob ", adrob <= bdrob);
console.log("adrob === bdrob ", adrob === bdrob);
console.log("adrob != bdrob ", adrob != bdrob);

// 3 задание

let n1 = 0;
let m = 100;

let range = Math.abs(m - n1);

let namberrinrange = Math.floor(Math.random() * range / 2) * 2 + 1;
console.log(namberrinrange);