// Recursive Function

//function recursivefunc(condition:number){
  //  if(condition>=0){
   // console.log("Salam World!");
      //  recursivefunc(condition-1)
 //}
//}
// recursiveFun(5)

// Visualization of the Calls:
//func(5) prints 1 and calls func(4) 1
//func(4) prints 1 and calls func(3) 2
//func(3) prints 1 and calls func(2) 3
//func(2) prints 1 and calls func(1) 4
//func(0) prints 1 aand stops 6

function recursiveFunc(count:number){
if(count>=0){
    console.log("CountDown:",count);
        recursiveFunc(count-1)
   }
}

recursiveFunc(5)
console.log(recursiveFunc);