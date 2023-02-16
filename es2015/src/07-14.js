class Person{
    constructor(name, tel, address, empno, dept){
        this.name = name;
        this.tel = tel;
        this.address = address;
        if(Person.count){Person.count++;}else{Person.count = 1}
    }
    static getPersonCount(){
        return Person.count;
    }
    toString(){
        return `name=${this.name}, tel=${this.tel}, address=${this.address}`
    }
}
var p1 = new Person('mino', '000-0111-2231', '관악');
var p2 = new Person('kth', '000-2222-3333', '신풍');
console.log(p1.toString());
console.log(Person.getPersonCount());

class Employee extends Person{
    constructor(name, tel, address, empno, dept){
        super(name,tel,address);
        this.empno = empno;
        this.dept = dept;
    }
    toString(){
        return super.toString() + `, empno=${this.empno}, dept=${this.dept}`;
    }
    getEmpInfo(){
        return `name=${this.empno} : ${this.name}는 ${this.dept} 부서입니다.`;
    }
}
let e1 = new Employee('hjh', '000-333-444', '상도', 'A1234', 'UX')
console.log(e1.getEmpInfo());
console.log(e1.toString());
console.log(Person.getPersonCount())

