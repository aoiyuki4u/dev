"use strict";

var msg = "GLOBAL";
function outer(a) {
    var msg = "outer";
    console.log(msg);
    if (true) {
        var _msg = "block";
        console.log(_msg);
    }
}