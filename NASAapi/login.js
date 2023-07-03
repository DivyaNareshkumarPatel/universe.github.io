function validate() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var evalidate = /^([a-zA-Z0-9\._]+)@([a-z0-9A-A])+.([a-z]+)(.[a-z]+)?$/
    if(email==""){
        document.querySelector(".email").innerHTML = "** Enter your Email";
        return false;
    }
    else if(!email.match(evalidate)){
        document.querySelector(".email").innerHTML = "** Enter correct Email";
        return false;
    }
    else if(pass==""){
        document.querySelector(".pass").innerHTML = "** Enter password";
        return false;
    }
    else if(pass.length<5 || pass.length>20){
        document.querySelector(".pass").innerHTML = "** Fill password between 3 and 20";
        return false;
    }
    else{
        alert("You have successfully Logged In");
        return true;
    }
}