var product=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10]
    ]
    console.log("**product names**");
    console.log(product.map(item=>item[1]))
    console.log("**available products**");
    console.log(product.filter(item=>item[3]>0))
    console.log("**price>250**");
    console.log(product.filter(item=>item[2]>250))
    console.log("**low cost product**");
   
    var min_pro=275
    for(let item of product)
    {
        if(item[2]<min_pro){
            min_pro=item[2]
        }
    }
    console.log(product.filter(item=>item[2]==min_pro))
    console.log("**item unnder 200?**")
    console.log(product.filter(item=>item[2]<200))
    var highstock=product.reduce((item1,item2)=>item1[3]>item2[3]?item1:item2)
    console.log(highstock)
    console.log(product.find(item=>item[1]=="complan"))
    console.log(product.some(item=>item[2]<100))
    product.forEach(item=>console.log(item[1]))
    console.log(product.some(item=>item[2]>=200 & item[2]<=250))
    product.sort((item1,item2)=>item2[2]-item1[2].forEach(item=>console.log(item)))
    