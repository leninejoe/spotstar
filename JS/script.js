    
    //Login Validation
    function logIn(){
        var db={'user':'User@123','admin':'Admin@123','leninejoe':'Lenine@03'}
        var username=document.getElementById("username").value 
        var password=document.getElementById("L_pass").value 
        var Names=Object.keys(db)
        var flag=false
        for(var i=0;i<Names.length;i++){
            if(Names[i]==username){
                if(db[Names[i]]==password){
                    flag=true
                }
            }
        }
        if(flag==true){
            window.location.href='./home.html'
        }else{
            alert("Invalid Username or Incorrect Password")
            document.getElementById("username").style.border="2px red solid"
            document.getElementById("L_pass").style.border="2px red solid"
        }
    
    }


    //Signup Validation
    function signUp() {

        // Email Validation
        var email = document.getElementById("email").value;
        var EM_flag = false;
    
        var rate = email.indexOf('@') > 0; // Check for '@' not at the start.
        var dot = email.lastIndexOf('.') > email.indexOf('@') + 1; // Ensure there's a dot after the '@'.
        var n_dot = email.lastIndexOf('.') < email.length - 1; // Ensure the email doesn't end with a dot.
    
        if (rate && dot && n_dot) {
            EM_flag = true;
        }
    
        // Phone Number Validation
        var PH = document.getElementById("phone_no").value;
        var PH_flag = false;
        if ((PH >= 6000000000) && (PH <= 9999999999)) { // multiple condition given using "&&"
            PH_flag = true;
        }
    
        // Password Validation and Verification
        var Pass = document.getElementById("pass").value;
        var C_Pass = document.getElementById("C-pass").value;
        var Pass_flag = false;
        var P_Length = 0;
        var P_Upper = 0;
        var P_Lower = 0;
        var P_Number = 0;
        var P_Special = 0;
    
        for (var i = 0; i < Pass.length; i++) {
            P_Length++;
            if ((Pass[i] >= 'A') && (Pass[i] <= 'Z')) {
                P_Upper++;
            } else if ((Pass[i] >= 'a') && (Pass[i] <= 'z')) {
                P_Lower++;
            } else if ((Pass[i] >= '0') && (Pass[i] <= '9')) {
                P_Number++;
            } else {
                P_Special++;
            }
        }
    
            if ((P_Length >= 8) && (P_Length <= 16) && (P_Upper >= 1) && (P_Lower >= 1) && (P_Number >= 1) && (P_Special >= 1)) {
                if (Pass == C_Pass) {
                    Pass_flag = true;
                }
            }
        
        //Final Validation
        if((EM_flag==true)&&(PH_flag==true)&&(Pass_flag==true)) {
            window.location.href = "./index.html";
        } else {
            alert("Check the given Phone Number is valid\nCheck the given Email Id is Valid\nPassword Must be :\n8 character length\nAtleast one Uppercase and one Lowercase\nMust contain one Numeric value and Special symbols.");
        }

}

    // Number Validation
    function phone(){
        var PH= document.getElementById("phone_no").value
        if((PH>=6000000000)&&(PH<=9999999999)){                                   //multiple condition given using "&&"
            window.location.href = "./Verify_OTP.html";
        }
        else{
            alert("Invalid Number")
        }
    }

    //New Password -- Confirm Password
    function pass(){
    var Pass = document.getElementById("F_pass").value;
    var C_Pass = document.getElementById("F_C-pass").value;
    var P_Length = 0;
    var P_Upper = 0;
    var P_Lower = 0;
    var P_Number = 0;
    var P_Special = 0;

    for (var i = 0; i < Pass.length; i++) {
        P_Length++;
        if ((Pass[i] >= 'A') && (Pass[i] <= 'Z')) {
            P_Upper++;
        } else if ((Pass[i] >= 'a') && (Pass[i] <= 'z')) {
            P_Lower++;
        } else if ((Pass[i] >= '0') && (Pass[i] <= '9')) {
            P_Number++;
        } else {
            P_Special++;
        }
    }
        if ((Pass.length === 0)&&(C_Pass.length === 0)){
            alert("This Field Can't be Empty")
            document.getElementById("F_pass").style.border="2px red solid"
            document.getElementById("F_C-pass").style.border="2px red solid"
            return; // Exit the function if no input is given.
        }

        if ((P_Length >= 8) && (P_Length <= 16) && (P_Upper >= 1) && (P_Lower >= 1) && (P_Number >= 1) && (P_Special >= 1)) {
            if (Pass == C_Pass) {
                alert("Password Updated Succefully")
                window.location.href = "./index.html";
            }
        }
}
