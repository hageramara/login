var wel=document.querySelector('#username');
var userData= JSON.parse(localStorage.getItem('user'));
var logout= document.querySelector('#logout');


if(localStorage.getItem('user')==null){
    window.location.href='index.html'
}
wel.innerHTML=`welcome ${userData}`;

logout.addEventListener('click', logOut )
function logOut(){
    localStorage.removeItem('user');
window.location.href='index.html'
}