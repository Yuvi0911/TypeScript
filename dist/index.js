"use strict";
const a = 24;
const b = "yuvi";
// union type 
let surname;
surname = 453;
surname = "Gaur";
console.log(a);
console.log(b);
const func = (n, m) => {
    console.log(n, m);
    // return String(n*m);
    return n * m;
};
let c = "yuvraj";
let d = 75;
const func1 = (n, m) => {
    console.log(n, m);
    return n * m;
};
// Array
//Method-1
const arr = [10, 20, 30, 40];
const arr1 = ['a', 'b', 'c', 'd'];
//Method-2
const arr2 = [];
const arr3 = [];
//if i want both number and string
const arr4 = [];
arr4[0] = "yuvraj";
//tuple => we can say it a fixed size array
const tup = [1, "yuvraj", 3];
//Object
//Method -1
const obj = {
    height: 12,
    weight: 50,
};
const obj1 = {
    gender: true,
    height: 12,
    weight: 50,
};
const obj2 = {
    gender: false,
    height: 20,
    weight: 70,
};
const obj3 = {
    height: 45,
    weight: 60,
};
const obj4 = {
    height: 15,
    weight: 59,
    gender: true,
    length: 10,
};
const obj5 = {
    height: 15,
    weight: 59,
    length: 10,
    funct: (n, m) => {
        console.log(n * m);
    }
};
// obj5?.funct(10,20)
//Functions
