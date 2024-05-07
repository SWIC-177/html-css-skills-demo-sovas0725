export const ERRORS = [
    {
        id: "fname",
        errmsg: "Please enter your first name.",
        validate(value) {
            return value.length >= 2;
        },
    },
    {
        id: "lname",
        errmsg: "Please enter your last name.",
        validate(value) {
            return value.length >= 2;
        },
    },
    {
        id: "email",
        errmsg: "Please enter a valid email address.",
        validate(value) {
            return value.includes("@") && value.includes(".");
        },
    },
    {
        id: "comments",
        errmsg: "Please enter a comment between 10 and 100 characters.",
        validate(value) {
            return value.length >= 10 && value.length <= 100;
        },
    },
]

/**
 * TODO:
 * Add error messages for radio and checkboxes.
*/