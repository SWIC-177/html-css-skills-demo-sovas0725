import { ERRORS, hideError, renderError } from './src/utils.js';

console.log(ERRORS);

const formEntry = [
    ...Array.from(document.querySelectorAll('input[type="text"]')),
    document.querySelector('textarea')
]

const submitButton = document.querySelector('button[type="submit"]');

formEntry.forEach((input) => {
    input.addEventListener('blur', (e) => {
        const inputError = ERRORS.find((error) => error.id === e.target.id);
        if (!inputError.validate(e.target.value)) {
            renderError(e.target, inputError.errorMsg);
            }   
        else hideError(e.target);
    });
});