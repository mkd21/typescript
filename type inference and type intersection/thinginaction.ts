// type inference 

// inference means to assume by its owm 

let m;       //here, ts has implicitly infered as any type
let n = 12;  // here it's number
let k = "name"; // here it's string
let l = true;   // here it's boolean


// let details = {
//     name : "mayank",
//     age : 27
// }

// details.name = "mayank deep";

// details.age = 26;

// details.height = "5.8 feet";               // this is not allowed in ts. although js will not have any problem with this. 
                                          //  here we are adding new property in an object which is allowed in js but not in ts

                                          // because ts has already infered the value of object as {name : string , age : number}

                                        //   there are ways to remove this restriction


// let details : {name : string , age : number , height ? : string} = {
//     name : "mayank",
//     age : 26
// }

// details.height = "5.8 feet";

// console.log(details);



// if we create another object toh kya uske aage bhi aise likhte jynge??

// not required becasue we can store the types in a variable with keyword (type)

                                            // height is optional
type Details = {name : string , age : number , height ? : string};

// now jo bhi object create krnge uska type ye hoga 

// object ke aage bta dena uska type details hai

let student : Details = {
    name : "mayank",
    age : 26
}

console.log(student);

let student2 : Details = {
    name : "mohan",
    height : "5.7 feet",
    age : 29
}   

console.log(student2);