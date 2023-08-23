///types of ts : implicit &explicit
// implicit
var a = 10;
// explicit
var b = "hnj";
// b=9;  --error
// a=30; --error
var c = "cbit";
//c=12;
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
})(Month || (Month = {}));
var m = Month.Feb;
var u = {
    name: "reethika",
    age: 21,
    email: "reethika.tummeti@gmail.com",
};
// const cust:customer={ };
// const emp:employee={};
//type casting
var elemnet = document.querySelector("input");
var ele = document.querySelector("img");
