"use strict";
class pendrive {
    constructor(company) {
        this.companyName = company;
    }
}
let p1 = new pendrive("HP");
let p2 = new pendrive("Toshiba");
let p3 = new pendrive("Dell");
console.log(p1.companyName);
console.log(p2.companyName);
console.log(p3.companyName);
