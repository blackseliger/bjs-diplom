"use strict"

class UserForm {
    constructor()
    loginFormCallback
    registerFormCallback

}


class ApiConnector {
    constructor()
    login({login, password}, callback)
    register({login, password}, callback);
}


const userForm = new UserForm();
userForm.loginFormCallback = (data) => {
    ApiConnector.login(data);
    if (data){
        location.reload();
    } 
}

// let userForm = new UserForm();

// userForm.loginFormCallback = data => console.log(data);

// login: oleg@demo.ru, password: demo


// userForm.loginFormCallback = data => alert(data);


