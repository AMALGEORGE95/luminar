var employee={
    eid:1001,
    e_name:"ram",
    desig:"developer",
    salary:5000
}
console.log(employee.e_name)
"exp" in employee?employee.exp+=1:employee.exp=1
console.log(employee)
for(let key in employee){
    console.log(employee[key])
}