// step 09 part 01
//Note: All parameters are required
//Named function
//function add(x:number,y:number):number {
//return  x+y;
//}
//console.log(add(4,8))
//Anonymous function
//let myAdd1= function (x:number,y:number):number {
//return x+y;
//}   
//console.log(myAdd1(3,4));
// Anonymous function with explicit type
//let myAdd2:(x:number,y:number)=>number =function(x:number,y:number){
//return x+y;
//};
// types Names dont  matter
//let myAdd3: (baseValue:number,increment:number)=>number=function(x:number,y:number){
// return x+y;
//}; 
//console.log(myAdd3(1,2))
// step 09 part 2
// Arrow function
//let myAdd4 =(a:number,b:number) =>a+b;
// output will be:var my add4= function(a:number,b:number){return}
//console.log(myAdd4(4,4));
//type GreetFunction =(a:string) => void;
//function greeter(fn:GreetFunction) {
//....
//}
// step 09 (b)
//Named function with optional parameters
//function buildName(firstName: string,lastName?:string): string {
//if (lastName)
//return firstName+ " " +lastName;
//else
// return firstName;
//}
//console.log(buildName("Shazia"))
//console.log(buildName("Shazia","Jamal"))
//let result1 =buildName("Tom"); //ok
//let result2 =buildName("Tom" ,"Eden","Angel");//error,too many parameters
//let result3 =buildName("Tom","Eden"); //also ok
//anonymous function type with default parameters
// (Note that the  parameter type will be optional when used with default)
//let buildName1 :(firstName : string,lastName?:string)=> string =
//function(firstName:string,lastName="Khan") :string {
// if (lastName)
// return firstName +" "+lastName;
//else
//return firstName;
//}
//console.log(buildName1("Sannan"));
//console.log(buildName1("Sannan","Jamal"))
//console.log("Shukar,Ahumdulillah");
/////////////////////////////////////////////////step 09 apsrt 02//////////////////////////////////////
// Step 09 (d)
// function_ rest_parameter
//function  buildName(firstName: string, ...restOfName: string[]):string {
// return firstName + " " +restOfName.join(" ")
//}
//var employeeName = buildName("Aman","Faheem","Mehek", "Asif");
//console.log(employeeName);
// step 09 (e)
// callback ()
//function salam(callback:any,newname:string){
//callback("Shazia")
//}
//let arrowfunc =(name:string)=> {
//console.log(`Salam ${name}`);
//}
//salam(arrowfunc,"Shazia")
//Promise
//syntax
//let myPromise = new Promise (function(resolve,reject){
// console.log("promise pending");
// setTimeout(function () {
//  console.log("Promise resolved");
// resolve(["Shoaib","Rabia","Sannan"])
//},1000);
//});
//myPromise.then (function(res){
//  console.log(res);
//}).catch(function(err){
//   console.log("Something went wrong");
//});
// step 09 (f)
//function_overloads
//function sum(a:number,b:number):number
//function sum(a:string,b:string):string
//function sum(a:any,b:any):any{
 //return a+b
//}
//console.log(sum(3, 4));
//console.log(sum("Salam", "Shazia"));
