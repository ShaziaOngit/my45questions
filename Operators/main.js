// Rest Operators: Pack Elements
//function sum(num1:number, num2:number,...other:number[]){
//console.log(other);
//}
//sum(2,5,2,6)
// Spread Operators :Unpacks Elements [] {}
//Clone  Copy
//const numbers =[2,3,4]
//const newnumbers =[...numbers]
//console.log(newnumbers);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Merge
//const oldNumbers=[2,3,4]
//const newNumbers =[5,6,7]
//const totalNumbers=[...oldNumbers,...newNumbers]
//console.log(totalNumbers);
// Compose 
//const oldNumbers=[2,3,4]
//const newNumbers =[5,6,7]
//const totalNumbers =[100,...oldNumbers,...newNumbers,300]
//.log(totalNumbers);
// object
//  clone
//const  order = {
//    id:2,
//   date: "02/07/2024",
//   customerName:"Shazia"
//}
//const newOrder ={
// ...order,
//}
//console.log(newOrder);
// Merge
var user = {
    name: "Shazia",
    city: "Karachi"
};
var address = {
    street: "main street"
};
var newUser = __assign(__assign({}, user), address);
console.log(newUser);
