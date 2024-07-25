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
const user ={
    name: "Shazia",
    city:"Karachi"
}

const address ={
    street :"main street"
}

const newUser ={
    ...user,
    ...address,
}
console.log(newUser);
