interface Validator {
  isValid(value: string | number);
}

interface ValidatorMessage {
  setMessage(message: string);
}

class emailValidator implements Validator, ValidatorMessage {
  isValid(value: string | number) {
    console.log("validator");
  }

  setMessage(message: string) {
    console.log("second interface");
  }
}
