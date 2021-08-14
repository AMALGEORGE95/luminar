class person1{
    constructor(age,name){
        this.age=age;
        this.name=name
    }
    printPerson(){
        console.log(this.age,this.name);
    }
}
 person1=new person1(25,"ajay")
person1.printPerson()