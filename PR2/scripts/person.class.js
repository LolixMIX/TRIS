"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.PersType = void 0;
class Person {
    getDistance() {
        if (this.distance !== 0 && this.personType !== PersType.EMPLOYEE) {
            return Number(this.distance);
        }
        return 0;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    constructor(name, age, personType, distance) {
        this.distance = 0;
        this.name = name;
        if (Math.sign(age) === 1) {
            this.age = age;
        }
        else {
            throw new Error(`Возраст не может быть отрицательным`);
        }
        if (personType === PersType.EMPLOYEE) {
            this.personType = personType;
        }
        else {
            this.personType = personType;
            Number(distance) && distance !== undefined ? this.distance = distance : this.distance = 0;
        }
    }
}
exports.Person = Person;
var PersType;
(function (PersType) {
    PersType["PASSEGER"] = "PASSEGER";
    PersType["EMPLOYEE"] = "EMPLOYEE";
})(PersType || (exports.PersType = PersType = {}));
