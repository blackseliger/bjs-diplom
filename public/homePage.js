"use strict"



// const { response } = require("express");  // почему когда каждый раз пишу в колбэке слово response, появляется эта строка? что за магия


const logoutButton = new LogoutButton();

logoutButton.action = () => {
    ApiConnector.logout(response => {
        if (response.success === true){
            location.reload();
        };
    })

    ApiConnector.current( response => {
        if (response.success === true){
            ProfileWidget.showProfile(response.data);
        }
    })
}; 

const ratesBoard = new RatesBoard();
ratesBoard.tableBody = () => {
    ApiConnector.getStocks(response => {
        if (response.success === true){
            ratesBoard.clearTable()
           return ratesBoard.fillTable(response.data);
        };
    })
}

setInterval(ratesBoard.tableBody, 1000);


const moneyManager = new MoneyManager();
moneyManager.addMoneyCallback = (data) =>{
    ApiConnector.addMoney(data, response => {
        if (response.success === true ){
            ProfileWidget.showProfile(response.data);
            moneyManager.setMessage(response.success);
        } else {
            moneyManager.setMessage(response.data);
        }
    })
}


