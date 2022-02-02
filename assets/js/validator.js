//fetching the objects
//const form = document.getElementById('form');
let uname = document.getElementById('name');
let email = document.getElementById('email');
let phn = document.getElementById('phone');
let pass = document.getElementById('password');
let cpass = document.getElementById('cnf-password');
let addrs = document.getElementById('address');
let q1 = document.getElementById('chk-box');
let q2 = document.getElementsByName('q2');
let msg = document.getElementsByTagName('span');


//validate username
uname.onkeypress = function(evt) {
    const rgx1 = /[^a-z.\s]/i;
    const rgx2 = /[a-z.\s]{25}/i;
    var inp = String.fromCharCode(evt.which); //to get the currently pressed char from keyboard
    if (rgx1.test(inp)) {
        msg[0].innerText = "Name CANNOT contain numbers or special characters";
        msg[0].style.color = "tomato";
        evt.preventDefault(); //to lock numeric and special char input
    } else
    if (rgx2.test(uname.value)) {
        evt.preventDefault();
    }
    if ((evt.keyCode || evt.charCode) === 8) {
        evt.allowDefault();
    }
}


uname.onkeyup = function(evt) {
    const rgx1 = /[a-z.\s]{3,}/i;
    if (uname.value === "") {
        msg[0].innerText = "Name CANNOT remain BLANK";
        msg[0].style.color = "yellow";
    } else if (!rgx1.test(uname.value)) {
        msg[0].innerText = "Name must contain ATLEAST 3 characters";
        msg[0].style.color = "tomato";
    } else {
        msg[0].innerText = "VALID Name";
        msg[0].style.color = "lime";
    }
}

//validate email
email.onkeypress = function(evt) {
    var inp = String.fromCharCode(evt.which); //to get the currently pressed char from keyboard
    const rgx1 = /[^\.\_a-z0-9@]/;
    const rgx2 = /[A-Z]/;
    const rgx3 = /^([0-9]+)$/;
    const rgx4 = /[\.\_a-z0-9@]{35}/;
    const rgx5 = /@christuniversity.in$/;
    const rgx6 = /@mca.christuniversity.in$/;
    const rgx7 = /@mda.christuniversity.in$/;


    if (rgx4.test(email.value) || rgx5.test(email.value) || rgx6.test(email.value) || rgx7.test(email.value)) { //email cannot be more than 30 chars
        evt.preventDefault(); //to lock the keyboard
    }
    if (rgx2.test(inp)) {
        msg[1].innerText = "Email Address is ALWAYS lowercase";
        msg[1].style.color = "tomato";
        evt.preventDefault(); //to lock the keyboard
    }
    if (rgx1.test(inp)) {
        msg[1].innerText = "Invalid Character entered";
        msg[1].style.color = "tomato";
        evt.preventDefault(); //to lock the keyboard
    }
    if (inp === "@" && rgx3.test(email.value)) {
        msg[1].innerText = "Email Address must NOT contain ONLY numbers";
        msg[1].style.color = "tomato";
        evt.preventDefault(); //to lock the keyboard
    }
    if (inp === "@" && (/[@]/).test(email.value)) {
        msg[1].innerText = "Email Address CANNOT contain '@' more than once";
        msg[1].style.color = "tomato";
        evt.preventDefault(); //to lock the keyboard
    }
    if ((evt.keyCode || evt.charCode) === 8) {
        evt.allowDefault();
    }
}


email.onkeyup = function() {
    //const validMail1 = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    //const validMail2 = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
    const rgx1 = /^([\.\_a-z0-9]+)@christuniversity.in$/;
    const rgx2 = /^([\.\_a-z0-9]+)@mca.christuniversity.in$/;
    const rgx3 = /^([\.\_a-z0-9]+)@mda.christuniversity.in$/;
    if (email.value === "") {
        msg[1].innerText = "Email Address CANNOT remain BLANK";
        msg[1].style.color = "yellow";
    } else if (rgx1.test(email.value) || rgx2.test(email.value) || rgx3.test(email.value)) {
        msg[1].innerText = "VALID Email Address";
        msg[1].style.color = "lime";
    } else {
        msg[1].innerText = "INVALID Email Address";
        msg[1].style.color = "tomato";
    }
}


//validate phone number
phn.onkeypress = function(evt) {
    let inp = String.fromCharCode(evt.which);

    const rgx2 = /[^0-9]/;
    const rgx3 = /[0-9\b]{10}/;
    if (rgx3.test(phn.value)) {
        msg[2].innerText = "Valid Phone number";
        msg[2].style.color = "lime";
        evt.preventDefault();
    } else if (rgx2.test(inp)) {
        msg[2].innerText = "Phone Number can contain numbers ONLY";
        msg[2].style.color = "tomato";
        evt.preventDefault();
    } else {
        msg[2].innerText = "Invalid Phone number";
        msg[2].style.color = "tomato";
    }
}

phn.onkeyup = function() {
    const rgx1 = /^[0-9]{8,10}$/;
    if (phn.value === "") {
        msg[2].innerText = "Phone Number CANNOT remain BLANK";
        msg[2].style.color = "yellow";
    }
    if (rgx1.test(phn.value)) {
        msg[2].innerText = "Valid Phone number";
        msg[2].style.color = "lime";
    }
}

//validate password
pass.onkeyup = function() {
    const rgx1 = /[a-z]/;
    const rgx2 = /[A-Z]/;
    const rgx3 = /[0-9]/;
    const rgx4 = /[~`!@#\$%\^&*()-_+={}[\]|\;:"<>,.\/\?]{2,}/;
    const rgx5 = /\B[a-z]{4,}/i;
    const rgx6 = /\B[0-9]{2,}/;

    if ((rgx1.test(pass.value) && rgx2.test(pass.value) && rgx3.test(pass.value)) && rgx4.test(pass.value) && (pass.value.length + 1 > 8)) {
        msg[3].innerText = "Strong Password";
        msg[3].style.color = "yellow";
        if (rgx5.test(pass.value) && rgx6.test(pass.value) && (pass.value.length + 1 > 12)) {
            msg[3].innerText = "Hard to guess";
            msg[3].style.color = "lime";
        }
    } else {
        msg[3].innerText = "Weak Password";
        msg[3].style.color = "tomato";
    }
    if (cpass.value === pass.value) {
        msg[4].innerText = "Passwords match";
        msg[4].style.color = "lime";
    } else {
        msg[4].innerText = "Passwords do not match";
        msg[4].style.color = "tomato";
    }
    if (pass.value === "") {
        msg[3].innerText = "Password CANNOT remain BLANK";
        msg[3].style.color = "yellow";
    }
}

//validate confirm password
cpass.onkeyup = function() {
    if (cpass.value === "") {
        msg[4].innerText = "Confirm Password CANNOT remain BLANK"
        msg[4].style.color = "yellow"
    } else if (cpass.value === pass.value) {
        msg[4].innerText = "Passwords match";
        msg[4].style.color = "lime";
    } else {
        msg[4].innerText = "Passwords do not match";
        msg[4].style.color = "tomato";
    }
}

//validate address
addrs.onkeypress = function(evt) {
    if ((evt.keyCode || evt.charCode) === 8) {
        evt.allowDefault();
    }
    if (addrs.value.length + 1 >= 130) {
        evt.preventDefault();
    }
}

addrs.onkeyup = function(evt) {
    if (addrs.value === "") {
        msg[5].innerText = "Address CANNOT remain BLANK";
        msg[5].style.color = "yellow";
    }
}

//validate question 1
q1.onclick = function() {}

//validate question 2
q2.onclick = function() {
    for (i = 0; i < 4; i++) {
        if (q2[i].checked === true) {
            msg[7].innerText = q2[i].value;
            msg[7].style.color = "yellow";
            break;
        }
    }
}

//to set cookie
function setcookie() {
    var bg = addrs.value;
    var overlay = document.getElementById('color-overlay');
    if (bg != "") {
        document.cookie = "color=" + bg + ";expires=Fri, 4 Feb 2022 11:59:59 UTC";
        overlay.style.background = bg;
    }

    window.onload = function() {
        if (document.cookie.length != 0) {
            var previouscookies = document.cookie.split("=");
            addrs.value = previouscookies[1];
            overlay.style.background = previouscookies[1];
        }
    }
}

//to get cookie
function getcookie() {
    if (document.cookie.length != 0) {
        alert(document.cookie);
    } else {
        alert("No cookies from past sessions.");
    }
}

//to clear cookie
function clearcookie() {}