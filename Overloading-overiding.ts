class parent1
{
    course:string="Angular";
    course1:string="React Js";

    constructor()
    {
        console.log("My Framework:"+this.course);
    }
    abc=function()
    {
        console.log('this is parent method');
    }
}
var obj=new parent1();

class son1
{
    abc=function()
    {
        console.log('this is child method');
    }
    course=function(t,j)
    {
        console.log(this.t1=t);
        console.log(this.j1=j);
    }
}

var obj1=new son1();
obj1.course('ts','js');