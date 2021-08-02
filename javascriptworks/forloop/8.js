var rows=5;
for(let i=1;i<=rows;i++)
{
    let str="";
    n=2*i-1
    for(let w=1;w<=(rows-i);w++)
    {
        str+=" ";

    }
    for(let j=0;j!=n;j++){
        if(j==0 || j==n-1){
            str+="*"
        }
        
       
        str+=" "
       
       
      
    
    
    }
    console.log(str)
}