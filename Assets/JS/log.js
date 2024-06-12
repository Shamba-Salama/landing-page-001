// Show password

showPass.addEventListener('input', (e) => {
    e.preventDefault();

    if (passWord.type === "password") {
        passWord.type = "text";

    }
    else {
        passWord.type = "password";
    }
});