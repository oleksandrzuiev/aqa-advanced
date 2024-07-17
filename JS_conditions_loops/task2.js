let averageGrade = 77;
let gradeResult = 'Ваша оцінка:';
const errorMessage = 'Невірне значення середньої оцінки. Перевірте введені дані!';


switch (true) {
    case  averageGrade >= 0 && averageGrade < 60:
        console.log(`${gradeResult} Незадовільно. Варто приділити час навчанню!`);
        break;
    case averageGrade >= 60 && averageGrade <= 70:
        console.log(`${gradeResult} Задовільно. Трішки напружитись і буде добре :)`);
        break;
    case averageGrade >= 71 && averageGrade <= 80:
        console.log(`${gradeResult} Добре. Досить добре :), так тримати.`);
        break;
    case averageGrade >= 81 && averageGrade <= 90:
        console.log(`${gradeResult} Дуже добре. Ще трішки і ти best of the best`);
        break;
    case averageGrade >= 91 && averageGrade <= 100:
        console.log(`${gradeResult} Відмінно. Вітаємо ти best of the best!`);
        break;
    default:
        console.log(errorMessage)
}





