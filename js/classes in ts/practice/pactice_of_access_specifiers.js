"use strict";
class OnlineStore {
    constructor(prodName, prodPrice, prodCategory) {
        this.product = prodName;
        this.price = prodPrice;
        this.category = prodCategory;
        this.arr = ["mobile", "decor"];
    }
    display() {
        console.log("Product is", this.product);
        console.log("Price is", this.price);
        console.log("category is", this.category);
    }
}
let prod1 = new OnlineStore("Samsung Galaxy S23 Ultra", 132000, "mobiles");
// prod1.display();
