var num=153,final=0;
while(num!=0)
{
    let digit=num%10
    final=(final*10)+digit;

    num=Math.floor(num/10)
}
console.log(final)