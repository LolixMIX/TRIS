"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taxi_class_1 = require("./taxi.class");
const person_class_1 = require("./person.class");
//Создаем объекты класса Person
const pers1 = new person_class_1.Person("Владимир", person_class_1.PersType.PASSEGER, 15);
const pers2 = new person_class_1.Person("Пётр", person_class_1.PersType.PASSEGER, 18);
const pers3 = new person_class_1.Person("Евгений", person_class_1.PersType.PASSEGER, 10);
const pers4 = new person_class_1.Person("Степан", person_class_1.PersType.PASSEGER, 7);
const pers5 = new person_class_1.Person("Алексей", person_class_1.PersType.EMPLOYEE);
const pers6 = new person_class_1.Person("Кирилл", person_class_1.PersType.PASSEGER, 13.2);
//Создаем объект класса Taxi
const taxi = new taxi_class_1.Taxi();
taxi.setCarNumer('qw123ru');
taxi.setCarNumer('qw321ru');
//Назначаем водителя
console.log(taxi.AssignAnEmployee(pers5));
console.log(taxi.AssignAnEmployee(pers2));
console.log();
//Помещаем пассажиров в такси
console.log(taxi.TakePasseger(pers1));
console.log(taxi.TakePasseger(pers2));
console.log(taxi.TakePasseger(pers3));
console.log(taxi.TakePasseger(pers4));
console.log(taxi.TakePasseger(pers6));
console.log();
//Рассчитываем стоимость поездки и выводим информацию о такси
console.log(taxi.CalculateCost());
console.log(taxi.getInfo());
