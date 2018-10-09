'use strict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const inputLogin = prompt('Введите свой логин');

const checkLoginValidity = function(inputLogin)
{
    let arr = inputLogin.split('');

    if ((arr.length>=4) && (arr.length <= 16)) {
        return true;
    }
    return false;
}
const checkIfLoginExists = function (logins, inputLogin) {
    return logins.includes(inputLogin);
};


const addLogin = function (logins, inputLogin) {
    if (checkLoginValidity(inputLogin) === false) {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
    }
    else if (checkIfLoginExists(logins, inputLogin)) {
        alert('Такой логин уже используется!');
    }
    else {
        logins.push(inputLogin);
        alert('Логин успешно добавлен!');
    }

};


addLogin(logins, inputLogin);

console.log(logins);
