// Array of Object

interface Employee {
    employeeId: number;
    employeeName:string;
    salary:number
}
let collectionOfEmployee : Employee[] =[
    {
        employeeId:8736,
        employeeName:"Sannan Khan",
        salary:50000
    },
    {
        employeeId:5456,
        employeeName:"Zia Khan",
        salary:40000
    }
]

//console.log(collectionOfEmployee);



//Structural Typing

interface Circle {
    radius :number
    }


interface Disk {
    radius: number
    }
    let circle: Circle = {
        radius :20
    }

    let disk: Disk = {
        radius : 40
    }

    disk = circle //ok
    circle = disk // ok
    
    // Additional Properties

interface Cylinder {
    radius:number;
    height:number
}

//let cylinder : Cylinder = {
//  radius :14,
//    height:7

    //circle = cylider //ok
    //cylider= circle  // error
//}


   // Fresh Object

//let myType = {
   // name : "Zia",
    //Id: 2
//}

    //myType ={
    //Id: 3,
    //name :"Moon"
//}

  myType  ={
    Id: 4,
    name :"Ali",
    age: 20
//}


// Stale Object

let  myType  ={
     name :"Asif",
     Id:3,

}   let  myType2 ={
     Id: 4,
     name:"Ahad"
}
let myType = myType2 //ok
    myType2=myType  //ok

