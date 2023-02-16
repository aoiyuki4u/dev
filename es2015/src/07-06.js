function addContact({name, phone, email="not email", age=0}){
    console.log("name : " + name);
    console.log("phone : " + phone);
    console.log("email : " + email);
    console.log("age : " + age);
}

addContact({
    name:'lee',
    phone:'000-111-222'
})