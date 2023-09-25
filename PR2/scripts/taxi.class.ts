import { Person, PersType } from "./person.class";

const COST_OF_KILOMETER: number = 10;

class Taxi {
    private passengers: Person[] = [];
    private MAX_PASSAGERS: number = 4;  

    private employee: Person | undefined;
    private cardNumber: number | undefined;

    setCardNumer(cardNumber: number){
        if (!this.cardNumber) {
        return this.cardNumber = cardNumber;    
        }
        
    }

    //Назначить водителя
    public AssignAnEmployee(person: Person): string {
        if (person.personType !== PersType.EMPLOYEE && this.employee?.name !== null) {
            return `Нельзя назначить пассажира водителем или водитель уже назначен`
        }
        this.employee = person;
        return `Водтель ${this.employee.name} назначен`
    }

    //Взять пассажиров
    public TakePasseger(person: Person) {
        if (this.passengers.length <= this.MAX_PASSAGERS) {
            this.passengers.push(person);
            return this.passengers;
        }
    }

    //Высадить пассажиров
    public DropOffPassengers() {
        return this.passengers = [];
    }
    //Рассчитать стоимость 
    public CalculateCost(passengers: Person[]) {
        passengers.forEach(passenger => {
            console.log(`Стоимость для ${passenger.name} состовляет ${passenger.getDistance() * COST_OF_KILOMETER} рублей`);
        });
    }
    //Информация о такси
    public Info(): string {
        return `
        Водитель ${this.employee.name};
        Номер автомобиля ${this.carNumber};
        Пассажиры ${this.passengers.forEach(item => item.name + " ")
            };
        `
    }
}

export { Taxi }