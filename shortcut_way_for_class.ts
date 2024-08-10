class practice
{

    constructor(public name: string , public details: string , public nums : number)
    {
        this.name = name;
        this.details = details;
        this.nums = nums;
    }

    getValues()
    {
        console.log(this.details);
        console.log(this.name);
        console.log(this.nums);
    }
};

let random = new practice("mk" , "test" , 9393);
random.getValues();