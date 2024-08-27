// "printWidth": 80, "tabWidth":4
const a = [
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
	'HELLO',
];

// "semi": true, "singleQuote": true
console.log(`-----Loop for...of-----`);

const numbers1 = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount1 = 0;
let negativeCount1 = 0;
let zeroCount1 = 0;

for (const number of numbers1) {
	if (number > 0) {
		positiveCount1++;
	} else if (number < 0) {
		negativeCount1++;
	} else {
		zeroCount1++;
	}
}

console.log('The number of  positive numbers is' + positiveCount1);
console.log('The number of  negative numbers is' + negativeCount1);
console.log('The number of  zeroes is' + zeroCount1);

//"bracketSpacing": true
const users = [
	{
		firstName: `Chandler`,
		lastName: `Bing`,
		age: 30,
		email: `Chandler.Bing@gmail.com`,
	},
	{
		firstName: `Monica`,
		lastName: `Geller`,
		age: 28,
		email: `Monica.Geller@gmail.com`,
	},
	{
		firstName: `Ross`,
		lastName: `Geller`,
		age: 31,
		email: `Ross.Geller@gmail.com`,
	},
	{
		firstName: `Rachel`,
		lastName: `Greene`,
		age: 28,
		email: `Rachel.Greene@gmail.com`,
	},
];
