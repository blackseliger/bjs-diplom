"use strict"



// const { response } = require("express");  // почему когда каждый раз пишу в колбэке слово response, появляется эта строка? что за магия


const logoutButton = new LogoutButton();

logoutButton.action = () => {
    ApiConnector.logout(response => {
        if (response.success === true){
            location.reload();
        };
    })
};

ApiConnector.current( response => {
        if (response.success === true){
            ProfileWidget.showProfile(response.data);
        }
    })
 

const ratesBoard = new RatesBoard();

let getStocks = () => {
    ApiConnector.getStocks(response => {
        if (response.success === true){
            ratesBoard.clearTable();
            return ratesBoard.fillTable(response.data);
        }
    })
}
getStocks();

setInterval(getStocks, 60000);

let moneyManager = new MoneyManager();

moneyManager.addMoneyCallback = (data) => {
    ApiConnector.addMoney(data, response => {
        if (response.success === true) {
            ProfileWidget.showProfile(response.data);
            moneyManager.setMessage(response.success, `Пополнение подтверждено`) // вылетает окошко с крысным фоном, так и должно быть?..
        } else if (response.success === false){
            moneyManager.setMessage(response.success,response.data)
        }
    });
}

moneyManager.conversionMoneyCallback = (data) => {
    ApiConnector.convertMoney(data, response => {
        console.log(response);
        if (response.success === true){
            ProfileWidget.showProfile(response.data);
            moneyManager.setMessage(response.success, `Конвертация подтверждена`) 
        } else if (response.success === false){
            moneyManager.setMessage(response.success, response.data);
        }
    })
}

moneyManager.sendMoneyCallback = (data) => {
    ApiConnector.transferMoney(data, response => {
        if (response.success === true){
            ProfileWidget.showProfile(response.data);
            moneyManager.setMessage(response.success, `Перед подтвержден`)
        } else if (response.success === false){
            moneyManager.setMessage(response.success, response.data);
        }
    })
}

let favoriteWidget = new FavoritesWidget();

ApiConnector.getFavorites(response => {
    console.log(response)
    if (response.success === true){
        favoriteWidget.clearTable();
        favoriteWidget.fillTable(response.data)
        moneyManager.updateUsersList(response.data)
    };
})

favoriteWidget.addUserCallback  = (data) => {
    ApiConnector.addUserToFavorites(data, response => {
        if (response.success === true){
            favoriteWidget.clearTable();
            favoriteWidget.fillTable(response.data);
            moneyManager.updateUsersList(response.data);
            favoriteWidget.setMessage(response.success, `Пользователь успешно добавлен в список`);
        } else if (response.success === false){
            favoriteWidget.setMessage(response.success, response.data);
        }
    })
}

favoriteWidget.removeUserCallback = (data) => {
    ApiConnector.removeUserFromFavorites(data, response => {
        if (response.success === true){
            favoriteWidget.clearTable();
            favoriteWidget.fillTable(response.data);
            moneyManager.updateUsersList(response.data)
            favoriteWidget.setMessage(response.success, `Пользователь успешно удален из списка`)
        } else if (response.success === false){
            favoriteWidget.setMessage(response.success, response.data);
        }
    })
}


