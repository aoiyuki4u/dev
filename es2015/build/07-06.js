"use strict";

function addContact(_ref) {
    var name = _ref.name,
        phone = _ref.phone,
        _ref$email = _ref.email,
        email = _ref$email === undefined ? "not email" : _ref$email,
        _ref$age = _ref.age,
        age = _ref$age === undefined ? 0 : _ref$age;

    console.log("name : " + name);
    console.log("phone : " + phone);
    console.log("email : " + email);
    console.log("age : " + age);
}

addContact({
    name: 'lee',
    phone: '000-111-222'
});