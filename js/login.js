//step:1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step:2 get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value

    // step:3 get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;

    //Danger : Do not verify email password on the client site
    // step:4 verify email and password and check whether valid user or not
    if (email === "rimon@gmail.com" && password === "secret") {
        window.location.href = "bank.html";
    } else {
        alert("tui password vuli gesot !! toke ami 1 tk o dimuna ..ja bhag");
    }
})