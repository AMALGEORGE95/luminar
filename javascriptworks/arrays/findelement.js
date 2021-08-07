var arr=[10,11,12,13,14]
var element=19,flag=0;
for (let ele of arr)
{
    if (ele==element)
    
    flag++;
    break;
    
}
console.log(flag==0?"element not fouund":"element found")