function Person(name, yearCount){
    this.name = name;
    this.age = 0;
    var incrAge = ()=>{
        this.age++;
    }
    for(var i=1;i<=yearCount; i++){
        incrAge();
    }
}
var p1 = new Person("hong", 20);
console.log(p1.name + ' age of your : ' + p1.age);