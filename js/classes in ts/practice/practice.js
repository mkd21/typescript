"use strict";
class Mixed {
    constructor(name, rate, Gender) {
        this.Name = name;
        this.price = rate;
        this.gender = Gender;
    }
    printValues() {
        console.log("price is ", this.price);
        console.log("name is", this.Name);
        console.log("gender is", this.gender);
    }
}
let ob1 = new Mixed("football", 640);
ob1.printValues();
