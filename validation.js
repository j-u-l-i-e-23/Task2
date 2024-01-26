


var nme=document.getElementById("name");
var ph=document.getElementById("ph");
var pswd=document.getElementById("pswd");

var ename=document.getElementById("errname");
var eph=document.getElementById("errrph");
var epswd=document.getElementById("errrpswd");

function validate(){
    var regname=/^[a-zA-Z]+[a-zA-Z]+$/;
    var regph=/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
    var regpswd=/^[A-Za-z0-9]*$/;

    if ( (regname.test(nme.value)) && (regph.test(ph.value)) && (regpswd.test(pswd.value)) ){
        ename.innerText="Valid Name";
        ename.style.color="green";
        eph.innerText="Valid Phone Number";
        eph.style.color="green";
        epswd.innerText="Valid Password";
        epswd.style.color="green";
        return true;
    }
    else{
        if(!regname.test(nme.value)){
            ename.innerText="InValid Name";
            ename.style.color="red";
            return false;
        }
        if(!regph.test(ph.value)){
            eph.innerText="Invalid phone number";
            eph.style.color="red";
            return false;
        }
        if(!regpswd.test(pswd.value)){
            epswd.innerText="Invalid Password";
            epswd.style.color="red";
            return false;
        }
        
    }

    
   


}