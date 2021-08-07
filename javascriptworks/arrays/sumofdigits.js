var num=256
 var sum=0
while(num>0){
    
    sum+=num%10
    num=Math.floor(num/10)


}
console.log(sum)
