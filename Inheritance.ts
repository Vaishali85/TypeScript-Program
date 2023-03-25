class parent1
{
course='typescript';
course1='javascript';

abc=function()
{
    console.log('this is Parent Method')
}
}
var obj=new parent1();


class son1 extends parent1
{
    pqr=function()
    {
        console.log(this.course);
    }
}
var obj2=new son1();
obj2.pqr();