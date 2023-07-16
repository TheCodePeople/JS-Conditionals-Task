/************************************************************************************************
Task 5 (Switch Statement): 
    Write a program that takes in a user's zodiac sign and outputs a horoscope for the day.

Example:
  - Enter your zodiac sign: Scorpio
  - Your horoscope for the day: You will have a pleasant surprise today in your career.
  ------------------------------------ 
  - Enter your zodiac sign: Gemini
  - Your horoscope for the day: You may feel like you are in a rut today. Try doing something out of your comfort zone to break the monotony.

Steps:
  1. Create a variable sign and prompt the user to enter their zodiac sign.
  2. Create a switch statement that checks the value of sign.
    - For each case, write a horoscope message for that sign for the day.
    - If the user enters a sign that is not recognized by the switch statement, display an error message saying "Sorry, we do not have a horoscope for that sign."
Note: Check the file called "Clothing_Recommendations.md" to find the list of weather forecasts and their corresponding clothing recommendations  
************************************************************************************************/
// TODO: ADD YOUR CODE BELOW
let sign = prompt(
  "Please enter zodiac sign and find out what the future holds:"
).toLowerCase();

switch (sign) {
  case "gemini":
    console.log(
      "u have a bad luck and u mom die")
    break;
  case "cancer":
    console.log(
      "You literally have pancreatic cancer."
    );
    break;
  case "aries":
    console.log(
      "u lost alot mony cause u loser  ^^."
    );
    break;
  case "taurus":
    console.log(
      "You may die."
    );
    break;
  case "scorpio":
    console.log("u bestfriend die ");
      
    break;
  case "virgo":
    console.log(
      "Your pet gets smash over by a car."
    );
    break;
  case "libra":
    console.log(
      "Bad day and suffer from misery and frustration and lose passion."
    );
    break;
  case "leo":
    console.log(
      "balabla i don't believe in it."
    );
    break;
  case "sagittarius":
    console.log(
      "blalblal bad luck forever."
    );
    break;
  case "capricorn":
    console.log(
      "u happy foerver"
    );
    break;
  case "aquarius":
    console.log(
      " lol."
    );
    break;
  case "pisces":
    console.log(
      "good luck and be fine."
    );
    break;
  default:
    console.log("GET OUT OFF HERE, we do not have a horoscope for that sign.");
}


/************************************************************************************************
Task 6 (Switch Statement):
    Create a program that helps you decide what to wear based on the weather forecast for the day.

Steps:
  1. Create a variable weather and prompt the user to enter the forecasted weather for the day (e.g. sunny, cloudy, rainy, snowy).
  2. Create a switch statement that checks the value of weather.
    - For each case, write a message recommending appropriate clothing for that weather condition.
    - If the user enters a weather condition that is not recognized by the switch statement, display an error message saying "Sorry, we do not have recommendations for that weather condition."

Example:
  - What's the weather forecast for today? Rainy
  - Recommendations: Wear a waterproof jacket, boots, and bring an umbrella.
  ------------------------------------ 
  - What's the weather forecast for today? Sunny
  - Recommendations: Wear sunscreen, a hat, and sunglasses.
************************************************************************************************/
// TODO: ADD YOUR CODE BELOW
let weather=prompt( "What's the weather forecast for today? ")
switch(weather){
  case "sunny":
  console.log("Choose lightweight cotton, linen, rayon, chambray, or silk fabrics for breathability and comfort.")
  break;
  case "Rainy":
  console.log("Choose waterproof or water-resistant fabrics like polyester, nylon, or Gore-Tex for maximum protectio")
  break;
  case "Cloudy":
  console.log("Layer with lightweight knits, fleece, or flannel for easy adjustment to changing temperatures.")
  break 
  case"Snowy":
  console.log("nsulating fabrics like fleece, down, or synthetic insulation for warmth." );
  
  break;
}


