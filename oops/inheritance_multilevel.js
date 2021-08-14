class parent{
    m1(){
        console.log("inside parent m1")
    }

}
class subchild extends parent{
    m2(){
        console.log("inside parent m2")
    }
}
class child extends subchild{
    m3(){
        console.log("inside parent m3")
    }
}
 child=new child()
child.m3()
child.m2()
child.m1()