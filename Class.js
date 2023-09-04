var abc = /** @class */ (function () {
    function abc() {
        this.x = 12;
        this.z = function () {
            console.log('this is a methods');
        };
    }
    return abc;
}());
var obj = new abc();
console.log(obj.x);
