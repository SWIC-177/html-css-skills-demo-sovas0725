import { ERRORS } from './src/utils.js';

console.log(ERRORS);
const formEntry = [
    ...Array.from(document.querySelectorAll('input')),
    document.querySelector('select'),
    document.querySelector('textarea')
]
console.log(formEntry);

const submitButton = document.querySelector('button[type="submit"]');
const resetButton = document.querySelector('button[type="reset"]');

formEntry.forEach((input) => {
    input.addEventListener('blur', (event) => {
        console.log("blur event", event.target.id);
    });
});