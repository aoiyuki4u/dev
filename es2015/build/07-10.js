"use strict";

var p1 = {
    name: "iPad",
    price: 2000000,
    quantity: 2,
    order: function order() {
        if (!this.amount) {
            this.amount = this.quantity * this.price;
        }
        console.log("Order price : " + this.amount);
    },
    discount: function discount(rate) {
        if (rate > 0 && rate < 0.8) {
            this.amount = (1 - rate) * this.price * this.quantity;
        }
        console.log(100 * rate + "% discount");
    }
};

p1.discount(0.2);
p1.order();