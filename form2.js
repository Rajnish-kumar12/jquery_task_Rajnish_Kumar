function validation() {
    var user=document.getElementById("user").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("mobile").value;
    var pass=document.getElementById("pass").value;
    var conpass=document.getElementById("conpass").value;
    //name validation
    if(user=="")
    {
        document.getElementById("Username").innerHTML="**please fill the name";
        return false;
    }
    if(user.length<2)
    {
        document.getElementById("Username").innerHTML="**Length of name must be of minimum 2 character";
        return false;
    }
    if(!isNaN(user))
    {
        document.getElementById("Username").innerHTML="**Please enter valid name";
        return false;
    }
    //email validation
    if(email=="")
    {
        document.getElementById("emails").innerHTML="**please fill the email";
        return false;
    }
    if(email.indexOf("@")<=0)
    {
        document.getElementById("emails").innerHTML="**Invalid password1";
        return false;
    }
    if(email.charAt(email.length-4)!=".")
    {
        document.getElementById("emails").innerHTML="**Invalid password2";
        return false;
    }
    //phone validation............................
    if(phone=="")
    {
        document.getElementById("phones").innerHTML="**please fill the phone number";
        return false;
    }
    if(isNaN(phone))
    {
        document.getElementById("phones").innerHTML="**Enter valid phone number";
        return false;
    }
    if(phone.length!=10)
    {
        document.getElementById("phones").innerHTML="**phone number must be of length 10";
        return false;
    }
    //password validation................................
    if(pass=="")
    {
        document.getElementById("passs").innerHTML="**Enter your password";
        return false;
    }
    if(pass.length<=6 || pass.length>=16)
    {

        document.getElementById("passs").innerHTML="**Password must be of length 6";
        return false;
    }
    //confirm password validation..............................
    if(conpass=="")
    {
        document.getElementById("conpasss").innerHTML="**Enter your confirm password";
        return false;
    }
    if(pass!=conpass)
    {
        document.getElementById("conpasss").innerHTML="**password doesn't match";
        return false;
    }
}