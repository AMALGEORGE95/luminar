var num1=14,num2=54,num3=36
var res
res=num1>num2&&num1>num3?(num2>num3?num2:num3):num2>num1&&num2>num3?(num1>num3?num1:num3):num3>num1&&num3>num2?(num1>num2?num1:num2):""
console.log(res)
