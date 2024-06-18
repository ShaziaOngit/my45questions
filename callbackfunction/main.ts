// callback function

function sayHello(){
    console.log("Hello");
}

function sayHi(){
    console.log("Hi...");
}

function add(num1:number,num2:number,callback:any){
    console.log(num1+num2);
    callback();
    }

//add(2,6,sayHello);
//add(4,7,sayHi);
add(1,2,function(){
    console.log("ShukarAlhumdulillah");
})

