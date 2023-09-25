"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taxi_class_1 = require("../scripts/taxi.class");
const person_class_1 = require("./person.class");
const drivers = [];
const passengers = [];
document.addEventListener("DOMContentLoaded", () => {
    const userName = document.getElementById('user_name');
    const typeOfPerson = document.getElementById('type_of_person');
    const carNumber = document.getElementById('car_number');
    const distance = document.getElementById('distance');
    const personForm = document.getElementById('person_form');
    const passagersList = document.getElementById('passagers_list');
    const driversList = document.getElementById('drivers_list');
    personForm.addEventListener("click", (event) => {
        event.preventDefault();
        if (typeOfPerson.value === "EMPLOYEE") {
            const person = new person_class_1.Person(userName.value, person_class_1.PersType.EMPLOYEE);
            const newTaxi = new taxi_class_1.Taxi(parseFloat(carNumber.value), person);
            drivers.push(newTaxi);
            driversList.innerHTML = "";
            drivers.forEach(driver => {
                driver;
            });
        }
        else {
            const person = new person_class_1.Person(userName.value, person_class_1.PersType.PASSEGER, parseFloat(distance.value));
            passengers.push(person);
        }
    });
});
