var emailValidator = /** @class */ (function () {
    function emailValidator() {
    }
    emailValidator.prototype.isValid = function (value) {
        console.log("validator");
    };
    emailValidator.prototype.setMessage = function (message) {
        console.log("second interface");
    };
    return emailValidator;
}());
