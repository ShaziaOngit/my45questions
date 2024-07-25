// Function
// syntax: keyword name() statement

// Basic Function
function invitation(name:string){
    console.log(`Assalamualaikum,${name} please join me`);
}
invitation("Shazia")

// Parameters
function add(num1:number,num2:number){
    console.log(num1+num2);
}
add(9,6)

// 02 types of parameters
// optional parammeters
// default parameters

// optional parameters

function invite(name?:string){
    if(name){
        console.log(`Assalamualaikum,${name}`);
    } else {
        console.log("Assalamualaikum,friend");
    }
}

invite("Shazia")
invite()

// Return
// Example 01

function addition(num1:number,num2:number){
    return num1+num2
}
console.log(addition(3,4));

// Example 02

function guest(name:string){
    return`Assalamualaikum,${name}`
}
let guestName : string = guest("Shazia")
console.log(guestName);

