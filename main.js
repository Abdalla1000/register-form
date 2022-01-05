//all feilds 

let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPasword");
let email =document.querySelector("#email");
let phone = document.querySelector("#phone");


//span for some error messages
let help =document.querySelector(".helper");
//span for common Errors1111111111111
let commonErrors =document.querySelector("#commonErrors");
//form 
let form = document.querySelector("#signUpForm");

form.addEventListener("submit", event =>{
    event.preventDefault();
    //if all feilds Not Empty
    if (checkFeildsEmpty(firstName) && checkFeildsEmpty(lastName) && checkFeildsEmpty(password)
      && checkFeildsEmpty(confirmPassword) && checkFeildsEmpty(email) && checkFeildsEmpty(phone)){
// if password length less than 6 charagters the submition not hapen 
    if(!checkPasswordLength()){
    return;
 }
    if(!checkConfirmPassword()){
    return;
 }
 
    
// if all is okay 
commonErrors.textContent = alert("Succesfully Regsitered Thank You !" +  
"\n"+"your name:"+ "  "+firstName.value 
+"\n"+"your last name:"+ "  "+lastName.value+
"\n"+"your emal:"+ "  "+email.value+
"\n"+"your phone:"+ "  "+phone.value);
window.location.href = encodeURI("wel.html");

commonErrors.style.color= "#fff";

// reset all feilds of the form
form.reset();
    }else{
// calling the checkFeildsEmpty function to check if there any Empty Input
     checkFeildsEmpty(firstName);
     checkFeildsEmpty(lastName);
     checkFeildsEmpty(password);
     checkFeildsEmpty(confirmPassword);
     checkFeildsEmpty(email);
     checkFeildsEmpty(phone);
      
}
    });
    //function checking for Password Length
function checkPasswordLength(){
    if(password.value.length<6){
       commonErrors.textContent="Password Must greater than 6 Characters";
       password.style.border='1px solid red';
       commonErrors.style.color = "red";
     return false; 
    }else{
    password.style.border= '1px solid rgba(0,0,0,.125)';
    commonErrors.style.color="#000";
    return true;
    }

    }

function checkConfirmPassword(){
    if(confirmPassword.value != password.value){
        commonErrors.textContent= "Password Must be Same";
        confirmPassword.style.border = '1px solid red';
        commonErrors.style.color = "red";
        return false;
    }else{
        confirmPassword.style.border = '1px solid rgba(0,0,0,.125)';
        commonErrors.style.colo = "#000";
        return true;
            }
        }
        
// checkFeildsEmpty fucntion to check if there any Empty Feilds
function checkFeildsEmpty(feild) {
    if (feild.value === '' || feild.value == null){
    feild.style.border='1px solid red';
    commonErrors.textContent = "All Fiels Must Not Empty";
    commonErrors.style.color="red";
    return false;
    }else{
    feild.style.border = '1pxsolid rgba(0,0,0,.125)';
    
    return true;
    
    }
    
    }
