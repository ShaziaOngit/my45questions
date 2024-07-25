// Function
// syntax: keyword name() statement
// Basic Function
function invitation(name) {
    console.log("Assalamualaikum,".concat(name, " please join me"));
}
invitation("Shazia");
// Parameters
function add(num1, num2) {
    console.log(num1 + num2);
}
add(9, 6);
// 02 types of parameters
// optional parammeters
// default parameters
// optional parameters
function invite(name) {
    if (name) {
        console.log("Assalamualaikum,".concat(name));
    }
    else {
        console.log("Assalamualaikum,friend");
    }
}
invite("Shazia");
invite();
// Return
// Example 01
function addition(num1, num2) {
    return num1 + num2;
}
console.log(addition(3, 4));
// Example 02
function guest(name) {
    return "Assalamualaikum,".concat(name);
}
var guestName = guest("Shazia");
console.log(guestName);
