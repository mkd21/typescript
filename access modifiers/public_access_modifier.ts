class demo_prublic_access_modifier
{
    name : string;
    bankBalance : number;

    constructor(Naam : string , jamaPunji : number)
    {
        this.name = Naam;
        this.bankBalance = jamaPunji;
    }

    displayBalance()
    {
        console.log("Balance is",this.bankBalance);
    }
}

let person1 = new demo_prublic_access_modifier("Mk" , 500000000);
person1.displayBalance();