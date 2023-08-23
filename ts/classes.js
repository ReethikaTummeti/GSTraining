var Demo = /** @class */ (function () {
    function Demo() {
        this.demodata = "sample";
    }
    Demo.prototype.func = function (a) {
        Demo.count = 5;
        //this.demodata="heyy"; --Cannot assign to 'demodata' because it is a read-only property.
    };
    Demo.count = 0;
    return Demo;
}());
var d = new Demo();
d.func(10);
console.log(Demo.count);
