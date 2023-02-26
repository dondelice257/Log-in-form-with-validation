
       
var logUsername = document.getElementById('log-user-name');
var signUsername = document.getElementById('sign-user-name');
var header = document.getElementById('header')
var assignement = document.getElementById('assignement');
var signForm = document.getElementById('sign-form');
var fullName = document.getElementById('full-name');
var invalidFullName = document.getElementById('invalid-full-name')
var assignement = document.getElementById('assignement');
var logForm = document.getElementById('log-form');
var logPassWord = document.getElementById('log-password');
var signPassWord = document.getElementById('sign-password');
var signPassWord1 = document.getElementById('sign-password1');
var h4 = document.querySelector('h4');
var body = document.querySelector('#body3')
var register =document.getElementById('register');
var show = document.getElementById('show');
var succes = document.getElementById('succes');


var logInvalidUsername = document.getElementById('log-invalid-user-name');
var signInvalidUsername = document.getElementById('sign-invalid-user-name');


var logInvalidPassword = document.getElementById('log-invalid-password');
var signInvalidPassword = document.getElementById('sign-invalid-password');
var signInvalidPassword1 = document.getElementById('sign-invalid-password1');




const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var logBtn = document.querySelector('#log-btn');
var signBtn = document.querySelector('#sign-btn');


register.addEventListener('click', function(){
    signForm.style.visibility="visible";
    logForm.style.visibility="hidden";

    signForm.style.position="absolute"
    signForm.style.top="25%"



    
})
assignement.addEventListener('click', function(){
    signForm.style.visibility="hidden"
    logForm.style.visibility="visible"
})

logBtn.addEventListener('click', function(){
    if(logUsername.value == 'dondelicedushime@gmail.com' && logPassWord.value == 'arerwa12'){
       body.style.visibility="hidden";
       succes.style.visibility="visible"
       logInvalidPassword.style.visibility="hidden";
       logInvalidUsername.style.visibility="hidden"

        

    }else if(logUsername.value==""){
        logInvalidUsername.style.visibility="visible"
        logInvalidUsername.innerHTML="This field cannot be empty"
        logInvalidUsername.style.color="red"
        logUsername.style.border="1px solid red"
    } else  if(logPassWord.value==""){
        logInvalidPassword.style.visibility="visible"
        logInvalidPassword.innerHTML="This field cannot be empty"
        logInvalidPassword.style.color="red"
        logPassWord.style.border="1px solid red"
    }
   
    else{h4.style.display="block";
         logInvalidUsername.style.visibility="hidden"
         logInvalidPassword.style.visibility="hidden"

}
})
logBtn.addEventListener('click', function(){
    if(logPassWord.value==""){
        logInvalidPassword.style.visibility="visible"
        logInvalidPassword.innerHTML="This field cannot be empty"
        logInvalidPassword.style.color="red"
        logPassWord.style.border="1px solid red"
    }
})

show.addEventListener('click', function(){
    if(logPassWord.type === "password"){
        logPassWord.type="text"
    }else{logPassWord.type="password"}
})









  
    
    signBtn.addEventListener('click', function(){
    if(signUsername.value.match(regex)){
    signInvalidUsername.style.visibility="visible"
    signInvalidUsername.style.color="green"
    signInvalidUsername.innerHTML="Success"
    signUsername.style.border="1px solid green"


    }else if(signUsername.value==""){
        signInvalidUsername.style.visibility="visible"
        signInvalidUsername.style.color="red"
   signInvalidUsername.innerHTML="This field cannot be empty !";
   signUsername.style.border="1px solid green"
    }
    else{
        signInvalidUsername.style.visibility="visible"
        signInvalidUsername.style.color="red"
   signInvalidUsername.innerHTML="Invalid user name or email !";
   signUsername.style.border="1px solid red"
    }
    
   
})
signBtn.addEventListener('click', function(){
    if(fullName.value.match(/[a-zA-Z]/) && !fullName.value.match(/[0-9]/)){
       invalidFullName.style.visibility="visible";
       fullName.style.border="1px solid green"
       invalidFullName.innerHTML="Succes";
       invalidFullName.style.color="green"
        
    }else if(fullName.value===""){
        invalidFullName.style.visibility="visible";
        invalidFullName.innerHTML="This field cannot be empty";
        invalidFullName.style.color="red";
        fullName.style.border="1px solid red"
    }
    else{
         fullName.style.border="1px solid red";
         invalidFullName.innerHTML="You enter an invalid name";
         invalidFullName.style.color="red"
         invalidFullName.style.visibility="visible"
    }
})


    signBtn.addEventListener('click', function(){
        if(signPassWord.value.length >= 8 && signPassWord.value.length <=12){
            signInvalidPassword.style.visibility="visible"
            signInvalidPassword.innerHTML="success"
            signInvalidPassword.style.color="green"
            signPassWord.style.border="1px solid green"
        }else if(signPassWord.value.length < 8){
            signInvalidPassword.style.visibility="visible"
            signInvalidPassword.innerHTML="your password must have at least 8 characters"
            signInvalidPassword.style.color="red"
            signPassWord.style.border="1px solid red"

        }
        else if(signPassWord.value.length > 12){
            signInvalidPassword1.style.visibility="visible"
            signInvalidPassword.innerHTML="Your password cannot depass 12 characters"
            signInvalidPassword.style.color="red"
            signPassWord.style.border="1px solid red"

        }
        else if(signPassWord.value== ""){
            signInvalidPassword.style.visibility="visible"
            signInvalidPassword.innerHTML="This field cannot be empty"
            signInvalidPassword.style.color="red"
            signPassWord.style.border="1px solid red"
        }

        else if(signPassWord1.value.lenght== 0){
            signInvalidPassword1.style.visibility="visible"
            signInvalidPassword1.innerHTML="This field cannot be empty"
            signInvalidPassword1.style.color="red"
            signPassWord1.style.border="1px solid red"

        }
        else{
            signInvalidPassword.innerHTML="you enter an invalid password"
            signInvalidPassword.style.color="red"
            signPassWord.style.border="1px solid red"
        }




    })
    signBtn.addEventListener("click", function(){
        if(signPassWord1.value == signPassWord.value ){
            signInvalidPassword1.style.visibility="visible"
            signInvalidPassword1.innerHTML="succes"
            signInvalidPassword1.style.color="green"
            signPassWord1.style.border="1px solid green"

        }
      
       

        
        else{
            signInvalidPassword1.style.visibility="visible"
            signInvalidPassword1.innerHTML="passwords must match"
            signInvalidPassword1.style.color="red"
            signPassWord1.style.border="1px solid red"

        }
    });



   
    

    
    
        






    window.onload = function(){
        alert('The web page is ready, start working')
    }






  

