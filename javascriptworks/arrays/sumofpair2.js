var arr=[2,3,4,6]
var sum=7;
var low=0,upp=arr.length-1
while(low<upp){
    let total=arr[low]+arr[upp]
    if(total==sum){
        console.log(arr[low],arr[upp])
        break
    }
    else if(total>sum)
    {
        upp--;
    }
    else
    {
        low++;
    }
}