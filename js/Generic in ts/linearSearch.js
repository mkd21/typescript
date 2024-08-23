"use strict";
// generic allows us to write the re useable code 
// it prevents a code for getting a particular type assigned 
// we can write the code of any data type without compromising the type checking 
// its syntax is <>
// iss function ko generic function bna diye hai.
// array bhi koi type ka le skta hai
// target bhi koi type ka le skta hai
// function linearSearch<T>(arr : T[] , target : T) : number
// {
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(arr[i] == target)
//         {
//             return i;
//         }
//     }
//     return -1;
// }
// const nums : number[] = [3 , 12 , 5 , 2 , 0 , 6 , -1 , 13];
// console.log( linearSearch<number>(nums , 2) );
// const names = ["delhi" , "hyderabd" , "chennai" , "jaipur" , "bhopal" , "patna"];
// console.log(linearSearch<string>(names , "chennai"));
// ab dehte hai return type ko generic bna skte hai kya 
// pair return kro toh
const nums = [3, 12, 5, 2, 0, 6, -1, 13];
const names = ["delhi", "hyderabd", "chennai", "jaipur", "bhopal", "patna"];
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return [i, target];
        }
    }
    return [-1, target];
}
console.log(linearSearch(nums, 6));
console.log(linearSearch(names, "jaipur"));
// WE CAN GIVE MULTIPLE GENERIC TYPES 
function multiple(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
}
multiple(34, "defgh");
multiple("fd", 10);
