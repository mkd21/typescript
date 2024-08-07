let a : number;   // will only store the number data type

a = 34;
// a = "ddd";   // will throw an error--> string not assignable to a number


// to solve this we can use union of types in variable

let b : number | string;
b = 34;
b = "good";


// let work with arrays 

// how to make an empty array 
let empArr = [];             

let arr = [1 , 3 , 4 , "mata"];      // here type of array is any


let arr1 : (number | string | boolean)[] = [21 , "ks" , true];
console.log(arr1);

let arr2 = [1 , 3 , "string" , true];

// tuples 
let arr3 :[number , boolean , string] = [12 , true , "name"];

// variable typs 

// type unknown 

let c : unknown;

c = 23;
c = "name",
c = true;


// void return type 

function funk() : void{
    console.log("executed");
} 

funk();

// string return type
function funk1() : string{
    return "ma";
} 

let ans = funk1();


// Enum 

enum  directions{
    top = "UP",
    bottom = "Down",
    left = "Left",
    right = "Right"
}

console.log(directions.bottom);

// type inference 

// inference means to assume by its owm 

let m;       //here, ts has implicitly infered as any type
let n = 12;  // here it's number
let k = "name"; // here it's string
let l = true;   // here it's boolean


// union and intersection types 

let e : number | string

e = 32
e = "komu"

// e = true   will give errors 

console.log(e);

// here we will give the type of id as (union of type)
function userID(id : number | string)
{
    if(typeof id == "number")
    {
        console.log("type of id is number");
    }
    else{
        console.log("type of id is string");
    }
}

userID(23);
userID("31");

// that was union of types 


// NOW LETS SEE INTERSECTION OF TYPES (matlab dono value hona chahiya)

// examples

type cityDetails = {
    cityName : string,
    population : number,
}

type cityPopulationDetails = {
    stateName : string,
    pincode : number
}


type allDetailsofCity = cityDetails & cityPopulationDetails;     // now this is intersection of types --> dono type contain kr rha hai

let unique : allDetailsofCity = {
    cityName : "BGP",
    population : 1222112,
    stateName : "Bihar",
    pincode : 812001
}

// TYPE Aliases 

// basically custom type bana liye 

type Employee = {
    name : string,
    phone_no : number,
    email : string,
    id : number
};

//  type of mayank is Employee  -- isse ts will keep a check ki all the properties of type Employee is used while creating mayank or not
let intern : Employee = {
    phone_no : 993911,
    name : "Mayank",
    email : "mayankdeep217@mail.com",
    id : 102212
}

console.log(intern);


// INTERFACES 
// interfaces are the structure of the object that will be created later. it contains propertiea ans methods that should be included in an object

interface User{
    name : string,
    age : number
}
            // user is look a like of User. 
function exec(user : User)
{
    user.name;
    user.age;
}


// what if we write the interface with same variable name 

interface inf1
{
    naam : string,
    pata : string
}

interface inf1
{
    phone_no : number,
    pincode : number
}

// properties will merge together --> if we keep the name of variable of interface same

function combined(details : inf1)
{
    details.naam;
    details.phone_no;
    details.pata;
    details.pincode;
}

// WE CAN EXTEND THE INTERFACE 

interface Car
{
    wheel : number,
    airBagsPresent : boolean,
    engineName : string
}

interface Hyundai extends Car
{
    // now this interface will have all the properties of Car interface, as well as it's own property
    car_name : string,
    warranty : number,
    freeServices : number,
    NCAP_rating : number
}

interface Dealer extends Hyundai  
{
    showroomLocation : string
    dealerRating : number,
}

// points to note 

// --> hyundai will have all the values of car interface 
// --> dealer will have all the values of hyundai interface as well as Car interface 

function allAboutCars(cars : Dealer)
{
    cars.car_name = "Creta";
    cars.NCAP_rating = 4.5;
    cars.dealerRating = 3.4;
    cars.engineName = "V8";
}

