// Promise

// syntax
//let promise =new Promise ((resolve,reject) => {...})
let romise = new Promise((resolve,reject) => {
    console.log("I am promise");
   // resolve("Success")
   reject("Some error occured")
})

//.then()
//promise.then(() =>{...})

//.catch()
//promise.catch(()=> {...})


const getPromise =() => {
    return new Promise((resolve, reject) => {
       console.log("Iam promise") ;
      // resolve("Success")
       reject("Some error occurced")
    })
}

let promise = getPromise()
promise.then((res) => {
    console.log("Promise fulfilled,res");
})

promise .catch((err)=> {
    console.log("rejected,err");
})


