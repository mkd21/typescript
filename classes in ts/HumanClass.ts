class Human
{
    public eye = 2;
    public ear = 2;
    public nose = 1;

    complexion : string;
    height: number;
    constructor(skinColor : string , lambai : number)
    {
        this.complexion = skinColor; 
        this.height = lambai;
    }

    makeHuman()
    {
        console.log("Human has been made...");
        console.log(`This human has 2 ears , eyes and 1 nose respectively,height of this person is ${this.height} feet`);
    }
}


let h1 = new Human("Fair" , 5.8);
h1.makeHuman();
