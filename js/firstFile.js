"use strict";
let a; // will only store the number data type
a = 34;
// a = "ddd";   // will throw an error--> string not assignable to a number
// to solve this we can use union of types in variable
let b;
b = 34;
b = "good";
// let work with arrays 
// how to make an empty array 
let empArr = [];
let arr = [1, 3, 4, "mata"]; // here type of array is any
let arr1 = [21, "ks", true];
console.log(arr1);
let arr2 = [1, 3, "string", true];
// tuples 
let arr3 = [12, true, "name"];
// variable typs 
// type unknown 
let c;
c = 23;
c = "name",
    c = true;
// void return type 
function funk() {
    console.log("executed");
}
funk();
// string return type
function funk1() {
    return "ma";
}
let ans = funk1();
// Enum 
var directions;
(function (directions) {
    directions["top"] = "UP";
    directions["bottom"] = "Down";
    directions["left"] = "Left";
    directions["right"] = "Right";
})(directions || (directions = {}));
console.log(directions.bottom);
// type inference 
// inference means to assume by its owm 
let m; //here, ts has implicitly infered as any type
let n = 12; // here it's number
let k = "name"; // here it's string
let l = true; // here it's boolean
// union and intersection types 
let e;
e = 32;
e = "komu";
// e = true   will give errors 
console.log(e);
// here we will give the type of id as (union of type)
function userID(id) {
    if (typeof id == "number") {
        console.log("type of id is number");
    }
    else {
        console.log("type of id is string");
    }
}
userID(23);
userID("31");
// that was union of types 


// NOW LETS SEE INTERSECTION OF TYPES (matlab dono value hona chahiya)

// examples

let unique = {
    cityName: "BGP",
    population: 1222112,
    stateName: "Bihar",
    pincode: 812001
};

//  type of mayank is Employee  -- isse ts will keep a check ki all the properties of type Employee is used while creating mayank or not
let intern = {
    phone_no: 993911,
    name: "Mayank",
    email: "mayankdeep217@mail.com",
    id: 102212
};

console.log(intern);