import { Taxi } from '../scripts/taxi.class'
import { PersType, Person } from './person.class';

const drivers: Taxi[] = [];
const passengers = [];

document.addEventListener("DOMContentLoaded", () => {

    const userName = document.getElementById('user_name') as HTMLInputElement;
    const typeOfPerson = document.getElementById('type_of_person') as HTMLSelectElement;

    const carNumber = (document.getElementById('car_number') as HTMLInputElement);
    const distance = document.getElementById('distance') as HTMLInputElement;
    const personForm = document.getElementById('person_form') as HTMLFormElement;

    const passagersList = document.getElementById('passagers_list') as HTMLUListElement;
    const driversList = document.getElementById('drivers_list') as HTMLUListElement;


    personForm.addEventListener("click", (event) => {
        event.preventDefault();
        if (typeOfPerson.value === "EMPLOYEE") {
            const person = new Person(userName.value, PersType.EMPLOYEE);
            const newTaxi = new Taxi();
            drivers.push(newTaxi);

            driversList.innerHTML = "";
            drivers.forEach(driver => {
                driver
            });
        }
        else {
            const person = new Person(userName.value, PersType.PASSEGER, parseFloat(distance.value));
            passengers.push(person);
        }
    })

})