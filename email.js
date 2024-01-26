var email=document.getElementById("email");
var err2=document.getElementById("erremail");
// var pwd=document.getElementById("pass");
function validate(){
    var regexp = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-zA-Z]{2,3})?$/
    if (regexp.test(email.value)){
        err2.innerText="Email is valid";
        err2.style.color="green";
        return true;
    }
    else{
        err2.innerText="Invalid Email";
        err2.style.color="red";
        return false;
       
    }
}