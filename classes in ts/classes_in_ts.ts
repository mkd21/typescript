class AirConditioner
{
    color = "white";
    capacity = 1.5;
    company = "Samsung";
    energyRating = "5 star";

    turnOnAc(Name : string)
    {
        console.log(`turning on ${Name}...`);
        console.log(`${Name} turned on..`);
    }

    turnOffAc(Name : string)
    {
        console.log(`turning off ${Name}...`);
        console.log(`${Name} turned off..`);
    }

    selfClean()
    {
        console.log("Self Cleaning Done...")
    }

    setCapacity(capacity : number)
    {
        this.capacity = capacity;
    }

    getCapacity()
    {
        console.log(`capacity of Ac is ${this.capacity}`);
    }
}

let ac1 = new AirConditioner();
ac1.turnOnAc("AC1");

ac1.getCapacity();  // capacity before setting the capacity
ac1.setCapacity(2);
ac1.getCapacity();   // capacity after calling the method setCapcity()