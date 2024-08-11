function greet() : void
{
    console.log("hello from Typescript");
}

greet();

function sum(num1 : number , num2 : number) : number 
{
    return num1 + num2;
}

console.log(sum(3 , 4));     // computedd value be printed

console.log(sum);    // will return a function. function call thodi kr rhe hai bs reference pass kr rhe hai