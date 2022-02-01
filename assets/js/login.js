//const form = document.getElementById('form');
var uname = document.getElementById('name');
var pass = document.getElementById('password');
var comm = document.getElementsByTagName('span');


//validate username
uname.onkeypress = function(evt) {
    const rgx1 = /[^a-z]/i;
    const rgx2 = /[a-z]{25}/i;
    var inp = String.fromCharCode(evt.which); //to get the currently pressed char from keyboard
    if (rgx1.test(inp)) {
        comm[0].innerText = "Name CANNOT contain numbers, special characters or whitespaces";
        comm[0].style.color = "tomato";
        evt.preventDefault(); //to lock numeric and special char input
    } else
    if (rgx2.test(uname.value)) {
        evt.preventDefault();
    }
    if ((evt.keyCode || evt.charCode) === 8) {
        evt.allowDefault();
    }
}


uname.onkeyup = function() {
    const rgx1 = /[a-z]{3,}/i;
    if (uname.value === "") {
        comm[0].innerText = "Name CANNOT remain BLANK";
        comm[0].style.color = "yellow";
    } else if (!rgx1.test(uname.value)) {
        comm[0].innerText = "Name must contain ATLEAST 3 characters";
        comm[0].style.color = "tomato";
    } else {
        comm[0].innerText = "VALID Name";
        comm[0].style.color = "lime";
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
        comm[1].innerText = "Strong Password";
        comm[1].style.color = "yellow";
        if (rgx5.test(pass.value) && rgx6.test(pass.value) && (pass.value.length + 1 > 12)) {
            comm[1].innerText = "Hard to guess";
            comm[1].style.color = "lime";
        }
    } else {
        comm[1].innerText = "Weak Password";
        comm[1].style.color = "tomato";
    }
    if (pass.value === "") {
        comm[1].innerText = "Password CANNOT remain BLANK";
        comm[1].style.color = "yellow";
    }
}


function checkCred() {
    var adminCreds = [
        { username: "root", password: "toor" },
        { username: "lorem", password: "ipsum" },
        { username: "tyy", password: "yyt" }
    ]

    var form = document.getElementById('form');
    form.addEventListener('submit', function(evt) {
        evt.preventDefault();
        alert("form is submitted");
    });

    for (i = 0; i < adminCreds.length; i++) {
        if (uname.value == adminCreds[i].username && pass.value == adminCreds[i].password) {
            alert(username + "is logged in !!!");
            window.location = "/users.xhtml";
            return;
        }
    }
    alert("Wrong username or password!!! Try Again!!");
    window.location.href = "login.xhtml";
}