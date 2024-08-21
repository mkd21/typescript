

// type is basically assigning a data type which we want a variable to store

// custom naming of data types 

// here stringStorekro is a variable which will store only string data type

// type stringStorekro = string;


// let storage : stringStorekro;

// storage = "mk";     // will work fine

// storage = 34;       // will throw errors



// type num = number;

// let container : num;           // container ka type hai (num) which is number

// container = 34;            //  will give no errors

// container = "str";       // will give errors, saying cannot store string type in number type



// NOT ONLY PREMITIVE TYPES CAN BE ASSIGNED TO A VARIABLE. BUT ALSO A USER DEFINED TYPE CAN BE ASSIGNED TO A VARIABLE 

// OBJECT 

// here i have give some key value pairs which is basically saying .

// whenever a object will be created and it will be given a type ie objType then the object should contain the below values inside it

                                                                    // height property is optional
// type objType = {Name : string , age : number , Designation : string , Height? : string};

// let dtls : objType;

// now i will have to give all the properties that is contained inside the objType variable, because i have made it equal to that

// dtls = {
//     Name : "mayank",
//     age : 26,
//     Designation : "SDE 1",
//     Height : "5.8 feet"
// }

// let dtls2 : objType = {
//     Name : "gaurav",
//     age : 26,
//     Designation : "SDE 1",
// }


// console.log(dtls);
// console.log(dtls2);


// we can define type as  pair , triplet or tupples(set of x values)

// type pair = [number , number];
// type triplet = [number , number , number];
// type tupple = [number , number, string , number , number , string , string];


type stringArr = string[];

let arr12 : stringArr = [];

arr12 = ["only" , "string" , "allowed"];


// WE CAN ALSO REPRESENT FUNCTIONS AS WELL 
                                                                                // return type
type loginhandlerFunction = (Name : string , password : string , userID : number) => void 


// union can be represented using type 

type NUMorStr = number | string;

let storage : NUMorStr;

storage = 34;
storage = "fruit";

// storage = false  --> this will gove error becasuse variabel is not allowed to store the bool data type. it is only allowed to store 






// interface is the contract of how a object that will be created should look like 

interface Maanuav {
    Name : string,
    age : number,
    speak(name : string , age : number) : void
}


let man1 : Maanuav = {
    Name : "nf",
    age : 34 ,

    speak : (name , age) => {
        console.log(name);
        console.log(age);
    }
}


man1.speak("mayank" , 26);


interface loggerFunk{
    (Name : string , userId : number , password : string) :  void
}

let funks : loggerFunk = () => {
    
}