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



let gender : string;

// ERRORS WILL BE GENERATED 

// function assigner(name : string , sex ? : string) : void
// {
//     gender = sex;    
// }

// assigner("mk" , "male");

/**
    lets say if we are using a variable but the type usko assign kiye hai string. avi value nhi diye hai. wo function se dnge usko value.

    let gender : string;    isko bol rhe hai ki tm bs string type ko accept kroge 

    function assigner(name : string , sex ? : string) : void
    {
        gender = sex;    error dega yaha pr jb hmlg sex arguement ko optional kr dnge. aur usko assign krnge gender variable me

        aise isliye kyuki gender variable is only allowed to store string data type but in case of optional arguement it is possible that sex vairable would get
        
        a undefined value if user do not give a value. in that case it will try to get stored in the gender variable.

        isliye error dega


        to solve this?

        make gender variable to take union of types 

        let gender : string | undefined
    }


 */