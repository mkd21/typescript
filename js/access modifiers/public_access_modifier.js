"use strict";
class demo_prublic_access_modifier {
    constructor(Naam, jamaPunji) {
        this.name = Naam;
        this.bankBalance = jamaPunji;
    }
    displayBalance() {
        console.log("Balance is", this.bankBalance);
    }
}
let person1 = new demo_prublic_access_modifier("Mk", 500000000);
person1.displayBalance();
