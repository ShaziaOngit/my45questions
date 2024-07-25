/*
Question 49
Function with rest parameters: Write a function that takes a  rest parameter representing
multiple  hobbies. It should log each  hobby with a ststement saying you enjoy that hobby.*/
//function logHobbies(...hobbies:string[]){
//hobbies.forEach((hobby)=>{
//  console.log(`I enjoy${hobby}.`);
//})
//}
//logHobbies("painting" ,"singing" ,"cycling","shopping");
/*
Question 50
Multiple templete Literals: Use templet  literals to create a miltiline string that
 describes  your ideal day. Include  at least three different activities.
 */
//let myIdealDay =`My ideal day would involve:
//.Waking up early going for garden.
//2.Spending few hours in Madarsah.
//3.Ending the day by reading Quran.
//`
//console.log(myIdealDay);
/*
Question 51
Refractorinng to  arrow function : take a simple function thaat calculates the area of the rectangular it into an arrow function.
*/
//orignal function
function CalculateArea(width, height) {
    return width * height;
}
// refactored Arrow function
var CalculatesAreaArrow = function (width, height) { return width * height; };
console.log(function (calculatesAreaArrow) { return (3 * 4); });
