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
        errorMsg: "Please enter a comment between 10 and 100 characters.",
    },
    {
        id: "select",
        errorMsg: "Please select an option.",
    },
