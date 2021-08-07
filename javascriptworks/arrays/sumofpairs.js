var arr=[2,3,4,6]
var sum=7;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        let total=arr[i]+arr[j];
        if(total==sum){
            console.log(arr[i],arr[j]);
            break;
        }
    }
}