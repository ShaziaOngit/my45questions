/* Q46
Enhanced Laptop Object:Construction an Object for a laptop including 
properties make , mpodel, year,and a method describe() that logs a sentense about the laptop*/

//let laptop = {
 //   make: "Dell",
   // model:"15 Gen 7",
   // year :2021,
   // describe :function(){
       // console.log(`This laptop is a ${this.year} ${this.make}${this.model}`);
   // }
//}
//laptop.describe()

/*Array Desstructing :Given an array of representing different laptops, each with properties`make`,`model` `year`, use array destructing to assign the first and second laptrops to variables. then, log these variables.
*/

//let laptops =[ 
    //{make:"Dell",model:"XPS 15",Year:2021},
    //{make:"Apple",model:"MacBook Pro",Year :2020},  
   // {make:"HP",model:"Spectra x360",Year:2021},
//]
//let[ laptop1,laptop2,laptop3]=laptops

//console.log(laptop1);
//console.log(laptop2);
//console.log(laptop3);

/*
Question 48
Combining Array with Spread Operaters:Suppose you are comparing  prices of  two  different sets of laptops.
Use the spread operator to combine these arrays into a single array sorted in ascending order,then log the result.*/

let priceSet1 =[1300,1500,1700]
let priceSet2 =[900,1100,1200]

let combinedPrices =[...priceSet1,...priceSet2].sort((a,b)=> a-b)

console.log(combinedPrices);

