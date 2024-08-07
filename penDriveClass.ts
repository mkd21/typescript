class Pendrive
{
    company = "HP";
    price = 1230;
    Data : string | null = null;

    setData(data : string | null)
    {
        this.Data = data;
    }

    getData()
    {
        console.log(`Data inside the pendrive is ${this.Data}`);
    }
}

let pendrive1 = new Pendrive();

console.log("before running the setdata() method");
pendrive1.getData();

pendrive1.setData("First Data upload in new pendrive");

console.log("after running the setdata() method");
pendrive1.getData();