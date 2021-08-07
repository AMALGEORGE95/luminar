var employees=[
    [1000,"ram",2,25000,"developer"],
    [1001,"ravi",1,22000,"developer"],
    [1002,"raju",3,27000,"qa"],
    [1003,"nikil",1,22000,"qa"]
]
for(let employee of employees)
{
   if(employee[4]=="developer")
   {
       console.log("no of employees wroking as developer:"+employee[1])
   }
   if(employee[4]=="qa")
   {
    console.log("no of employees wroking as qa:"+employee[1])
   }
   
    var max_sal=0
    for(let emp of employees)
    {
        if(emp[3]>max_sal){
            max_sal=emp[3]
        }
    }
    if(employee[3]==max_sal)
    {
        console.log("highest salary:"+employee[1])
    }
    if(employee[3]==22000)
    {
        console.log("lowest paid:"+employee[1])
    }
    
}