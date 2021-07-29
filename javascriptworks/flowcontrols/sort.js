a=93,b=72,c=50
var res;
res=a>b&&a>c?b>c?a+","+b+","+c:a+","+c+","+b:b>a&&b>c?a>c?b+","+a+","+c:b+","+c+","+a:c>a&&c>b?a>b?c+","+a+","+b:c+","+b+","+a:"";
console.log(res);
