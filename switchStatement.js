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
sign = prompt("Enter your Zodiac Sign:");

switch (sign) {
  case "Aries":
    console.log(
      "Your horoscope for thYou're feeling bold and energetic today, Aries! Take advantage of this burst of energy and tackle any challenges that come your way. Your determination and confidence will help you achieve your goals."
    );

    break;
  case "Gemini":
    console.log(
      "Your social calendar is likely to be full today, Gemini. You're in the mood for socializing and networking. Make new connections and engage in stimulating conversations. Keep an open mind."
    );

    break;

  case "Leo":
    console.log(
      "Your creativity is on fire today, Leo. Express yourself through your artistic pursuits and let your inner child come out to play. Your confidence and charisma will attract attention."
    );
    break;
  case "Virgo":
    console.log(
      "It's a good day for organizing and decluttering, Virgo. Clean up your physical space and tidy up your thoughts. Focus on practical matters and set achievable goals."
    );
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

    Note: Check the file called "Clothing_Recommendations.md" to find the list of weather forecasts and their corresponding clothing recommendations
Example:
  - What's the weather forecast for today? Rainy
  - Recommendations: Wear a waterproof jacket, boots, and bring an umbrella.
  ------------------------------------ 
  - What's the weather forecast for today? Sunny
  - Recommendations: Wear sunscreen, a hat, and sunglasses.
************************************************************************************************/
// TODO: ADD YOUR CODE BELOW
weatherForecast = prompt("What's the Weather Forecast Today?");

switch (weatherForecast) {
  case "sunny":
    console.log(
      "Recommendations: Wear a waterproof jacket, boots, and bring an umbrella."
    );
    break;
  case "cloudy":
    console.log("Recommendations: Wear sunscreen, a hat, and sunglasses.");
    break;

  case "rainy":
    console.log(
      "Recommendations: Wear a waterproof jacket, boots, and bring an umbrella."
    );
    break;
  case "snowy":
    console.log(
      "Recommendations: Wear Waterproof or water-resistant fabrics like Gore-Tex, nylon, or polyester to stay dry."
    );
  default:
}   console.log(
      "Sorry, we do not have recommendations for that weather condition."
    );
