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
//console.log("Scorpio , Gemini ");
let zodiac=prompt("enter the tower  (Scorpio , Gemini)");

switch(zodiac)
{ 
  case 'Scorpio':  console.log (" You will have a pleasant surprise today in your career  ");
  break;

  case 'Gemini': console.log(" You may feel like you are in a rut today. Try doing something out of your comfor");
  break;  

  default:
    console.log("Sorry, we do not have a horoscope for that sign.");
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
  - What's the weather forecast for today? Rainy.
  - Recommendations: Wear a waterproof jacket, boots, and bring an umbrella
  ------------------------------------ 
  - What's the weather forecast for today? Sunny
  - Recommendations: Wear sunscreen, a hat, and sunglasses.
************************************************************************************************/
// TODO: ADD YOUR CODE BELOW
//console.log("Rainy , Sunny , Cloidy , Snowy ")
let weather=prompt("enter the forecasted weather for the day (Rainy , Sunny , Cloidy , Snowy)");

switch(weather)
{
case 'Rainy': console.log(" Wear a waterproof jacket, boots, and bring an umbrella") ;
break;

case 'Sunny':console.log("Wear sunscreen, a hat, and sunglasses");
break;

case  'Cloudy': console.log("Beware, there is a possibility of rain");
break;

case 'Snowy': console.log("Wear plenty of clothes, it's cold");
break;
default :console.log(weather);
}