import { Taxi } from './taxi.class';
import { Person, PersType } from './person.class';

//Создаем объекты класса Person
const pers1 = new Person("Владимир", 23, PersType.PASSEGER, 15);
const pers2 = new Person("Пётр", 14, PersType.PASSEGER, 18);
const pers3 = new Person("Евгений", 55, PersType.PASSEGER, 10);
const pers4 = new Person("Степан", 20, PersType.PASSEGER, 7);
const pers5 = new Person("Алексей", 54, PersType.EMPLOYEE);
const pers6 = new Person("Кирилл", 30, PersType.PASSEGER, 13.2);

//Создаем объект класса Taxi
const taxi = new Taxi();
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

