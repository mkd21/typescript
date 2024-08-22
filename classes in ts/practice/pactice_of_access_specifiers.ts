class OnlineStore 
{
    // public products : string;
    // private price : number;
    // public readonly category : string;

    private product : string;
    readonly price : number;            
    readonly category : string;

    readonly arr : string[];

    constructor(prodName : string , prodPrice : number , prodCategory : string)
    {
        this.product = prodName;
        this.price = prodPrice;
        this.category = prodCategory;
        this.arr = ["mobile" , "decor"];
    }
    
    display()
    {
        console.log("Product is",this.product);
        console.log("Price is",this.price);
        console.log("category is",this.category);
    }


    // readonly data members are not allowed to change even from it's own member functions

    // setValues()
    // {
    //     this.price = 12000;

    //     this.arr = ["values1" , "values2"];
    // }

}

let prod1 = new OnlineStore("Samsung Galaxy S23 Ultra" , 132000 , "mobiles");

// prod1.display();