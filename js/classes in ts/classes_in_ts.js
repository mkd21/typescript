"use strict";
class AirConditioner {
    constructor() {
        this.color = "white";
        this.capacity = 1.5;
        this.company = "Samsung";
        this.energyRating = "5 star";
    }
    turnOnAc(Name) {
        console.log(`turning on ${Name}...`);
        console.log(`${Name} turned on..`);
    }
    turnOffAc(Name) {
        console.log(`turning off ${Name}...`);
        console.log(`${Name} turned off..`);
    }
    selfClean() {
        console.log("Self Cleaning Done...");
    }
    setCapacity(capacity) {
        this.capacity = capacity;
    }
    getCapacity() {
        console.log(`capacity of Ac is ${this.capacity}`);
    }
}
let ac1 = new AirConditioner();
ac1.turnOnAc("AC1");
ac1.getCapacity(); // capacity before setting the capacity
ac1.setCapacity(2);
ac1.getCapacity(); // capacity after calling the method setCapcity()
