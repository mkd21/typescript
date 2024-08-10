class newClass
{
    public readonly Name : string;
    
    constructor(naam : string)
    {
        this.Name = naam;
    }

    printData()
    {
        console.log("Name is ",this.Name);
    }
}

// if we try to change the value of readonly variable then it will give errors 

let nc = new newClass("mayank");
nc.printData();

// lets try to change it 

// nc.Name = "changed";             // errow will be thrown. although changes will reflwct but errors will be visible.
nc.printData();