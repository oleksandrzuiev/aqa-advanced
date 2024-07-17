const number = 12
let multiplicationResult

console.log(`Multiplication table of ${number}`)
for (let i = 1; i <= 10; i++) {
  multiplicationResult = number * i
  console.log(`${number} x ${i} = ${multiplicationResult}`)
}
