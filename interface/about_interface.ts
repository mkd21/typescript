// INTERFACES 

// interfaces are the structure of the object that will be created later. it contains properties and methods that should be included in an object
// it's just a contract that how object will look like. how it will work is not the tassk of interface

// interface banane se yeh make sure ho jata hai ki koi bhi value nhi chute, jb hmlg object bna rhe ho

interface human
{
    name : string,
    age : number,
    address : string,
    speak(e: string) : void     // speak naam ka function hoga jsika return type void hoga
}

let H1 : human = 
{
    name : "Mayank",
    age : 26,
    address : "India",
    speak : (e) : void => {
        console.log("Hello");
    }
}

console.log(H1);

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