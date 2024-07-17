const averageGrade = 61
const gradeResult = 'Ваша оцінка:'
const errorMessage = 'Невірне значення середньої оцінки. Перевірте введені дані!'

if (averageGrade >= 0 && averageGrade < 60) {
  console.log(`${gradeResult} Незадовільно. Варто приділити час навчанню!`)
} else if (averageGrade >= 60 && averageGrade <= 70) {
  console.log(`${gradeResult} Задовільно. Трішки напружитись і буде добре :)`)
} else if (averageGrade >= 71 && averageGrade <= 80) {
  console.log(`${gradeResult} Добре. Досить добре :), так тримати.`)
} else if (averageGrade >= 81 && averageGrade <= 90) {
  console.log(`${gradeResult} Дуже добре. Ще трішки і ти best of the best`)
} else if (averageGrade >= 91 && averageGrade <= 100) {
  console.log(`${gradeResult} Відмінно. Вітаємо ти best of the best!`)
} else {
  console.log(errorMessage)
}
