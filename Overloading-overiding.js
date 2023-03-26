var parent1 = /** @class */ (function () {
    function parent1() {
        this.course = "Angular";
        this.course1 = "React Js";
        this.abc = function () {
            console.log('this is parent method');
        };
        console.log("My Framework:" + this.course);
    }
    return parent1;
}());
var obj = new parent1();
var son1 = /** @class */ (function () {
    function son1() {
        this.abc = function () {
            console.log('this is child method');
        };
        this.course = function (t, j) {
            console.log(this.t1 = t);
            console.log(this.j1 = j);
        };
    }
    return son1;
}());
var obj1 = new son1();
obj1.course('ts', 'js');
