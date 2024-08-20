"use strict";
// INTERFACES 
let H1 = {
    name: "Mayank",
    age: 26,
    address: "India",
    speak: (e) => {
        console.log("Hello");
    }
};
console.log(H1);
// user is look a like of User. 
function exec(user) {
    user.name;
    user.age;
}
// properties will merge together --> if we keep the name of variable of interface same
function combined(details) {
    details.naam;
    details.phone_no;
    details.pata;
    details.pincode;
}
// points to note 
// --> hyundai will have all the values of car interface 
// --> dealer will have all the values of hyundai interface as well as Car interface 
function allAboutCars(cars) {
    cars.car_name = "Creta";
    cars.NCAP_rating = 4.5;
    cars.dealerRating = 3.4;
    cars.engineName = "V8";
}
