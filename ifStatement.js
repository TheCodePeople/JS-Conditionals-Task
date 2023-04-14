/* Task 1 (if..else Statement): Create a program that checks if a person is old enough to drive,
 using an if statement.*/

//Steps:

//1 Define a variable named userAge to store the person's age.
const userAge = 101;

//2 Define a variable to store the minimum driving age in your country.
const minimumDrivingAge = 18;

//3 Write an if statement that checks whether the person's age is greater than or equal to the minimum driving age.
//  - If the person's age is greater than or equal to the minimum driving age, print a message saying that the person is old enough to drive.
//  - If the person's age is less than the minimum driving age, print a message saying that the person is not eligible to get a license yet.
if (userAge >= minimumDrivingAge) {
  console.log(`well, it seems that you're old enough to drive`);
} else {
  console.log(`Oops, it seems that someone is trying to break the rules`);
}
// Note: You can change the value of the age variable to test different cases. If the person's age is less than the minimum driving age, nothing will be printed.

/***********************************************************
Task 2 (if..else Statement): Create a program that checks if a person is an admin, using just if...else statement.

Description: In this task, you will create a program that checks if a person is an admin,
using just if...else statement.
You will define two variables, userName and role, and assign them the values userName and Admin respectively.
Then, you will check if the person's userName is equal to userName and their role is equal to Admin.
If both conditions are true, you will print a message saying that the person has permission to enter.
Otherwise, you will print a message saying that they are not allowed to enter.
***********************************************************/

// Steps:

//1 Define two variables userName and role, and assign them the values YOUR_NAME and Admin respectively.
const userName = "Zahraa";
const role = "Admin";

//2 Ask the user to enter their name and store it in a variable called .
let userEnteredName = prompt("Please enter your name");

//3 Check if the entered userName is equal to YOUR_NAME and the role is equal to Admin.
// - If both conditions are true, print the message Hello ${userName}, you have permission to access the restricted area.
// - If either of the conditions is false, print the message Hello ${userName}, I'm sorry but it seems you're not authorized to access the restricted area.
if (userEnteredName === userName && role == "Admin") {
  console.log(
    `Hello ${userName}, you have permission to access the restricted area`
  );
} else {
  console.log(
    `Hello ${userName}, I'm sorry but it seems you're not authorized to access the restricted area.`
  );
}

/***********************************************************/
/* Task 3 (if..else Statement): Write a program that checks if a number is positive, negative or zero, using if...else statement.*/

// Steps:

//1 Ask the user to enter a number.
//2 Convert the input to a float or integer.
let inputNumber = parseFloat(prompt("please enter a number"));

//3 Write an if...else statement to check whether the number is positive, negative or zero.
// - If the number is positive, print a message saying that it is positive.
// - If the number is negative, print a message saying that it is negative.
// - If the number is zero, print a message saying that it is zero.
if (inputNumber > 0) {
  console.log(`The number is positive`);
} else if (inputNumber == 0) {
  console.log(`The number is zero`);
} else {
  console.log(`the number is negative`);
}

/***********************************************************/
/* Task 4 (if..else Statement): Create a program that prompts the user for their age and checks if they are old enough to vote.
 If the user is 18 or older, the program should ask if they are registered to vote. 
 If they are registered, the program should print the message "Great! You are all set to vote."
 If they are not registered, the program should print the message "You still have time to register to vote."*/
// If the user is younger than 18, the program should calculate how many years are left until they turn 18 and print the message "You will be eligible to vote in X years", where X is the number of years left.

let age = prompt("Please enter your age");
if (age >= 18) {
  let registered = confirm("Have you registered to vote?");
  if (registered) {
    console.log(`Great! you're all set to vote`);
  } else {
    console.log(`you still have time to register to vote`);
  }
} else {
  let yearsLeft = 18 - age;
  console.log(`You will be eligible to vote in ${yearsLeft} years`);
}

/***********************************************************/
/* Task 5 (if..else Statement): You are building a pizza ordering system.
The system should ask the user to select a pizza size, toppings, and drinks.
The total cost of the order should be calculated and displayed to the user.
The system should also apply discounts based on the user's order.*/

//  If the user selects a small pizza, the cost is $10.

//  If the user selects a medium pizza, the cost is $15.

//  If the user selects a large pizza, the cost is $20.

//  If the user adds more than 2 toppings, they receive a 10% discount on their order.

//  If the user orders a drink, they receive a $2 discount on their order.

//  If the user orders both more than 2 toppings and a drink, they receive a 15% discount on their order.

// Steps:
/* Step 1: Ask the user to select a pizza size
- Use the prompt() method to ask the user to input the pizza size.
- Use the toLowerCase() method to convert the user input to lowercase for easier comparison.
- Store the user input in a variable called size.
*/
let size = prompt(
  "Please select the pizza size: small | medium | large :"
)?.toLowerCase();

/* Step 2: Set the base price based on the pizza size
- Create a variable called price.
- Use an if-else-if statement to compare the size variable with the pizza sizes and set the price variable accordingly.
- If the user input is not a valid pizza size, log an error message to the console.
*/
let price = 0;
if (size != "small" && size != "medium" && size != "large") {
  console.log(`please enter a valid size, ${size}`);
  size = prompt("Please select the pizza size: small | medium | large :");
} else if (size == "small") {
  price = 10;
} else if (size == "medium") {
  price = 15;
} else {
  price = 20;
}
/* Step 3: Ask the user to select toppings
- Use the prompt() method to ask the user to input the toppings they want, separated by commas.
- Use the split() method to split the user input into an array of toppings.
- Store the array of toppings in a variable called toppings.
*/
let toppings =
  prompt(
    "Please select toppings: Mushroom, tomato, olive, onion, garlic, pineapple"
  )
    ?.toLowerCase()
    .split(",") || [];
/* Step 4: Calculate the cost of the toppings
- Create a variable called toppingCost.
- Use an if-else statement to check the length of the toppings array and calculate the toppingCost accordingly.
- If the length of the toppings array is less than or equal to 2, multiply the length by 2 to get the toppingCost.
- If the length of the toppings array is greater than 2, multiply the length by 2 and then multiply by 0.9 to get the toppingCost   .
*/
let toppingCost = 0;
if (toppings.length <= 2) {
  console.log(
    "🚀 ~ file: ifStatement.js:159 ~ toppings.length:",
    toppings.length
  );
  toppingCost = toppings.length * 2;
} else {
  toppingCost = toppings.length * 2 * 0.9;
}
/* Step 5: Ask the user if they would like to add a drink
- Use the prompt() method to ask the user if they want to add a drink to their order.
- Use the toLowerCase() method to convert the user input to lowercase for easier comparison.
- Store the user input in a variable called drink.
*/
let drink = prompt("Would you like some drinks?")?.toLowerCase();

/* Step 6: Calculate the cost of the drink
- Create a variable called drinkCost.
- Use an if statement to check if the user wants to add a drink.
- If the user wants to add a drink, set the drinkCost variable to 2.
*/
let drinkCost = 0;
if (drink) {
  drinkCost = 2;
}
/* Step 7: Calculate the total cost of the order
- Create a variable called totalCost.
- Add the price, toppingCost, and drinkCost variables together to get the totalCost.
*/
let totalCost = price + toppingCost + drinkCost;
/* Step 8: Apply discounts based on the user's order
- Use if-else-if statements to check if the user qualifies for any discounts.
- If the user adds more than 2 toppings and orders a drink, apply a 15% discount to the totalCost.
- If the user adds more than 2 toppings, apply a 10% discount to the totalCost.
- If the user orders a drink, subtract $2 from the totalCost.
*/
let discount = 0;
if (toppings.length > 2 && drink) {
  discount = totalCost * (15 / 100);
  totalCost -= discount;
} else if (toppings.length > 2) {
  discount = totalCost * (10 / 100);
  totalCost -= discount;
} else if (drink) {
  discount = totalCost * (2 / 100);
  totalCost -= discount;
}
/* Step 9: Display the total cost of the order to the user
- Use the console.log() method to display the totalCost variable to the user in the form of a string.
- Use the toFixed() method to format the totalCost to 2 decimal places.
*/
console.log(
  `Here's your order and the total cost will be: $${totalCost.toFixed(2)}`
);
