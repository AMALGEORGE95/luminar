var arr1=[1,2,3,4,5]
var arr2=[4,3,5,1,2]
 var flag=0
if(arr1.length==arr2.length)
{
    for(let i=0;i<arr1.length;i++)
    {
        for(let j=0;j<arr2.length;j++)
        {
            if(arr1[i]!=arr2[j])
            {
                flag=0
            }
            else
            {
                flag=1
                
            }
            break;
            

        }
    }
    
}

console.log(flag==0?"elements are not same":"elements are same")