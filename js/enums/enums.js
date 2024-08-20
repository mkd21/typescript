"use strict";
// Enum 
// an enum is a special class that represents the group of constants
// constants inside enums by default map themself with a numeric value starting with 0
// it is a good practice to name the properties inside enum in CAPITALISED format
// we can keep duplicate name of enum but cannot keep the name of properties inside the enum same. doint that will throw an error
var classRoom;
(function (classRoom) {
    classRoom[classRoom["NAME"] = 0] = "NAME";
    classRoom[classRoom["STRENGTH"] = 1] = "STRENGTH";
    classRoom[classRoom["SECTION"] = 2] = "SECTION";
})(classRoom || (classRoom = {}));
// console.log(classRoom.NAME);
// console.log(classRoom.STRENGTH);
// console.log(classRoom.SECTION);
// doing this will throw an error 
// enum classRoom          // enum name can be same but not the properties
// {
//     NAME,
//     STRENGTH,
//     SECTION,
// }
// by this we can use the values as our requirement 
// enum me store kr diye properties fir usko (.) lga ke enum name dot jo bhi property use krna hai kr liye
var ticketBooking;
(function (ticketBooking) {
    ticketBooking[ticketBooking["TICKET_STATUS"] = 0] = "TICKET_STATUS";
    ticketBooking[ticketBooking["PAYMENT_DONE"] = 1] = "PAYMENT_DONE";
    ticketBooking[ticketBooking["PASSENGERS"] = 2] = "PASSENGERS";
})(ticketBooking || (ticketBooking = {}));
let tickets = {
    Name: "Normal Ticket",
    "ticketDone?": ticketBooking.TICKET_STATUS,
    passengers: ticketBooking.PASSENGERS
};
console.log(tickets);
// we can add out own values to the constants inside the enum 
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NOTFOUND"] = 404] = "NOTFOUND";
    StatusCodes[StatusCodes["SUCCESS"] = 200] = "SUCCESS";
    StatusCodes[StatusCodes["ACCEPTED"] = 202] = "ACCEPTED";
    StatusCodes[StatusCodes["CREATED"] = 201] = "CREATED";
    StatusCodes[StatusCodes["BADREQUEST"] = 400] = "BADREQUEST";
})(StatusCodes || (StatusCodes = {}));
const response = {
    url: "www.example.com",
    requestStatus: StatusCodes.SUCCESS,
    data: "some data"
};
console.log(response);
var employeeDetails;
(function (employeeDetails) {
    employeeDetails["Name"] = "Mayank";
    employeeDetails[employeeDetails["EmpId"] = 12112] = "EmpId";
    employeeDetails["Designation"] = "Software Engineer 1";
})(employeeDetails || (employeeDetails = {}));
let emplyee = {
    name: employeeDetails.Name,
    employeeID: employeeDetails.EmpId,
    "Employee-Designation": employeeDetails.Designation
};
console.log(emplyee);
