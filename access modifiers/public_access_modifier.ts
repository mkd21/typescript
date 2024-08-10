class demo_public_access_modifier
{
    name : string;
    public bankBalance : number;

    constructor(Naam : string , jamaPunji : number)
    {
        this.name = Naam;
        this.bankBalance = jamaPunji;
    }

    displayBalance()
    {
        console.log("Account holder name is",this.name);
        console.log("Balance is",this.bankBalance);
    }
}

let person1 = new demo_public_access_modifier("Mk" , 500000000);
person1.displayBalance();


// since the data members are public, hence we can access them directly outside the class
// their value can be modified as well

// with the help of instance of class ie object we can modify the value 

console.log("data memner is public so i changed the value from outside the class.changes value is shown below");

person1.name = "komu";
person1.bankBalance = 450000000;

person1.displayBalance();