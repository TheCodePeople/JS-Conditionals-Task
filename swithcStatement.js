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
  case "aries":
    console.log(
      "Your horoscope for the day: You may encounter some challenges today, but don't be discouraged. Stay focused and determined to overcome them."
    );
    break;
  case "taurus":
    console.log(
      "Your horoscope for the day: It's a good day for financial matters. Keep an eye out for opportunities to improve your financial situation."
    );
    break;
  case "gemini":
    console.log(
      "Your horoscope for the day: You may feel like you are in a rut today. Try doing something out of your comfort zone to break the monotony."
    );
    break;
  case "cancer":
    console.log(
      "Your horoscope for the day: Focus on your emotional well-being today. Spend time with loved ones and take care of yourself."
    );
    break;
  case "leo":
    console.log(
      "Your horoscope for the day: You may receive recognition or praise for your achievements today. Use this positive energy to further your goals."
    );
    break;
  case "virgo":
    console.log(
      "Your horoscope for the day: It's a good day for organizing and planning. Take some time to prioritize your tasks and get things done."
    );
    break;
  case "libra":
    console.log(
      "Your horoscope for the day: Pay attention to your relationships today. Strive for balance and harmony in your interactions with others."
    );
    break;
  case "scorpio":
    console.log(
      "Your horoscope for the day: You will have a pleasant surprise today in your career. Keep an open mind and seize the opportunity."
    );
    break;
  case "sagittarius":
    console.log(
      "Your horoscope for the day: It's a good day for adventure and exploration. Embrace new experiences and broaden your horizons."
    );
    break;
  case "capricorn":
    console.log(
      "Your horoscope for the day: Focus on your long-term goals and be disciplined in your efforts. Hard work will pay off in the end."
    );
    break;
  case "aquarius":
    console.log(
      "Your horoscope for the day: You may feel inspired to make a difference in the world. Follow your passions and take action towards your goals."
    );
    break;
  case "pisces":
    console.log(
      "Your horoscope for the day: Listen to your intuition and trust your instincts today. Your inner wisdom will guide you in the right direction."
    );
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
  - What's the weather forecast for today? Rainy
  - Recommendations: Wear a waterproof jacket, boots, and bring an umbrella.
  ------------------------------------ 
  - What's the weather forecast for today? Sunny
  - Recommendations: Wear sunscreen, a hat, and sunglasses.
************************************************************************************************/
// TODO: ADD YOUR CODE BELOW
let forecastedWeather = prompt(
  "Hello user! What's the weather forecast for today? choose one of these options (sunny, cloudy, rainy, snowy)"
).toLowerCase();
switch (forecastedWeather) {
  case "sunny":
    console.log(
      "1. Choose lightweight cotton, linen, rayon, chambray, or silk fabrics for breathability and comfort. \n2. Opt for light colors and loose-fitting styles to reflect heat and allow air circulation. \n3. Wear appropriate sun protection, such as a wide-brimmed hat and sunglasses, and apply sunscreen. \n4. Stay hydrated and enjoy the sunny weather in comfortable and breathable clothes!"
    );
    break;
  case "rainy":
    console.log(
      "1. Choose waterproof or water-resistant fabrics like polyester, nylon, or Gore-Tex for maximum protection. \n2. Synthetic blends are also a good option for their water-repelling properties. \n3. Avoid absorbent fabrics like cotton or silk that can become heavy when wet. \n4. Consider treated fabrics that are coated with a water-repellent finish.\n5. Pair rain gear with appropriate footwear and rain accessories as needed to stay dry in rainy weather."
    );
    break;
  case "cloudy":
    console.log(
      "1. Layer with lightweight knits, fleece, or flannel for easy adjustment to changing temperatures. \n2. Choose breathable fabrics like cotton, bamboo, or modal for comfort. \n3. Opt for moisture-wicking fabrics like polyester or nylon to stay dry in light drizzle or humidity. \n4. Consider fabrics with stretch for flexibility and comfort during activities. \n5. Don't forget to have a light jacket or coat made of weather-resistant materials for added protection from wind or light rain. \n Being prepared with versatile fabrics and layering options can help you stay comfortable in changing weather conditions during cloudy days!"
    );
    break;
  case "snowy":
    console.log(
      "1. Insulating fabrics like fleece, down, or synthetic insulation for warmth. \n2. Waterproof or water-resistant fabrics like Gore-Tex, nylon, or polyester to stay dry. \n3. Moisture-wicking fabrics like polyester or merino wool to keep you dry. \n4. Layering fabrics such as thermal knits, fleece, or merino wool for insulation. \n5. Windproof fabrics like nylon or softshell materials for protection from wind chill. \nPrioritize warmth, insulation, moisture management, and wind protection when dressing for snowy weather, and be sure to layer appropriately to stay warm and dry in snowy conditions! "
    );
    break;
  default:
    console.log(
      "Sorry, we do not have recommendations for that weather condition"
    );
    break;
}
