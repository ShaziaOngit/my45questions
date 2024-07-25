// Fuction Overloading

//Overload Signature

function addition(arg1:string,arg2:string):string
function addition(arg1:number,arg2:number):number
function addition(arg1:string,arg2:number):string
function addition(arg1:boolean,arg2:boolean):boolean
    
//Implementation Signature

function addition(arg1: any, arg2:any):any{
    return arg1 + " "+ arg2
}

console.log(addition("shazia","khan"));
console.log(addition(6,1));
console.log(addition("shazia",1));
console.log(addition(true,false));

//Shukar Ahumdulillah
