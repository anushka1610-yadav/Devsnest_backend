const emailValidate = (email) => {
    const re = /^(([^<>[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)
    return re.test(email);
}

const passwordValidation = (password) => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}

module.exports = {
    emailValidate,
    passwordValidation
}