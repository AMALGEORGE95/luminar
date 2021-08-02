var rows=6;
for(let i=1;i<=rows;i++)
{
    let str="";
    for(let w=1;w<=(rows-i);w++)
    {
        str+=" ";

    }
    for(let j=0;j!=(2*i-1);j++){
        str+="*";
    }
    console.log(str)
}
