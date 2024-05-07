import { ERRORS, hideError, renderError, submitButton } from './src/utils.js';

console.log(ERRORS);

const formEntry = [
    ...Array.from(document.querySelectorAll('input[type="text"]')),
    document.querySelector('textarea')
]

// Prevents user from just entering form without filling out all fields
submitButton.disabled = true;

formEntry.forEach((input) => {
    input.addEventListener('blur', (e) => {
        const inputError = ERRORS.find((error) => error.id === e.target.id);
        if (!inputError.validate(e.target.value)) {
            renderError(e.target, inputError.errorMsg);
            }   
        else hideError(e.target);
    });
});