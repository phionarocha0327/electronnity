/*const variables that are designated to each value "which are located at signup page"*/
/*UPDATE: Aaron (me) had an idea to pitch the error message directly to the page instead of displaying alert pop-up, for now I've gotten procrastinated*/

/* global confirmPassInput, usernameInput, emailPassInput, firstnamePassInput, firstnameInput, middlenameInput, emailInput, passwordInput, numberInput, birthdayInput, addressInput, lastnameInput */

const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");
const email = document.getElementById("email");
const firstname = document.getElementById("firstname");
const middlename = document.getElementById("middlename");
const lastname = document.getElementById("lastname");
const address = document.getElementById("address");
const birthday = document.getElementById("birthday");
const number = document.getElementById("number");
const form = document.getElementById("form");

form.addEventListener('submit', (x) => { //method used to attach an event handler to a specified element
    var a = username.value;
    var b = password.value;
    var c = confirmPass.value;
    var d = email.value;
    var e = firstname.value;
    var f = middlename.value;
    var g = lastname.value;
    var h = address.value;
    var i = birthday.value;
    var j = number.value;


    function allFunction() { //calling all functions from the const variable, each "()" has their assigned variable
        userName(a);
        userPassword(b);
        verifyPassword(b, c);
        validateEmail(d);
        firstName(e);
        middleName(f);
        lastName(g);
        completeAddress(h);
        birthdayDate(i);
        mobileNum(j);
    }

    function userName(a) {
        var username = a;
        var length1 = username.length; //test for length
        var whitespaces = username.trim(); //test for whitespaces
        var userVerify = /^[a-zA-Z0-9-_.-\s]+$/.test(username);

        if (length1 < 4 || length1 > 12 || userVerify === false || whitespaces === "") {
            return false;
        } else {
            return true;
        }
    }

    function userPassword(b) {
        var password = b;
        var length2 = password.length;
        var whitespaces2 = password.trim();
        var userVerify2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@$&%*])/.test(password);

        if (length2 < 8 || length2 > 16 || userVerify2 === false || whitespaces2 === "") {
            return false;
        } else {
            return true;
        }
    }

    function verifyPassword(b, c) { //confirms that the password is correct (obviously)
        var password = b;
        var confirmPass = c;
        var whitespaces3 = confirmPass.trim(); //same for userPassword
        var userVerify3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@$&%*])/.test(confirmPass); //do I need to say it again?

        if (userVerify3 === false || whitespaces3 === "" || password !== confirmPass) {
            return false;
        } else {
            return true;
        }
    }

    function validateEmail(d) {
        var email = d;
        var whitespaces4 = email.trim();
        var userVerify4 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(gmail|yahoo|hotmail)\.[a-zA-Z]{2,}$/.test(email);

        if (userVerify4 === false || whitespaces4 === "") {
            return false;
        } else {
            return true;
        }
    }

    function firstName(e) {
        var firstname = e;
        var length3 = firstname.length;
        var whitespaces5 = firstname.trim();
        var userVerify5 = /^[a-zA-Z\s]+$/.test(firstname);

        if (length3 < 1 || userVerify5 === false || whitespaces5 === "") {
            return false;
        } else {
            return true;
        }
    }

    function middleName(f) {
        var middlename = f;
        var length4 = middlename.length;
        var userVerify6 = /^[A-Z.\s]+$/.test(middlename);

        if (length4 > 1 || userVerify6 === false) {
            return false;
        } else {
            return true;
        }6
    }

    function lastName(g) {
        var lastname = g;
        var length5 = lastname.length;
        var whitespaces6 = lastname.trim();
        var userVerify7 = /^[a-zA-Z\s.]+$/.test(lastname);

        if (length5 < 2 || userVerify7 === false || whitespaces6 === "") {
            return false;
        } else {
            return true;
        }
    }

    function completeAddress(h) {
        var address = h;
        var whitespaces7 = address.trim();
        var userVerify8 = /^[\w.,-\s]+$/.test(address);

        if (userVerify8 === false || whitespaces7 === "") {
            return false;
        } else {
            return true;
        }
    }

    function birthdayDate(i) {
        var birthday = i;
        var whitespaces8 = birthday.trim();
        var userVerify9 = /^([0-9]{2})\-([0-9]{2})\-([0-9]{4})$/.test(birthday);

        if (userVerify9 === false || whitespaces8 === "") {
            return false;
        } else {
            return true;
        }
    }

    function mobileNum(j) {
        var number = j;
        var whitespaces9 = number.trim();
        var userVerify10 = /^[\d]{11}$/.test(number);

        if (userVerify10 === false || whitespaces9 === "") {
            return false;
        } else {
            return true;
        }
    }
    allFunction();
});