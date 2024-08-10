"use strict";
class demo_protected_access_modifier {
    constructor(Naam, jamaPunji) {
        this.name = Naam;
        this.bankBalance = jamaPunji;
    }
    displayBalance() {
        console.log("Account holder name is", this.name);
        console.log("Balance is", this.bankBalance);
    }
}
class children_of_protected_class extends demo_protected_access_modifier {
    display() {
        console.log(this.name);
        console.log(this.bankBalance);
    }
    parentValueChanger(customer_name, amount) {
        this.name = customer_name;
        this.bankBalance = amount;
    }
}
// protected data member and member function are allowed to be accessed in the sub class and not outside of the class
let obj = new children_of_protected_class("mk", 12345);
obj.parentValueChanger("new person", 4500000);
obj.displayBalance();
// let pc1 = new demo_protected_access_modifier("mah" , 340003002);
// // both the data members are protected  so it's not allowed to access outside the class 
// // pc1.name = "mk";             
// // pc1.bankBalance = 2342;
// pc1.displayBalance();
