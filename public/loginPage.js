"use strict"



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


