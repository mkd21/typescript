"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    display() {
        console.log(`real part is ${this.real} and imaginary part is ${this.imaginary} i`);
    }
    add(c) {
        this.real += c.real;
        this.imaginary += c.imaginary;
    }
    multiply(arg) {
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
let Cobj1 = new Complex(1, 4);
let Cobj2 = new Complex(2, 5);
// Cobj1.display();
// Cobj1.add(Cobj2);
Cobj1.multiply(Cobj2);
Cobj1.display();
