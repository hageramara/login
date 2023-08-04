var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var error = document.querySelector('#error')
var success = document.querySelector('#successed');
var exist = document.querySelector('#existed');
var button = document.querySelector('#signup');
var userDetailes = [];

button.addEventListener('click', function () {
    signUp();
    console.log(userDetailes);
})
if (localStorage.getItem('information') != null) {
    userDetailes = JSON.parse(localStorage.getItem('information'));
}
function signUp() {
    if (validation()) {
        var signUp = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value,
        }
        userDetailes.push(signUp);
        console.log(userDetailes);
    }
    localStorage.setItem('information', JSON.stringify(userDetailes));
    emptydata();
}

function emptydata() {
    if (signupName.value == '' || signupEmail.value == '' || signupPassword.value == '') {
        error.classList.replace('d-none', 'd-block')
        return false;
    }

    else {
        return true;
    }
}
function validation() {
    var regex = /^([a-zA-Z0-9@.!#$%^&* ]+)$/;
    if (
        regex.test(signupName.value) &&
        regex.test(signupEmail.value) &&
        regex.test(signupPassword.value)
    ) {
        if (userDetailes.length > 0) {
            var emailFound = false;
            for (var i = 0; i < userDetailes.length; i++) {
                //  if(userDetails[i].nameUp ===signupName.value){
                //  console.log('user is exit');
                //  }
                if (userDetailes[i].email === signupEmail.value) {
                    exist.classList.replace("d-none", "d-block");
                    success.classList.replace("d-block", "d-none");
                    emailFound = true;
                    break;
                } else {
                    success.classList.replace("d-none", "d-block");
                    exist.classList.replace("d-block", "d-none");
                    emailFound = false;
                    console.log(userDetailes[i].email, signupEmail.value);
                }
            }
            if (emailFound) return false;
            if (!emailFound) return true;
        } else {
            success.classList.replace("d-none", "d-block");
            exist.classList.replace("d-block", "d-none");
            return true;
        }
    } else {
        return false;
    }
}


