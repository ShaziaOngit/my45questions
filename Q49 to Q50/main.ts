/*
Question 49
Function with rest parameters: Write a function that takes a  rest parameter representing 
multiple  hobbies. It should log each  hobby with a ststement saying you enjoy that hobby.*/

function logHobbies(...hobbies:string[]){
    hobbies.forEach((hobby)=>{
       console.log(`I enjoy${hobby}.`);

})
}

logHobbies("painting" ,"singing" ,"cycling","shopping");

/*
Question 50
Multiple templete Literals: Use templet  literals to create a miltiline string that
 describes  your ideal day. Include  at least three different activities.
 */
let myIdealDay =`My ideal day would involve:
1.Waking up early going for garden.
2.Spending few hours in Madarsah.
3.Ending the day by reading Quran.


console.log(myIdealDay);

/*
Question 51
Refractorinng to  arrow function : take a simple function thaat calculates the area of the rectangular it into an arrow function.
*/
// orignal function
//function calculatesArea(width:number,height:number):number{
   // return  width*height
//}

// refractored  Arrow function

// let calculatesAreaArrow =(width:number,height:number):number=>width*height
 //console.log(calculatesAreaArrow(3,4));

 
 /*Question 52
 Make a smartphone Object : create a simple way to keep the track of a smartphones details. Includes its brand model, and other key features 
 like how much storage it has the size of its screen, and how long its battery lasts.
*/
//let smartphone = {
   // brand :"Samsung",
   // model :"Galaxy S21",
   // spec :{
     // Storage :"128GB",
      //screenSize :"6.2 inches",
      //batteryLife :"18 hours",
   // }


//}

/*Question 53
Pulling apart a nested object: imagine you a list inside another  
   list that shows what a computer porogrammer knows , like coding languages tools, and software frameworks,
   find a way to get three specific skills from this list show them.
   */
  //let developerSkills = {
   // languages :["JavaScript","TypeScript","Python"],
   // frameworks :["React","Angular","Vue"],
    //tools:["Git","Webpack","Dockers"],
  //}
  //let{languages,frameworks,tools,}= developerSkills

 // console.log(languages:${languages[0]},Framework:${frameworks[0]},Tools:${tools[0]});//