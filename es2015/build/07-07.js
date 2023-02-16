"use strict";

function Person(name, yearCount) {
    var _this = this;

    this.name = name;
    this.age = 0;
    var incrAge = function incrAge() {
        _this.age++;
    };
    for (var i = 1; i <= yearCount; i++) {
        incrAge();
    }
}
var p1 = new Person("hong", 20);
console.log(p1.name + ' age of your : ' + p1.age);