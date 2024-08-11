"use strict";
function example(...values) {
    console.log(values);
}
example("mmayank", "nitin", "sakshi", "komal");
example("mmayank", "nitin", "sakshi", "komal", "golu", "monu");
example("mmayank", "nitin", "sakshi", "komal", "golu", "monu", "rohan");
// we can see that ...rest paramenter helps us to combine all the values inside one array 
// we can pass any amount of paramenters and it wll just wrap all the arguements inside one array
