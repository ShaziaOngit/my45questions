// union Literals

//let myname:string | null;

//myname =null;
//console.log(myname);

//myname ="zia";
//console.log(myname);

//myname=undefined; //Error
//myname = 13; //Error

//let myage: string | number;

//myage =17;//narrowing
//.log(myage);

//console.log(myAge.toLowerCase());//Error

//myage = "Dont Know";//narrowing
//console.log(myage);

//console.log(myage.toString());//common toboth types
                              //can be called even without narrowing

//console.log(myage.toLowerCase());//can be called on string
                                 //because of narrowing


//Union Types

//let unionType : string | number|boolean|null |undefined
//unionType ="Shazia"
//unionType ="Sannan"
//unionType ="Green Color"

//unionType =20
//unionType =2000
// =40000

//literal Types

//let literalTypes :"Shazia" | 40000

//literalTypes ="Shazia"
//literalTypes = 40000


//let  newAge =Math.random() >0.7? "Ahmed":70;
//newAge.toLower();//Error: Transpiler cannot narrow

//(newAge ==="Ahmed"){
    // Type of newAge: string
    //newAge.toUpperCase();//Can be called
    
//}

//(typeof newAge === "string"){
    //Typeof newAge ===: String
    //newAge.toUpperCase()//can be called
//}

//typeof newAge ==="string"
//? newAge.toUpperCase() //ok: string
//: newAge.toFixed(); //ok: number

let age: number |"died"| "unknown";

age =80;//ok
age ="died";//ok
//age="unkown";//ok
// age ="living";//Error


let zia: "zia"
zia ="zia";
//zia ="Ahmed";//Error

//You can also define a type alias
type RawData = boolean| number|string|null|undefined;
let data: RawData;

//you can even combine them

type Id = number| string;

//type IdMaybe =Id| undefined |null;

let a:string |number| boolean= 2000;
let b:String |number| boolean= "Shazia";
let c:string |number| boolean= false

type letType =string| number|boolean;

let d :letType =200
let e :letType ="shazia";
let f :letType = false

type Color = "red" |"green"|"blue"|"yellow"

 function setcolor(color:Color){
    console.log (`Color set to ${color}`);
    

 }

setcolor("red"), 
setcolor("green"),
setcolor("blue"), 
setcolor("yellow") 






