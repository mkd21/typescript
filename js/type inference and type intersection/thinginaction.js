"use strict";
// type inference 
// inference means to assume by its owm 
let m; //here, ts has implicitly infered as any type
let n = 12; // here it's number
let k = "name"; // here it's string
let l = true; // here it's boolean
// now jo bhi object create krnge uska type ye hoga 
// object ke aage bta dena uska type details hai
let student = {
    name: "mayank",
    age: 26
};
console.log(student);
let student2 = {
    name: "mohan",
    height: "5.7 feet",
    age: 29
};
console.log(student2);
