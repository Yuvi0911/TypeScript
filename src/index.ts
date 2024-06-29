
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

type UserName=(
    n: number,
    m: number
) => number ;
const func1: UserName = (n,m) => {
    console.log(n,m);
    return n*m;
}

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