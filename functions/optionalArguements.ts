function detailsCollection(name : string , age : number , gender?: string) : void
{
    console.log(name , age , gender);
}

detailsCollection("random" , 25);


// wo jo question mark wala arguement hai na wo optional arguement ko refer kr rha hai 
// do toh bhi thik nhi do toh bhi thik 

function useCase(a : number , b? : number) : number 
{
    return a + (b || 0);
}

console.log(useCase(10));
console.log(useCase(10 , 20));