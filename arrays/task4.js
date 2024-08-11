const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbers.filter((el) => el %2 === 0)

console.log("Original numbers", numbers)
console.log("Even numbers", evenNumbers)