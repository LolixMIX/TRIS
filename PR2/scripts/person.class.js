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
    constructor(name, personType, distance) {
        this.distance = 0;
        this.name = name;
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
