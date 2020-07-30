"use strict"








// loginFormCallback — функция, которая будет выполняться при попытке авторизации
// registerFormCallback — функция, которая будет выполняться при попытке регистрации

const userForm = new UserForm();
userForm.loginFormCallback = function(data) {
    ApiConnector.login(data, response => {
        return response.success === true ? location.reload() : userForm.setLoginErrorMessage(response.data)
    });
    };


userForm.registerFormCallback = (data) => {
   ApiConnector.register(data, response => {
       return response.success === true ? location.reload() : userForm.setRegisterErrorMessage(response.userId);
   });
}




// let userForm = new UserForm();

// userForm.loginFormCallback = data => console.log(data);

// login: oleg@demo.ru, password: demo


// userForm.loginFormCallback = data => alert(data);



// ApiConnector.login({login: `oleg@demo.ru`, password: `demo`}, response => console.log(response);

