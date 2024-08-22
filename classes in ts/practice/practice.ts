class Mixed 
{
    Name: string;

    public price : number;

    gender : string | undefined;

    constructor(name : string , rate : number , Gender ? :string)
    {
        this.Name = name;
        this.price = rate;
        this.gender = Gender
    }

    printValues() : void 
    {
        console.log("price is ",this.price);
        console.log("name is",this.Name);
        console.log("gender is",this.gender);
    }

}

let ob1 = new Mixed("football" , 640);

ob1.printValues();