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
        this.course = 'typescript';
        this.course1 = 'javascript';
        this.abc = function () {
            console.log('this is Parent Method');
        };
    }
    return parent1;
}());
var obj = new parent1();
var son1 = /** @class */ (function (_super) {
    __extends(son1, _super);
    function son1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pqr = function () {
            console.log(this.course);
        };
        return _this;
    }
    return son1;
}(parent1));
var obj2 = new son1();
obj2.pqr();
