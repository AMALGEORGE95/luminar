
var n1=0,n2=1,next_term,number=5
for(let i=1;i<=number;i++)
{
    console.log(n1)
    next_term=n1+n2
    n1=n2
    n2=next_term
}