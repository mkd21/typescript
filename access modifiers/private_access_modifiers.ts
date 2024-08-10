class demo_private_access_modifier
{
    private name : string;
    private bankBalance : number;

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

    // earlier it was public,so isko use krke private data members ka value nhi change kr skte the bahar se hie.
    private changeValues(newName : string , updatedBal : number)
    {
        this.name = newName;
        this.bankBalance = updatedBal;
    }
}

let customer1 = new demo_private_access_modifier("Mk" , 500000000);
customer1.displayBalance();


//earlier the function was public which resulted in change of value from outside . even though the data members were private 
// customer1.changeValues("hahaha changed the private variables value with the help of this function" , 1200);
// customer1.displayBalance();




// since the data members are private, we should not try to change it from outide.
// matlab change kr skte hai lekin krna nhi chaiye.

// compile ho jyega ts lekin error ke saath. value bhi change ho jyega lekin ts warning dete rhega ki private hai mat change kr bhai


// customer1.name = "rishu";
// customer1.bankBalance = 45000;

// customer1.displayBalance();


