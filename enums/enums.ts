// Enum 

// an enum is a special class that represents the group of constants

// constants inside enums by default map themself with a numeric value starting with 0

// it is a good practice to name the properties inside enum in CAPITALISED format

// we can keep duplicate name of enum but cannot keep the name of properties inside the enum same. doint that will throw an error


enum classRoom
{
    NAME,
    STRENGTH,
    SECTION,
}

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

enum ticketBooking 
{
    TICKET_STATUS,
    PAYMENT_DONE,
    PASSENGERS,
}

let tickets = {

    Name : "Normal Ticket",
    "ticketDone?" : ticketBooking.TICKET_STATUS,
    passengers : ticketBooking.PASSENGERS
}

console.log(tickets);


// we can add out own values to the constants inside the enum 

enum StatusCodes
{
    NOTFOUND = 404,
    SUCCESS = 200,
    ACCEPTED = 202,
    CREATED = 201,
    BADREQUEST = 400
}

const response = {
    url : "www.example.com",
    requestStatus : StatusCodes.SUCCESS,
    data : "some data"
}

console.log(response);



enum employeeDetails 
{
    Name = "Mayank",
    EmpId = 12112,
    Designation =  "Software Engineer 1"
}

let emplyee = {
    name : employeeDetails.Name,
    employeeID : employeeDetails.EmpId,
    "Employee-Designation" : employeeDetails.Designation
}

console.log(emplyee);