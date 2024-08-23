interface obj <T1 , T2 , T3>{
    
    name : T1;
    age : T2;
    allowedEntry : T3;
}


let club : obj<string , number , boolean> = {
    name : "mayank",
    age : 26,
    allowedEntry : true
}   

console.log(club);