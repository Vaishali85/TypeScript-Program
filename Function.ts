function abc()
{
    console.log('this is function');

}
abc();
/******************user Define******************** */
function cde()
{
var a=12;
var b=13;
var ans=a+b;

console.log(ans);
}
cde();
/***************************Runtime *********************** */
function efg(a,b)
{
    var ans=a+b;
    console.log(ans);

}
efg(12,45);
/*****************************Default Parameter*************************** */
function hij(a=15,b=20)
{
    var ans=a+b;
    console.log(ans);
}
hij();
/*****************************ananomous function********************* */
var pqr=function()
{
    console.log('this is ananomous function');
}
pqr();

/******************************Lambda function************************* */
var xyz=()=>{console.log('this id arrow function')}
xyz();