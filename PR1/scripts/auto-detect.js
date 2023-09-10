"use strict";
const allowedSpeed = 90;
function checkSpeed(currentSpeed, allowedSpeed) {
    const resulte = currentSpeed - allowedSpeed;
    let answer = "";
    if (resulte < 20) {
        answer = "Допустимая скорость";
    }
    else if (resulte >= 20 && resulte < 40) {
        answer = "Штраф 500 рублей";
    }
    else if (resulte >= 40 && resulte < 60) {
        answer = "Штраф 1500 рублей";
    }
    else if (resulte >= 60 && resulte < 80) {
        answer = "Штраф 2500 рублей или лишение прав на 4 месяца";
    }
    else if (resulte >= 80) {
        answer = "Штраф 5000 рублей или лишение прав на полгода";
    }
    return answer;
}
document.addEventListener("DOMContentLoaded", () => {
    const speedInput = document.getElementById('speed');
    const speedForm = document.getElementById('speedForm');
    speedForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (parseFloat(speedInput.value) < 0) {
            alert('Скорость не может быть отрицательной. Введите положительное значение');
        }
        else {
            alert(`${checkSpeed(parseFloat(speedInput.value), allowedSpeed)}`);
        }
    });
});
