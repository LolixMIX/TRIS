class Person {
    private name: string;
    public personType: PersType;
    private age: number;
    private distance: number = 0;

    public getDistance(): number {
        if (this.distance !== 0 && this.personType !== PersType.EMPLOYEE) {
            return Number(this.distance);
        }
        return 0;
    }
    public getName(): string {
        return this.name;
    }
    public getAge(): number {
        return this.age;
    }
    constructor(name: string, age: number, personType: PersType, distance?: number) {
        this.name = name;

        if (Math.sign(age) === 1) {
            this.age = age;    
        } else {
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

enum PersType {
    PASSEGER = "PASSEGER",
    EMPLOYEE = "EMPLOYEE"
}

export { PersType, Person }