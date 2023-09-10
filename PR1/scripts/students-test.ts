function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const names: string[] = [
    'Кирилл',
    'Данил',
    'Антон',
    'Николай',
    'Евгений',
    'Вячеслав',
    'Степан',
    'Максим',
    'Константин',
    'Александр',
    'Андрей',
    'Сергей',
    'Иван',
    'Артем',
    'Михаил',
    'Дмитрий',
    'Владимир',
    'Павел',
    'Георгий',
    'Роман',
    'Виктор',
    'Юрий',
    'Игорь',
    'Олег',
    'Василий',
    'Григорий',
    'Арсений',
    'Федор',
    'Егор',
    'Тимофей',
    'Петр',
    'Денис',
    'Алексей',
    'Руслан',
    'Семен',
    'Леонид',
    'Илья',
    'Валентин',
    'Ярослав'
];
class Student {
    name: string;
    pullups: number;
    grade: number;
    constructor() {
        this.name = names[getRandomInt(1, names.length - 1)];
        this.pullups = getRandomInt(10, 20);
        this.grade = 0;
    }
}
function addStudents(quantity: number, students: Student[]): Student[] {
    for (let index = 0; index < quantity; index++) {
        const student: Student = new Student();
        students.push(student);
    }
    return students;
}
function calculateScore(students: Student[]) {
    students.forEach(student => {
        if (student?.pullups < 12) {
            console.log("Вы не справились с нормативом");
            student.grade = 2;
        } else if (student?.pullups >= 12 && student?.pullups <= 13) {
            console.log("Ваша оценка 3");
            student.grade = 3;
        } else if (student?.pullups >= 14 && student?.pullups <= 15) {
            console.log("Ваша оценка 4");
            student.grade = 4;
        } else if (student?.pullups >= 16) {
            console.log("Ваша оценка 5");
            student.grade = 5;
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {


    const studentsForm = document.getElementById('studentsForm') as HTMLFormElement;
    const ratingDiv = document.getElementById("rating") as HTMLTableElement;
    const scoreDiv = document.getElementById("score") as HTMLDivElement;
    const quantity = document.getElementById('quantity') as HTMLInputElement;

    let students: Student[] = [];
    let gradeC = [];
    let gradeB = [];
    let gradeA = [];
    function createTableCell(text: any) {
        const cell = document.createElement('td');
        cell.style.textAlign = "left";
        cell.textContent = text;
        return cell;
    }
    studentsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (parseInt(quantity.value) < 0) {
            alert('Значение не может быть отрицательным. Введите положительное значение')
        } else {
            students = [];
            gradeC = [];
            gradeB = [];
            gradeA = [];
            students = addStudents(parseInt(quantity.value), students);
            calculateScore(students);
        }
        ratingDiv.innerHTML = '';
        scoreDiv.innerHTML = '';
        students.sort((a, b) => a.pullups - b.pullups);

        students.forEach(student => {
            if (student.grade === 3) {
                gradeC.push(student);
            } else if (student.grade === 4) {
                gradeB.push(student);
            } else if (student.grade === 5) {
                gradeA.push(student);
            }
        })
        students.forEach(student => {
            const row = document.createElement('tr');
            row.appendChild(createTableCell(student.name));
            row.appendChild(createTableCell(student.pullups));
            row.appendChild(createTableCell(student.grade));
            ratingDiv.appendChild(row);

        })
        const gradeCBox = document.createElement('div');
        const gradeBBox = document.createElement('div');
        const gradeABox = document.createElement('div');


        const minPull = document.createElement('div');
        const maxPull = document.createElement('div');

        gradeCBox.textContent = `Удовлетворительно: ${gradeC.length}`
        gradeBBox.textContent = `Хорошо: ${gradeB.length}`
        gradeABox.textContent = `Отлично: ${gradeA.length}`

        minPull.textContent = `Минимальное: ${students[0].pullups.toString()}`;
        maxPull.textContent = `Максимальное ${students[students.length - 1].pullups.toString()}`;

        scoreDiv.appendChild(gradeCBox);
        scoreDiv.appendChild(gradeBBox);
        scoreDiv.appendChild(gradeABox);
        scoreDiv?.appendChild(minPull);
        scoreDiv?.appendChild(maxPull);

    })
})