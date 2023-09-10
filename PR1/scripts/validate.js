"use strict";
const MIN = 6;
const MAX = 12;
function check(password) {
    if (password.length < MIN) {
        alert(`Минимальный пароль ${MIN} символов`);
        return false;
    }
    else if (password.length >= MAX) {
        alert(`Максимальный пароль ${MAX} символов`);
        return false;
    }
    else if (!/[0-9]/.test(password)) {
        alert(`Пароль должен содержать хотя бы одну цифру`);
        return false;
    }
    else if (!/[a-z]/.test(password)) {
        alert(`Пароль должен содержать хотя бы одну строчную букву`);
        return false;
    }
    else if (!/[A-Z]/.test(password)) {
        alert(`Пароль должен содержать хотя бы одну заглавную букву`);
        return false;
    }
    else if (!/[!@#$%^&*]/.test(password)) {
        alert(`Пароль должен содержать хотя бы один спец символ`);
        return false;
    }
    return true;
}
document.addEventListener('DOMContentLoaded', () => {
    const passwordField = document.getElementById('passwordField');
    const togglePassword = document.getElementById('togglePassword');
    const passwordForm = document.getElementById('passwordForm');
    const resultElem = document.getElementById('result');
    passwordForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const result = check(passwordField.value);
        if (result) {
            resultElem.textContent = String(result);
            resultElem.style.color = 'Green';
        }
        else {
            resultElem.textContent = String(result);
            resultElem.style.color = 'Red';
        }
    });
    togglePassword.addEventListener("click", (event) => {
        event.preventDefault();
        if (passwordField.type === "password") {
            passwordField.type = "text"; // Отобразить пароль
        }
        else {
            passwordField.type = "password"; // Скрыть пароль
        }
    });
});
