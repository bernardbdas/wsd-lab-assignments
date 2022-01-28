//fetchingIDs
const uname = document.getElementById('username');
const email = document.getElementById('email');
const phn = document.getElementById('contact');
const pass = document.getElementById('pass');
const cpass = document.getElementById('cpass');
var span = document.getElementsByTagName('span');

//fetching values
var unameVal = uname.value.trim();
var emailVal = email.value.trim().toLowerCase();
var phnVal = phn.value.trim();
var passVal = pass.value.trim();
var cpassVal = cpass.value.trim();


//validate username
uname.onkeydown = function() {
    const nums = /[0-9]/;
    if (unameVal === "") {
        span[0].innerText = "username cannot be blank";
        span[0].style.color = "red";
    } else
    if (unameVal.length < 3) {
        span[0].innerText = "username must contain atleast 3 characters";
        span[0].style.color = "red";
    } else
    if (nums.test(unameVal)) {
        span[0].innerText = "username must NOT contain numbers";
        span[0].style.color = "red";

    } else {
        span[0].innerText = "Valid username";
        span[0].style.color = "lime";
    }
}

//validate email
email.onkeydown = function() {
    const validMail1 = /[a-z0-9\.-]@amazon.in/;
    const validMail2 = /[a-z0-9\.-]@amazon.com/;
    if (validMail1.test(emailVal) || validMail2.test(emailVal)) {
        span[0].innerText = "Valid Email Address";
        span[0].style.color = "lime";
    } else {
        span[0].innerText = "Invalid Email Address";
        span[0].style.color = "red";
    }
}

//validate phone number
phn.onkeydown = function() {
    const validPhn = /^[0-9]{10}$/;
    if (validPhn.test(phnVal)) {
        span[0].innerText = "Valid Phone number";
        span[0].style.color = "lime";
    } else {
        span[0].innerText = "Invalid Phone number";
        span[0].style.color = "red";
    }
}

//validate password
pass.onkeydown = function() {
    const validPass1 = /[a-zA-Z0-9~`!@#$%^&*()-_+={}[|;:"<>,./ ?] /;
    const validPass2 = /\B[a-zA-Z0-9\W]/;
    if (validPass1.test(passVal) && validPass2.test(passVal)) {
        span[0].innerText = "Strong Password";
        span[0].style.color = "lime";
    } else if (passVal === "") {
        span[0].innerText = "Password cannot remain Blank"
        span[0].style.color = "red"
    } else {
        span[0].innerText = "Weak Password";
        span[0].style.color = "red";
    }
}

//validate confirm password
cpass.onkeydown = function() {
    if (cpassVal === passVal) {
        span[0].innerText = "Passwords match";
        span[0].style.color = "lime";
    } else if (cpassVal === "") {
        span[0].innerText = "Password cannot remain Blank"
        span[0].style.color = "red"
    } else {
        span[0].innerText = "Passwords do not match";
        span[0].style.color = "lime";
    }
}