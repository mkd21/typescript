"use strict";
function detailsCollection(name, age, gender) {
    console.log(name, age, gender);
}
detailsCollection("random", 25);
// wo jo question mark wala arguement hai na wo optional arguement ko refer kr rha hai 
// do toh bhi thik nhi do toh bhi thik 
function useCase(a, b) {
    return a + (b || 0);
}
console.log(useCase(10));
console.log(useCase(10, 20));
