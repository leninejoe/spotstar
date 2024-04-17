

//Verify OTP
var Generated_OTP=Math.floor(Math.random()*999999)
alert(Generated_OTP)


function Verify_OTP(){
    var user_OTP=document.getElementById("otp").value

    if(Generated_OTP==user_OTP){
        window.location.href="./New_pswd.html"
    }else{
        document.getElementById("otp").value = ""
        alert("Incorrect OTP")
    }   
}

function Resend(){
    window.location.href="./forgot_pswd.html"
}