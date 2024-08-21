"use strict";
let c1 = {
    real: 4,
    imaginary: 12
};
let c2 = {
    real: 5,
    imaginary: 300,
    display: (real) => { },
    extra: 12000
};
console.log(c1);
c1 = c2; // here c2 can be assigned to c2
// c2 = c1            //    but c1 cannot be assigned to c2
console.log(c1);
// yaha pr we can see that complex is created using type keyword or alias
// complexNum is created using interface
// then also we can say that c2 can be assigned to c1
// properties bhi alag hai dono me. fir bhi aisa kaise ho rha hai?
// kyuki ts will see the minimum requirement to assign c2 inside c1
// c1 ke andar 2 property hai named real and imaginary --> kya ye property atleast hai c2 ke andar?
// agar hai toh assign krdo nhi toh error dedo
// why not c2 = c1 
// kyuki ts will check the minimum requirement to assign c2 inside c1 
// kya c1 ke pas minimum requirement hai jaise ki real , imaginary , display , extra ?  nhi hai
// isliye c1 cannot be assigned to c2
