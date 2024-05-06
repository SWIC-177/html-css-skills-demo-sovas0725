const formEntry = [
    ...Array.from(document.querySelectorAll('input')),
    document.querySelector('textarea'),
    document.querySelector('button')
];
console.log(formEntry);