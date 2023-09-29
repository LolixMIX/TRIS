import { Person, PersType } from "./person.class";

const COST_OF_KILOMETER: number = 10;

class Taxi {
    private passengers: Person[];
    private MAX_PASSAGERS: number = 4;

    private employee: Person | undefined;
    private carNumber: string | undefined;

    constructor() {
        this.passengers = [];
    }

    setCarNumer(cardNumber: string) {
        if (!this.carNumber) {
            return this.carNumber = cardNumber;
        }
    }

    //Назначить водителя
    public AssignAnEmployee(person: Person): string {
        if (person.personType !== PersType.EMPLOYEE && this.employee?.getName() !== null) {
            return `Нельзя назначить пассажира водителем или водитель уже назначен`
        }
        this.employee = person;
        return `Водтель ${this.employee.getName()} назначен`
    }

    //Взять пассажиров
    public TakePasseger(person: Person): string {
        if (this.passengers.length < this.MAX_PASSAGERS) {
            this.passengers.push(person);
            return `${person.getName()} сел в такси`;
        }
        return `${person.getName()} не поместился в такси :( Максимальное кол-во пассажиров ${this.MAX_PASSAGERS}`;
    }

    //Высадить пассажиров
    public DropOffPassengers() {
        return this.passengers = [];
    }
    //Рассчитать стоимость 
    public CalculateCost(): string {
        if (!this.employee) {
            return `Водитель не назначен`
        }
        if (this.passengers.length === 0) {
            return `Нет пассажиров`
        }
        return `${this.passengers.map(passager =>
            `Стоимость для ${passager.getName()} состовляет ${passager.getDistance() * COST_OF_KILOMETER} рублей;\n`
        ).join('')}`
    }
    //Информация о такси
    public getInfo(): string {
        if (!this.employee) {
            return `Водитель не назначен`
        }
        return `Водитель ${this.employee?.getName()};\nНомер автомобиля ${this.carNumber};\nПассажиры: ${this.passengers.map(item => item.getName()).join(', ')};\n`
    }
}

export { Taxi }