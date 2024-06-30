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
const mode = "light";
// Array
//Method-1)
const arr = [10, 20, 30, 40];
const arr1 = ['a', 'b', 'c', 'd'];
//Method-2)
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
const func2 = (n, m, l) => {
    //type guard
    if (typeof l === "undefined")
        return "l is not provided";
    return n * m * l;
};
func2(20, 10);
func2(20, 5, 10);
//Default Parameters
const func3 = (n, m, l = 10) => {
    return n * m * l;
};
func3(10, 10);
const func4 = (...m) => {
    return m;
};
func4(1, 2, 3, 4, 5, 6, 7);
function yuvi(n) {
    return 50;
}
const yuvi1 = function yuvi1(...n) {
    return n;
};
//Functions with Object
//Method-1)
const getData = (product) => {
    console.log(product);
};
const getData1 = (product) => {
    console.log(product);
};
const productOne = {
    name: "Macbook",
    stock: 20,
    price: 81999,
    photo: "samplephotourl",
};
getData(productOne);
const getData2 = (product) => {
    console.log(product);
};
const productOne1 = {
    name: "Macbook",
    stock: 20,
    price: 81999,
    photo: "samplephotourl",
    id: "yuvraj"
};
getData(productOne);
//Never Type => jab hum error throw krte h toh return type never hota h.
const errorHandler = () => {
    throw new Error();
};
// Classes = javascript me access specifiers nhi hote lekin typescript me c++ ki trh 3 access specifiers h. Isme by-default public hote h.
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    // myHeight = () => {
    //     return this.height;
    // }
    //upar vala code aur ye line dono same h.
    // myHeight = () => this.height;
    //getter => ye hamesha 1 value return krega
    get getMyHeight() {
        return this.height;
    }
    //setter => ye hamesha parameter me keval 1 value lega.
    set changeHeight(val) {
        this.height = val;
    }
}
const yuvi2 = new Player(15, 50, 100);
//hum isko run krege toh hume console me 50 mil jaiye ga kyoki private keyword keval ts me h js me nhi aur hmari ts ka code js me convert hota h aur phir browser pr jata h isliye error nhi aaye ga.
// console.log(yuvi2.height);
console.log(yuvi2.weight);
// console.log(yuvi2.myHeight());
//setter aur getter function ko hum call nhi krte h hum directly variable ki trh access krte h.
console.log(yuvi2.getMyHeight);
yuvi2.changeHeight = 10;
console.log(yuvi2.getMyHeight);
class Player2 extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.getMyPower = () => this.power;
        this.special = special;
    }
}
const yuvi3 = new Player2(15, 50, 100, true);
console.log(yuvi3.weight);
// console.log(yuvi3.myHeight());
console.log(yuvi3.getMyPower());
console.log(yuvi3.id);
class Product1 {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        // public name: string;
        // public price: number;
        // public stock: number;
        this.member = true;
        this.getMember = () => this.member;
        //    this.name = name;
        //    this.price = price;
        //    this.stock = stock; 
    }
}
const prod1 = new Product1("Macbook", 200000, 20);
prod1.getMember();
//TYPE ASSERTION = ye ek technique h jiski help se hum compiler ko btate h ki hume variable ka type pta h. Ye type checking ko override krne k kaam aati h. Type assertion do tarikon se ki ja sakti hai: "angle-bracket" syntax ya "as" syntax.
// const btn = document.getElementById("btn") as HTMLElement;
const btn = document.getElementById("btn");
btn.onclick;
//yadi hum type assertion nhi dete h toh hume ? lgana hota h
// btn?.onclick
//hum ek tarika aue use kr skte h jisme hum btaye ge ki vo kuch bhi value ho skti h lekin null nhi hogi.
const btn1 = document.getElementById("btn");
btn1.onclick;
// const img = document.getElementById("myimg") as HTMLImageElement;
const img = document.querySelector("img");
img.src;
const form = document.getElementById("myform");
const myinput = document.querySelector("form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(myinput.value);
    console.log(value);
    console.log(typeof value);
    const h2 = document.createElement("h2");
    h2.textContent = String(value + 20);
    const body = document.querySelector("body");
    body.append(h2);
};
const myObj = {
    name: "Yuvraj",
    email: "yuvraj091102@gmail.com"
};
