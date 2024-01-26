var email=document.getElementById("email");
var pwd=document.getElementById("pass");
function validate(){
    if (email.value.trim() == "" || pwd.value.trim() ==""){
        alert("Either Email or pwd is Empty");
        return false
        
    }
    else if(pwd.value.length < 5){
        pwd.style.border="2px solid red";
        errorpswd.innerText="Password too short";
        errorpswd.style.color="red";
        return false;

    }
    else{
        alert("Successfull login");
        return true
    }
}

// if (regname.test(nme.value)){
//     ename.innerText="Valid Name";
//     ename.style.color="green";
//     return true;
// }
// else{
//     ename.innerText="InValid Name";
//     ename.style.color="red";
//     return false;
// }

// if (regph.test(ph.value)){
//     eph.innerText="Valid Phone Number";
//     eph.style.color="green";
//     return true;

// }
// else{
//     eph.innerText="Invalid phone number";
//     eph.style.color="red";
//     return false;
// }

// if (regpswd.test(pswd.value)){
//     epswd.innerText="Valid Password";
//     epswd.style.color="green";
//     return true;
// }
// else{
//     epswd.innerText="Invalid Password";
//     epswd.style.color="red";
//     return false;
// }


