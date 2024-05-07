import { ERRORS, hideError, renderError } from './src/utils.js';

console.log(ERRORS);
const formEntry = [
    ...Array.from(document.querySelectorAll('input[type="text"]')),
    document.querySelector('textarea')
]
console.log(formEntry);

const submitButton = document.querySelector('button[type="submit"]');
const resetButton = document.querySelector('button[type="reset"]');

formEntry.forEach((input) => {
    input.addEventListener('blur', (e) => {
        console.log(
            ERRORS.find((error) => error.id === e.target.id).validate(e.target.value)
        );
    });
});