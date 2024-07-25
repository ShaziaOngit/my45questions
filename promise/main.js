// Promise
// syntax
//let promise =new Promise ((resolve,reject) => {...})
var romise = new Promise(function (resolve, reject) {
    console.log("I am promise");
    // resolve("Success")
    reject("Some error occured");
});
//.then()
//promise.then(() =>{...})
//.catch()
//promise.catch(()=> {...})
var getPromise = function () {
    return new Promise(function (resolve, reject) {
        console.log("Iam promise");
        // resolve("Success")
        reject("Some error occurced");
    });
};
var promise = getPromise();
promise.then(function (res) {
    console.log("Promise fulfilled,res");
});
promise.catch(function (err) {
    console.log("rejected,err");
});
