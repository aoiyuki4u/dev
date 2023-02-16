'use strict';

var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var num = Math.round(Math.random() * 20);
        var isValid = num % 2;
        if (isValid) {
            resolve(num);
        } else {
            reject(num);
        }
    }, 1000);
});

p.then(function (num) {
    console.log('홀수 : ' + num);
}).catch(function (num) {
    console.log('짝수 : ' + num);
});

console.log("0~20");
console.log("1초뒤!");