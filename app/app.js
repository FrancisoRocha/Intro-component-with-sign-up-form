import { buttonSubmit } from "./buttonSubmit.js";
import { email } from "./email.js";
import { firstName } from "./firstName.js"
import { lastName } from "./lastName.js";
import { password } from "./password.js";

document.addEventListener('DOMContentLoaded', () => {

    firstName(),
    lastName(),
    email(),
    password(),
    buttonSubmit()

})


