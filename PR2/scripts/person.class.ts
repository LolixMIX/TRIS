class Person {
    private name: string;
    public personType: PersType;
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
    constructor(name: string, personType: PersType, distance?: number) {
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

enum PersType {
    PASSEGER = "PASSEGER",
    EMPLOYEE = "EMPLOYEE"
}

export { PersType, Person }