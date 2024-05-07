import validator from "validator";

export const ERRORS = [
    {
        id: "fname",
        errorMsg: "Please enter your first name.",
        validate(value) {
            return value.length > 1;
        }
    },
    {
        id: "lname",
        errorMsg: "Please enter your last name.",
        validate(value) {
            return value.length > 1;
        }
    },
    {
        id: "email",
        errorMsg: "Please enter a valid email address.",
        validate(value) {
            return validator.isEmail(value);
        }
    },
    {
        id: "comments",
        errorMsg: "Please enter a comment between 10 and 100 characters.",
        validate(value) {
            return value.length >= 10 && value.length <= 100;
        }
    },
];


const submitButton = document.querySelector("button[type='submit']");

export function hideError(input) {
    const elementParent = input.parentNode;
    const elError = elementParent.querySelector(".error");

    if (elError) {
        elError.classList.remove("is-error");
    }
    const errors = document.querySelectorAll(".is-error");

    if (errors.length === 0) {
        submitButton.disabled = false;
    }
}

export function renderError(input, message) {
    const elementParent = input.parentNode;
    

    const elError = elementParent.querySelector(".error");

    if (elError) {
        elError.classList.add("is-error");
    } else {
        const errorElement = document.createElement("p");
        errorElement.className = "error is-error";
        errorElement.textContent = message;
        elementParent.appendChild(errorElement);
    }

    submitButton.disabled = true;
}