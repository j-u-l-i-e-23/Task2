var email=document.getElementById("email");
var pwd=document.getElementById("pass");
function change(){
    email.style.backgroundColor="yellow";
}
function hide(){
    email.style.backgroundColor="white";
}

pwd.addEventListener('keyup',function display(e){
    console.log(e.target.value);
})
pwd.addEventListener('keydown',function display(s){
    console.log(s.target.value);
})