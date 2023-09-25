"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taxi = void 0;
const person_class_1 = require("./person.class");
const COST_OF_KILOMETER = 10;
class Taxi {
    constructor(carNumber, employee) {
        this.passengers = [];
        this.MAX_PASSAGERS = 4;
        try {
            employee.personType === person_class_1.PersType.EMPLOYEE ? this.employee = employee : console.log(`Пассажир`);
            this.carNumber = carNumber;
        }
        catch (error) {
            console.log(error);
        }
    }
    //Назначить водителя
    AssignAnEmployee(person) {
        if (person.personType !== person_class_1.PersType.EMPLOYEE && this.employee.name !== null) {
            return `Нельзя назначить пассажира водителем или водитель уже назначен`;
        }
        this.employee = person;
        return `Водтель ${this.employee.name} назначен`;
    }
    //Взять пассажиров
    TakePasseger(person) {
        if (this.passengers.length <= this.MAX_PASSAGERS) {
            this.passengers.push(person);
            return this.passengers;
        }
    }
    //Высадить пассажиров
    DropOffPassengers() {
        return this.passengers = [];
    }
    //Рассчитать стоимость 
    CalculateCost(passengers) {
        passengers.forEach(passenger => {
            console.log(`Стоимость для ${passenger.name} состовляет ${passenger.getDistance() * COST_OF_KILOMETER} рублей`);
        });
    }
    //Информация о такси
    Info() {
        return `
        Водитель ${this.employee.name};
        Номер автомобиля ${this.carNumber};
        Пассажиры ${this.passengers.forEach(item => item.name + " ")};
        `;
    }
}
exports.Taxi = Taxi;
