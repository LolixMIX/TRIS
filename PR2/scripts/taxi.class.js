"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taxi = void 0;
const person_class_1 = require("./person.class");
const COST_OF_KILOMETER = 10;
class Taxi {
    constructor() {
        this.MAX_PASSAGERS = 4;
        this.passengers = [];
    }
    setCarNumer(cardNumber) {
        if (!this.carNumber) {
            return this.carNumber = cardNumber;
        }
    }
    //Назначить водителя
    AssignAnEmployee(person) {
        var _a;
        if (person.personType !== person_class_1.PersType.EMPLOYEE && ((_a = this.employee) === null || _a === void 0 ? void 0 : _a.getName()) !== null) {
            return `Нельзя назначить пассажира водителем или водитель уже назначен`;
        }
        this.employee = person;
        return `Водтель ${this.employee.getName()} назначен`;
    }
    //Взять пассажиров
    TakePasseger(person) {
        if (this.passengers.length < this.MAX_PASSAGERS) {
            this.passengers.push(person);
            return `${person.getName()} сел в такси`;
        }
        return `${person.getName()} не поместился в такси :( Максимальное кол-во пассажиров ${this.MAX_PASSAGERS}`;
    }
    //Высадить пассажиров
    DropOffPassengers() {
        return this.passengers = [];
    }
    //Рассчитать стоимость 
    CalculateCost() {
        if (!this.employee) {
            return `Водитель не назначен`;
        }
        if (this.passengers.length === 0) {
            return `Нет пассажиров`;
        }
        return `${this.passengers.map(passager => `Стоимость для ${passager.getName()} состовляет ${passager.getDistance() * COST_OF_KILOMETER} рублей;\n`).join('')}`;
    }
    //Информация о такси
    getInfo() {
        var _a;
        if (!this.employee) {
            return `Водитель не назначен`;
        }
        return `Водитель ${(_a = this.employee) === null || _a === void 0 ? void 0 : _a.getName()};\nНомер автомобиля ${this.carNumber};\nПассажиры: ${this.passengers.map(item => item.getName()).join(', ')};\n`;
    }
}
exports.Taxi = Taxi;
