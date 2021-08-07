var arr1=[1,2,3,5,4]
var arr2=[5,4,1,2,4]
arr1.sort((num1,num2)=>num1-num2)

arr2.sort((num1,num2)=>num1-num2)
for(let i=0;i<arr1.length;i++)
{
    if(arr1[i]==arr2[i]){
        flag=0
    }
    else{
       flag++
    }
}
console.lo