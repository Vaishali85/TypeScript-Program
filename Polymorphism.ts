class parent1
{
    no1:number=20;
    no2:number=30;
}
class son1 extends parent1{
    A=function()
    {
        console.log(this.no1+this.no2);

    }

    B=function()
    {
        console.log(this.no1*this.no2);

    }
    C=function()
    {
        console.log(this.no1-this.no2);

    }
    D=function()
    {
        console.log(this.no1/this.no2);

    }
}var obj1=new son1()
obj1.A();
obj1.B();
obj1.C();
obj1.D();