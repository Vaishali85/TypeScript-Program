var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var parent1 = /** @class */ (function () {
    function parent1() {
        this.no1 = 20;
        this.no2 = 30;
    }
    return parent1;
}());
var son1 = /** @class */ (function (_super) {
    __extends(son1, _super);
    function son1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.A = function () {
            console.log(this.no1 + this.no2);
        };
        _this.B = function () {
            console.log(this.no1 * this.no2);
        };
        _this.C = function () {
            console.log(this.no1 - this.no2);
        };
        _this.D = function () {
            console.log(this.no1 / this.no2);
        };
        return _this;
    }
    return son1;
}(parent1));
var obj1 = new son1();
obj1.A();
obj1.B();
obj1.C();
obj1.D();
