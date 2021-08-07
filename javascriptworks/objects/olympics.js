var olympics=[ 
    {country:"u.s",gold:30,silver:35,bronze:27,total:92},  
    {country:"japan",gold:22,silver:10,bronze:15,total:47},   
    {country:"aus",gold:17,silver:6,bronze:20,total:43},    
    {country:"china",gold:34,silver:24,bronze:16,total:74},
    {country:"india",gold:0,silver:2,bronze:3,total:5},    
    {country:"germany",gold:9,silver:10,bronze:16,total:25}       
 
]
console.log("*********countries participating 2021 olympics**********")
console.log(olympics.map(name=>name.country))
console.log("which country get most  gold medals")
//console.log(olympics.reduce((num1,num2)=>num1.gold>num2.gold?num1.country:num2.country))
let maximumval=olympics[0].gold
olympics.filter(Element=>{if (Element.gold>maximumval){console.log(Element.country) }})

console.log("which country got more medals")
//console.log(olympics.reduce((num1,num2)=>num1.total>num2.total?num1.country:num2.country))
let maxtotal=olympics[0].total
olympics.filter(item=>{if (item.total>maxtotal) {console.log(item.country)} else if(item.total==maxtotal) {console.log("u.s")}}) 
console.log("sort countries based on gold medals")
console.log(olympics.sort((item1,item2)=>item2.gold-item1.gold))
console.log("sort countries based on total medals")
console.log(olympics.sort((item1,item2)=>item2.total-item1.total))
console.log("countries got silver>10")
console.log(olympics.filter(item=>item.silver>10))
console.log("list of countries whose gold medal=0")
console.log(olympics.filter(item=>item.gold==0))
console.log("list the country names whose gold medal >20")
olympics.filter(item=>{ if(item.gold>20){console.log(item.country)}})
console.log("is pakisthan participating in 2021 olympics")
console.log(olympics.some(item=>item.country=="pakistan"))    