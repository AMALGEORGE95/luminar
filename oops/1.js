class person{
    setPerson(age,name){
        this.age=age;
        this.name=name;
    }
    getAge(){
        return this.age
    }
    getName(){
        return this.name
    }
}
var obj1=new person()
obj1.setPerson(22,"don")
console.log(obj1.getAge(),obj1.getName())