/************************************************************************************************
Task 1 (if..else Statement):
  Create a program that checks if a person is old enough to drive, using an if statement.

Steps:
  1. Define a variable named userAge to store the person's age.
  2. Define a variable to store the minimum driving age in your country.
  3. Write an if statement that checks whether the person's age is greater than or equal to the minimum driving age.
    - If the person's age is greater than or equal to the minimum driving age, print a message saying that the person is old enough to drive.
    - If the person's age is less than the minimum driving age, print a message saying that the person is not eligible to get a license yet.

Note:
   You can change the value of the age variable to test different cases. If the person's age is less than the minimum driving age, nothing will be printed.
************************************************************************************************/
// TODO: ADD YOUR CODE BELOW
let userAge = 30;
let miniage = 18;
if(userAge >= miniage){ 
  console.log("Hello you are old enough to drive  " );
}if(userAge < miniage);{
  console.log("Hello you are not eligible to get a license yet " );
}


/************************************************************************************************
Task 2 (if..else Statement): 
  Create a program that checks if a person is an admin, using just if...else statement.

Description: 
  In this task, you will create a program that checks if a person is an admin, using just if...else statement.
  You will define two variables, userName and role, and assign them the values userName and Admin respectively.
  Then, you will check if the person's userName is equal to userName and their role is equal to Admin.
  If both conditions are true, you will print a message saying that the person has permission to enter.
  Otherwise, you will print a message saying that they are not allowed to enter.

Steps:  
  1. Define two variables username and role, and assign them the values "YOUR_NAME" and "Admin" respectively.
  2. Ask the user to enter his/her name and store it in a variable called enteredUsername.
  3. Check if the entered username is equal to YOUR_NAME and the role is equal to Admin.
    - If both conditions are true, print the message Hello ${username}, and you have permission to access the restricted area.
    - If either of the conditions is false, print the message Hello ${userName}, I'm sorry but it seems you're not authorized to access the restricted area.
***********************************************************/
// TODO: ADD YOUR CODE BELOW
let username = "Walid";
let role = "Admin"
username= prompt("Enter your name:");
if(username === "Walid" && role === "Admin"){
console.log(`Hello ${username}, and you have permission to access the restricted area.`); }

else {
console.log(`Hello ${username}, I'm sorry but it seems you're not authorized to access the restricted area.`); }



/************************************************************************************************
Task 3 (if..else Statement):
   Write a program that checks if a number is positive, negative or zero, using if...else statement.

Steps:
  1. Ask the user to enter a number.
  2. Convert the input to a float or integer.
  3. Write an if...else statement to check whether the number is positive, negative or zero.
    - If the number is positive, print a message saying that it is positive.
    - If the number is negative, print a message saying that it is negative.
    - If the number is zero, print a message saying that it is zero.
************************************************************************************************/
// TODO: ADD YOUR CODE BELOW
let numInput = parseFloat(prompt('Please Enter A Number')); 

if(numInput > 0){
  console.log("The number is positive");
}else if(numInput < 0){
  console.log("The number is negative");
}else{
  console.log("The number is zero");
}


/*************************************************************************************************
Task 4 (if..else Statement):

Steps:
  1. Create a program that prompts the user for their age and checks if they are old enough to vote.
    - If the user is 18 or older, the program should ask if they are registered to vote (Hint: Use confirm() function). 
    - If they are registered, the program should print the message "Great! You are all set to vote."
    - If they are not registered, the program should print the message "You still have time to register to vote."
    - If the user is younger than 18, the program should calculate how many years are left until they turn 18 and print the message "You will be eligible to vote in X years", where X is the number of years left.
************************************************************************************************/
// TODO: ADD YOUR CODE BELOW

let UserAge = prompt('Please Enter A Number');

if(UserAge >= 18){
  let isRegistered = confirm("Are you registered to vote");
  if(isRegistered){
    console.log("Great! You are all set to vote.");
  }else{
    console.log("You still have time to register to vote.");
  }

}else{
  let yearsLeft = 18 - UserAge;
  console.log(`You will be eligible to vote in ${yearsLeft} years.`);
}




/*************************************************************************************************
Task 5 (if..else Statement): 

Description:
  You are building a pizza ordering system.
  The system should ask the user to select a pizza size, toppings, and drinks.
  The total cost of the order should be calculated and displayed to the user.
  The system should also apply discounts based on the user's order.
  - If the user selects a small pizza, the cost is $10.
  - If the user selects a medium pizza, the cost is $15.
  - If the user selects a large pizza, the cost is $20.
  - If the user adds more than 2 toppings, they receive a 10% discount on their order.
  - If the user orders a drink, they receive a $2 discount on their order.
  - If the user orders both more than 2 toppings and a drink, they receive a 15% discount on their order.

Steps:
  Step 1: Ask the user to select a pizza size
    - Use the prompt() method to ask the user to input the pizza size.
    - Use the toLowerCase() method to convert the user input to lowercase for easier comparison.
    - Store the user input in a variable called size.

  Step 2: Set the base price based on the pizza size
    - Create a variable called price.
    - Use an if-else-if statement to compare the size variable with the pizza sizes and set the price variable accordingly.
    - If the user input is not a valid pizza size, log an error message to the console.

  Step 3: Ask the user to select toppings
    - Use the prompt() method to ask the user to input the toppings they want, separated by commas.
    - Use the split() method to split the user input into an array of toppings.
    - Store the array of toppings in a variable called toppings.

  Step 4: Calculate the cost of the toppings
    - Create a variable called toppingCost.
    - Use an if-else statement to check the length of the toppings array and calculate the toppingCost accordingly.
    - If the length of the toppings array is less than or equal to 2, multiply the length by 2 to get the toppingCost.
    - If the length of the toppings array is greater than 2, multiply the length by 2 and then multiply by 0.9 to get the toppingCost   .
  
  Step 5: Ask the user if they would like to add a drink
    - Use the prompt() method to ask the user if they want to add a drink to their order.
    - Use the toLowerCase() method to convert the user input to lowercase for easier comparison.
    - Store the user input in a variable called drink.

  Step 6: Calculate the cost of the drink
    - Create a variable called drinkCost.
    - Use an if statement to check if the user wants to add a drink.
    - If the user wants to add a drink, set the drinkCost variable to 2.
 
  Step 7: Calculate the total cost of the order
    - Create a variable called totalCost.
    - Add the price, toppingCost, and drinkCost variables together to get the totalCost.
 
  Step 8: Apply discounts based on the user's order
    - Use if-else-if statements to check if the user qualifies for any discounts.
    - If the user adds more than 2 toppings and orders a drink, apply a 15% discount to the totalCost.
    - If the user adds more than 2 toppings, apply a 10% discount to the totalCost.
    - If the user orders a drink, subtract $2 from the totalCost.
 
  Step 9: Display the total cost of the order to the user
    - Use the console.log() method to display the totalCost variable to the user in the form of a string.
    - Use the toFixed() method to format the totalCost to 2 decimal places.
*************************************************************************************************/
// TODO: ADD YOUR CODE BELOW


let size = prompt("Please select a pizza size (small, medium, or large):").toLowerCase();

let price;
if (size === "small") {
  price = 10;
} else if (size === "medium") {
  price = 15;
} else if (size === "large") {
  price = 20;
} else {
  console.log("Invalid pizza size selected.");
}

let toppings = prompt("Please enter the toppings you want, separated by commas:").split(",");

let toppingCost;
if (toppings.length <= 2) {
  toppingCost = toppings.length * 2;
} else {
  toppingCost = toppings.length * 2 * 0.9;
}

let drink = prompt("Would you like to add a drink to your order? (yes or no):").toLowerCase();

let drinkCost = 0;
if (drink === "yes") {
  drinkCost = 2;
}

let totalCost = price + toppingCost + drinkCost;

if (toppings.length > 2 && drink === "yes") {
  totalCost *= 0.85; 
} else if (toppings.length > 2) {
  totalCost *= 0.9; 
} else if (drink === "yes") {
  totalCost -= 2; 
}

console.log("Total cost of your order: $" + totalCost.toFixed(2));













