class Complex
{
    private real : number;
    private imaginary : number;

    constructor(real : number , imaginary : number)
    {
        this.real = real;
        this.imaginary = imaginary;
    }

    display()
    {
        console.log(`real part is ${this.real} and imaginary part is ${this.imaginary} i`);
    }

    add(c : Complex)
    {
        this.real += c.real;
        this.imaginary += c.imaginary;
    }


    multiply(arg : Complex)
    {
        this.real = (this.real * arg.real) - (this.imaginary * arg.imaginary);
        this.imaginary = (this.real * arg.imaginary) + (arg.real * this.imaginary);
    }
}

// aise simply object bna dene se nhi hoga 
// object bnane ke baad uska type btana hoga  :Complex tb jake ek complex class object bnega

// add method ko btana hoga kaisa arguement le rhe ho in this case its :Complex



// let complex1 = new Complex(2 , 5);

// let complex2 = new Complex(1 , 7);

// complex1.add(complex2);


let Cobj1 : Complex = new Complex(1 , 4);

let Cobj2 : Complex = new Complex(2 , 5);

// Cobj1.display();

// Cobj1.add(Cobj2);

Cobj1.multiply(Cobj2);

Cobj1.display();