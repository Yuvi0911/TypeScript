
const a = <number>24;
const b:string = "yuvi";

// union type 
let surname: string | number;
surname = 453;
surname = "Gaur"

console.log(a);
console.log(b);

const func = (n: number, m: number):number => {
    console.log(n,m);
    // return String(n*m);
    return n*m;
}

//type aliases=> iski help se hum apne custom data types bna skte h.
type MyName = string | number;
let c:MyName = "yuvraj";
let d:MyName = 75;

type UserName=( n: number, m: number) => number ;
const func1: UserName = (n,m) => {
    console.log(n,m);
    return n*m;
}

type themeMode = "light" | "dark";
const mode:themeMode = "light";

// Array
//Method-1)
const arr: number[] = [10, 20, 30, 40];
const arr1: string[] = ['a','b','c','d'];
//Method-2)
const arr2: Array<string> = [];
const arr3: Array<boolean> = [];
//if i want both number and string
const arr4: Array<string | number> = [];
arr4[0] = "yuvraj";

//tuple => we can say it a fixed size array
const tup: [number, string, number] = [1, "yuvraj", 3];

//Object
//Method -1
const obj: {
    height: number;
    weight: number;
} = {
    height: 12,
    weight: 50,
}
//Method - 2) Using type aliases
type Obj = {
    height: number,
    weight: number,
    //gender is optional, it is not required to be given.
    gender ?: boolean,
}
const obj1: Obj ={
    gender: true,
    height: 12,
    weight: 50,
}
const obj2: Obj = {
    gender: false,
    height: 20,
    weight: 70,
}
const obj3: Obj = {
    height: 45,
    weight: 60,
}

//Interface = ye class ki trh h, hum isko inherit kr skte h extends keyword ki help se.
interface Obj1 {
    height: number;
    weight: number;
    gender ?: boolean;
}
type FuncType = (n:number, m:number) => void;
interface NewObj extends Obj1 {
    length: number;
    // funct ?: (n:number, m:number) => void;
    funct ?: FuncType;
}
const obj4: NewObj = {
    height: 15,
    weight: 59,
    gender: true,
    length: 10,
}
const obj5: NewObj = {
    height: 15,
    weight: 59,
    length: 10,
    funct:(n,m)=>{
        console.log(n*m);
    }
}
// obj5?.funct(10,20)

//Functions
type FuncType1 = (n: number, m:number, l?: number) => number | string;
const func2: FuncType1 = (n, m, l) => {
    //type guard
    if(typeof l === "undefined") return "l is not provided";

    return n*m*l;
}
func2(20,10);
func2(20,5,10); 

//Default Parameters
const func3:FuncType1 = (n, m, l=10) => {
    return n*m*l;
}
func3(10,10);

//Rest Operator=> yadi hume ye nhi pta ki kitne no parameter me aaye ge function me toh hum rest operator ka use kr skte h. Iski help se hum sbhi no ko ek array k roop me accept kr skte h.
// const func4 = (...m:number[])=>{
    //     return m;
    // }
type FuncType2 = (...m:number[]) => number[];
const func4:FuncType2 = (...m)=>{
    return m;
}
func4(1,2,3,4,5,6,7);

function yuvi(n:number):number{
    return 50;
}

const yuvi1:FuncType2 = function yuvi1(...n){
    return n;
}

//Functions with Object
//Method-1)
const getData = (product:{name: string, stock:number, price: number, photo:string}) : void => {
    console.log(product);
}

// Method-2)
type GetDataType = (product:{
    name:string;
    stock: number;
    price: number;
    photo: string;
}) => void;
const getData1: GetDataType = (product) => {
    console.log(product);
}
const productOne: {
    name:string;
    stock: number;
    price: number;
    photo: string;
} = {
    name: "Macbook",
    stock: 20,
    price: 81999,
    photo: "samplephotourl",
}
getData(productOne);

// Method-3)
// hum ishe interface ki jagah type ki help se bhi bna skte h jaise ki type Product = {}
interface Product {
    name:string;
    stock: number;
    price: number;
    photo: string;
    //humne ek baar jo value de di hamesa vo hi rhi ge hum ushe change nhi kr skte.
    readonly id: string;
}
type GetDataType1 = (product:Product) => void;
const getData2: GetDataType = (product) => {
    console.log(product);
}
const productOne1: Product = {
    name: "Macbook",
    stock: 20,
    price: 81999,
    photo: "samplephotourl",
    id: "yuvraj"
}
getData(productOne);

//Never Type => jab hum error throw krte h toh return type never hota h.
const errorHandler = (): never=>{
    throw new Error();
}


// Classes = javascript me access specifiers nhi hote lekin typescript me c++ ki trh 3 access specifiers h. Isme by-default public hote h.
class Player {
    // private height;
    // public weight;
    // protected power;
    // constructor(height: number, weight: number){
    //     this.height = height;
    //     this.weight = weight;
    // }

    //ye code upar commented code k equal h.
    readonly id:string
    constructor (private height: number, public weight: number, protected power: number){
        this.id = String(Math.random()*100)
    }

    // myHeight = () => {
    //     return this.height;
    // }
    //upar vala code aur ye line dono same h.
    // myHeight = () => this.height;

    //getter => ye hamesha 1 value return krega
    get getMyHeight():number{
        return this.height;
    }
    //setter => ye hamesha parameter me keval 1 value lega.
    set changeHeight(val: number){
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


class Player2 extends Player{
    special: boolean;
    constructor(height: number, weight: number, power: number, special: boolean){
        super(height, weight, power);
        this.special = special;
    }
    getMyPower = () => this.power;
}
const yuvi3 = new Player2(15, 50, 100, true);
console.log(yuvi3.weight);
// console.log(yuvi3.myHeight());
console.log(yuvi3.getMyPower());
console.log(yuvi3.id);

//Interface with class

interface ProductType {
    name: string;
    price: number;
    stock: number;
    // getMember: () => boolean;
    offer?: boolean;
}
interface GiveId {
    getMember: () => boolean;
}
class Product1 implements ProductType, GiveId{
    // public name: string;
    // public price: number;
    // public stock: number;
    private member: boolean = true;

    constructor(public name: string, public price: number, public stock:number){
    //    this.name = name;
    //    this.price = price;
    //    this.stock = stock; 
    }

    getMember = () => this.member;
}
const prod1 = new Product1("Macbook", 200000, 20);
prod1.getMember();


//TYPE ASSERTION = ye ek technique h jiski help se hum compiler ko btate h ki hume variable ka type pta h. Ye type checking ko override krne k kaam aati h. Type assertion do tarikon se ki ja sakti hai: "angle-bracket" syntax ya "as" syntax.
// const btn = document.getElementById("btn") as HTMLElement;
const btn = <HTMLElement>document.getElementById("btn");
btn.onclick;
//yadi hum type assertion nhi dete h toh hume ? lgana hota h
// btn?.onclick

//hum ek tarika aue use kr skte h jisme hum btaye ge ki vo kuch bhi value ho skti h lekin null nhi hogi.
const btn1 = document.getElementById("btn")!;
btn1.onclick;

// const img = document.getElementById("myimg") as HTMLImageElement;
const img = document.querySelector("img")!;
img.src;

const form = document.getElementById("myform") as HTMLFormElement;
const myinput = document.querySelector("form > input") as HTMLInputElement;
form.onsubmit=(e: SubmitEvent)=>{
    e.preventDefault();
    const value = Number(myinput.value)
    console.log(value);
    console.log(typeof value);

    const h2 = document.createElement("h2");
    h2.textContent = String(value + 20);
    const body = document.querySelector("body")!;
    body.append(h2)
}


interface Person{
    name: string,
    email: string,
    //humne ye likh diya toh hum kitni bhi value de skte h.
    // [key: string] : string;
}
const myobj: Person = {
    name: "Yuvraj",
    email: "yuvraj091102@gmail.com",
}
let key="name";
// myobj[key as keyof Person];
myobj[key as keyof typeof myobj];

const getName = () : string => {
    return myobj["name"];
}
const getEmail = () : string => {
    return myobj["email"];
}
// const getData3 = (key: "name" | "email"): string=>{
//     return myobj[key];
// }
// const getData3 = (key: string): string=>{
//     return myobj[key];
// }
const getData3 = (key: keyof Person): string=>{
    return myobj[key];
}
getData3("name");


//UTILITY TYPE

// 1) Partial<type> => yadi hume ek type ki sbhi properties ko optional bnana h toh hum iski help se bna skte h.
type User = {
    name: string,
    email: string,
}
type User2 = Partial<User>

// 2) Required<Type> => oposite of partial. Sbhi ko mandatory bna dega.
type User3 = {
    name?: string,
    email: string,
}
type User4 = Required<User3>
// const user5: Required<User3> ={
// name: "yuvraj",
// email: "yuvraj091102@gmail.com"
// }

// 3) Readonly<Type> => makes every property readonly
type User6 = {
    name: string,
    email: string,
}
const user6: Readonly<User6>={
    name: "yuvraj",
    email: "yuvraj091102@gmail.com"
}

// 4) Record<keys, Type>
// type User7 = {
//     name: string;
//     email: string;
// }
// type User8 = Record<"name" | "email" | "gender", string>
// ex=>
interface UserInfo {
    age: number;
}
type UserName1 = "john" | "yuvi" | "elon" | "jack";
const users: Record<UserName1, UserInfo> = {
    john: {age: 20},
    yuvi: {age: 21},
    elon: {age: 22},
    jack: {age: 24},
}

// 5)Pick<Type, Keys> => iski help se hum select kr skte h ki hume ek type me se kon kon si value chaiye dusre type me.
interface OrderInfo {
    readonly id: string;
    user: string;
    city: string;
    state: string;
    country: string;
    status: string;
}
type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">

// 6) Omit<Type, Keys> => jin key ko select krege vo hat jaiye ge naye type me.
interface OrderInfo1 {
    readonly id: string;
    user: string;
    city: string;
    state: string;
    country: string;
    status: string;
}
type ShippingInfo1 = Omit<OrderInfo, "city" | "state" | "country">

// 7) Exclude<Type, ExcludeUnion> => iski help se hum union value me se koi bhi type ko hta skte h. Random me hum boolean use nhi kr skte h.
type MyUnion = string | number | boolean
type Random = Exclude<MyUnion, boolean>

// 8) Extract<Type, Union> => iski help se hum ek type me se 1 value ko extract kr k dusre type me de skte h. Random1 me hum keval boolean use kr skte h.
type MyUnion1 = string | number | boolean
type Random1 = Extract<MyUnion1, boolean>

// 9) NonNullable<Type> => null aur undefined k alava sbhi ko de ga.
type MyUnion2 = string | number | boolean | null | undefined
type Random2 = NonNullable<MyUnion2>

// 10) Parameters<Type> => parameters ka type bta dega as an array.
const myfunc = (a: number, b:string)=>{
    console.log(a + b);
}
type Random3 = Parameters<typeof myfunc>

// 11) ConstructorParameters<Type> => class k constructor k parameter ka type bta dega.
class SampleClass {
    constructor(public s: string, public t: number){}
}
type Random4 = ConstructorParameters<typeof SampleClass>

// 12) ReturnType<Type> => function ki return value ka type btaye ga.
const myfunc1 = (s: string, t:number): number => {
    return t;
}
type Random5 = ReturnType<typeof myfunc1>

// 13) InstanceType<Type>
class SampleClass1 {
    constructor(public s: string, public t: number){}
}
type Random6 = InstanceType<typeof SampleClass>
const user: Random6 = {
    s: "yuvraj",
    t: 18,
}

//GENERICS

