// 1 задачa
let number0 = prompt("Enter a number")
console.log(`10% of number is ${number0/10}`)


// 2 задачa
let number1 = prompt("Enter a 1st number")
let number2 = prompt("Enter a 2nd number")
if (number1 > number2) {
  console.log(`${number1} is greater than the ${number2}`);
} else if (number2 > number1) {
  console.log(`${number2} is greater than the ${number1}`);
} else {console.log(`${number2} is equal to the ${number1}`);}


// 3 задачa
let number = prompt("Enter a 1st number")
if (number > 100) {
  console.log(`Число ${number} больше 100`);
} else if (number < 100) {
  console.log(`Число ${number} меньше 100`);
} else {console.log(`Число ${number} равно 100`);}


// 4 задачa
let name = prompt("enter your name")
let age = prompt("enter your age")
if (age < 18) {
    console.log(`Hi, ${name}`)
} else {
    console.log(`Hello, ${name}`) 
}