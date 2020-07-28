"use strict"



// loginFormCallback — функция, которая будет выполняться при попытке авторизации
// registerFormCallback — функция, которая будет выполняться при попытке регистрации

const userForm = new UserForm();
userForm.loginFormCallback = function(data) {
    let authorithAttemp = function(){
        const correctAccounts = [
        {login: `oleg@demo.ru`, password: `demo`},
        {login: `ivan@demo.ru`, password: `demo`},
        {login: `petr@demo.ru`, password: `demo`},
        {login: `galina@demo.ru`, password: `demo`},
        {login: `vladimir@demo.ru`, password: `demo`},
        ]

        if (correctAccounts.some(element => element.login === data.login && element.password === data.password)){
            // location.reload();
            console.log(`все верно`)
        } else {
            userForm.setLoginErrorMessage(`Логин или пароль не верны`);
        }
    }
    
    ApiConnector.login(data, authorithAttemp);
    };


// userForm.loginFormAction(data);



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

