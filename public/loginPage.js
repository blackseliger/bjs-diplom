"use strict"


const userForm = new UserForm();
userForm.loginFormCallback = (data) => {
    ApiConnector.login(data);
    if (!data){
        userForm.setRegisterErrorMessage(`message`)
    }   else {
        location.reload();
        }
    }


userForm.registerFormCallback = (data) => {
   ApiConnector.register(data);
        if (!data) {
            userForm.setLoginErrorMessage(`message`)
        }   
            location.reload();
}

// let userForm = new UserForm();

// userForm.loginFormCallback = data => console.log(data);

// login: oleg@demo.ru, password: demo


// userForm.loginFormCallback = data => alert(data);



// ApiConnector.login({login: `oleg@demo.ru`, password: `demo`}, response => console.log(response);

