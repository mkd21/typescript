"use strict";
class Subscription {
    constructor(cus_name, amountPaid) {
        this.name = cus_name;
        this.subscriptionAmount = amountPaid;
    }
    // making a setter function
    set updateName(Naam) {
        this.name = Naam;
    }
    // making a getter function 
    get printUserName() {
        return this.name;
    }
    get printUserSubscriptionAmount() {
        return this.subscriptionAmount;
    }
}
let user1 = new Subscription("Mayank", 1200);
user1.updateName = "Mayank Deep";
console.log(user1.printUserName);
console.log(user1.printUserSubscriptionAmount);
// getter and setters will get or set the value of only one data member at a time
// isliye setter functions will excactly demand for only one parameter. upar dekh lo
// bs bolne ke liye function hota hai. dekhne mei bhi lgta hai waisa but jb access krna hota hai
// toh just as a property --> (.) dot lga ke access le skte hai
// upar dekh lo reference kel liye 
