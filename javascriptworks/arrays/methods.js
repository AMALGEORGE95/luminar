//var arr1=[1,2,3,4,5,6]
//console.log(arr1.map(num=>num**2))
//var names=["ravi","ram","manoj","vijay","surya"]
//console.log(names.map(name=>name.toUpperCase()))
//var arr2=[2,3,4,6,7,8]
//console.log(arr2.map(num=>num<5?num-1:num+1))
//filter/////////////////////////
//var arr3=[1,2,3,4,5,6,7,8,9]
//console.log(arr3.filter(num=>num%2==0))
//console.log(names.filter(name=>name[0]=="r"))
var employees=[
    [1000,"ram",2,25000,"developer"],
    [1001,"ravi",1,22000,"developer"],
    [1002,"raju",3,27000,"qa"],
    [1003,"nikil",1,22000,"qa"]
]
//console.log(employees.map(name=>name[1]))
//console.log(employees.filter(emp=>emp[4]=="developer"))
console.log(employees.filter(emp=>emp[3]>23000 & emp[4]=="developer").map(emp=>emp[1]))