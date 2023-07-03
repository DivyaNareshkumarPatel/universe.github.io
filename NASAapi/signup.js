// if(!evalidate.text(email))
function validate(e) {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var check = document.getElementById("check");
    var evalidate = /^([a-zA-Z0-9\._]+)@([a-z0-9A-A])+.([a-z]+)(.[a-z]+)?$/
    if(fname==""){
        document.querySelector(".fname").innerHTML = "** Enter your Name";
        return false;
    }
    else if(!isNaN(fname)){
        document.querySelector(".fname").innerHTML = "** Invalid Name";
        return false;
    }
    else if(lname==""){
        document.querySelector(".fname").innerHTML = "";
        document.querySelector(".lname").innerHTML = "** Enter your Last Name";
        return false;
    }
    else if(!isNaN(lname)){
        document.querySelector(".lname").innerHTML = "** Invalid Last Name";
        return false;
    }
    else if(email==""){
        document.querySelector(".lname").innerHTML = "";
        document.querySelector(".email").innerHTML = "** Enter your Email";
        return false;
    }
    else if(!email.match(evalidate)){
        document.querySelector(".email").innerHTML = "** Enter correct Email";
        return false;
    }
    else if(pass==""){
        document.querySelector(".email").innerHTML = "";
        document.querySelector(".pass").innerHTML = "** Enter password";
        return false;
    }
    else if(pass.length<5 || pass.length>20){
        document.querySelector(".pass").innerHTML = "** Fill password between 3 and 20";
        return false;
    }
    else if(check.checked==false){
        document.querySelector(".pass").innerHTML = "";
        document.querySelector(".check-2").innerHTML = "** Tick the check box";
        return false;
    }
    else{
        document.querySelector(".check-2").innerHTML = "";
        alert("You have successfully Signed Up");
        return true;
    }
}