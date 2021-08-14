class parent{
    phone(){
        console.log("samsung ")
    }
}
class child extends parent{
    
    phone(){
        super.phone()
        console.log("iphone")
    }
}
 child=new child();
child.phone();