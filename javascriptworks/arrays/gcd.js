function gcd1(X,Y) {
    let gcdv=0;
    for(let i=0;i<=X && i<=Y;i++){
        if(X%i==0 && Y%i==0)
        gcdv=i;
    }
    return gcdv;

    
}
var z=gcd1(54,48);
console.log(z)