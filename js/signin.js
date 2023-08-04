
// var signinEmail = document.querySelector("#signinEmail");
// var signinPassword = document.querySelector("#signinPassword");
// var incorrect = document.querySelector("#incorrect");
// var login = document.querySelector("#login");
// var userDetailes = [];
// if (localStorage.getItem("info") != null) {
//   userDetailes = JSON.parse(localStorage.getItem("info"));
// }
// login.addEventListener("click", function () {
//   addDataIn();
//  window.location.href = "home.html";
// });
// function addDataIn() {
//   check();
//   clear();
// }
// function clear() {
//   signinEmail.value = "";
//   signinPassword.value = "";
// }
// function check() {
//   if (userDetailes.length > 0) {
//     for (var i = 0; i < userDetailes.length; i++) {
//       if (userDetailes[i].email === signinEmail.value) {
//         localStorage.setItem('user',JSON.stringify(userDetailes[i].name))
//       //  window.location.href = "home.html";
//         break;
//       } else {
//         incorrect.classList.replace("d-none", "d-block");
      
//       }
//     }
//   } else{
//    incorrect.classList.replace("d-none", "d-block"); 
// }
// }

var signinEmail = document.querySelector("#signinEmail");
var signinPassword = document.querySelector("#signinPassword");
var incorrect = document.querySelector("#incorrect");
var userDetailes = [];
console.log(localStorage.getItem("information"));
if (localStorage.getItem("information") != null) {
  userDetailes = JSON.parse(localStorage.getItem("information"));
}
var login = document.querySelector("#login");
login.addEventListener("click", function () {
  addDataIn();
 // console.log(userDetails);
});
function addDataIn() {
  check();
  clear();
}
function clear() {
  signinEmail.value = "";
  signinEmail.value = "";
}
function check() {
  if (userDetailes.length > 0) {
    for (var i = 0; i < userDetailes.length; i++) {
      console.log(userDetailes[i].email)
      console.log(signinEmail.value)
      if (userDetailes[i].email === signinEmail.value) {
        localStorage.setItem('user',JSON.stringify(userDetailes[i].name))
        window.location.href = "home.html";
        break;
      } else {
        incorrect.classList.replace("d-none", "d-block");
      }
    }
  } else{
    incorrect.classList.replace("d-none", "d-block");
}
}