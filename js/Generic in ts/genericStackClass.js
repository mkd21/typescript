"use strict";
class Stack {
    constructor() {
        this.arr = [];
    }
    push(element) {
        this.arr.push(element);
    }
    pop() {
        if (this.arr.length == 0) {
            console.log("stack is empty");
            return;
        }
        this.arr.pop();
    }
    top() {
        console.log(this.arr[this.arr.length - 1]);
    }
    display() {
        console.log(this.arr);
    }
}
let s1 = new Stack();
s1.push(12);
s1.push(3);
s1.push(5);
s1.push(23);
s1.push(1);
s1.push(13);
s1.display();
s1.pop();
s1.display();
