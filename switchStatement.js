/************************************************************************************************
Task 5 (Switch Statement): (20 pts)
    Write a program that takes in a user's zodiac sign and outputs a horoscope for the day.

Example:
  - Enter your zodiac sign: Scorpio
  - Your horoscope for the day: You will have a pleasant surprise today in your career.
  ------------------------------------ 
  - Enter your zodiac sign: Gemini
  - Your horoscope for the day: You may feel like you are in a rut today. Try doing something out of your comfort zone to break the monotony.

Steps:
  1. Create a variable named `zodiacSign` and assign its value to a zodiac sign of your choice.
  2. Create a switch statement that checks the value of the sign.
    - For each case, write a horoscope message for that sign for the day.
    - If the user enters a sign that is not recognized by the switch statement, display an error message saying "Sorry, we do not have a horoscope for that sign."

*Note: Check the file called "Zodiac_Signs.md" to find the list of horoscope messages.*  
************************************************************************************************/
//  TODO: ADD YOUR CODE BELOW

// let zodiacSign = "Virgo";

// switch (zodiacSign.toLowerCase()) {
//   case "aries":
//     console.log("(March 21 - April 19):\nHoroscope: You're feeling bold and energetic today, Aries! Take advantage of this burst of energy and tackle any challenges that come your way. Your determination and confidence will help you achieve your goals.");
//     break;
//   case "taurus":
//     console.log("(April 20 - May 20):\nHoroscope: It's a good day to focus on your financial matters, Taurus. Take a look at your budget and make any necessary adjustments. Avoid impulsive spending and save for the future.");
//     break;
//   case "gemini":
//     console.log("(May 21 - June 20):\nHoroscope: Your social calendar is likely to be full today, Gemini. You're in the mood for socializing and networking. Make new connections and engage in stimulating conversations. Keep an open mind.");
//     break;
//   case "cancer":
//     console.log("(June 21 - July 22):\nHoroscope: It's time to take care of yourself, Cancer. Pay attention to your emotional well-being and prioritize self-care. Take a break from your usual routine and indulge in some self-nurturing activities.");
//     break;
//   case "leo":
//     console.log("(July 23 - August 22):\nHoroscope: Your creativity is on fire today, Leo. Express yourself through your artistic pursuits and let your inner child come out to play. Your confidence and charisma will attract attention.");
//     break;
//   case "virgo":
//     console.log("(August 23 - September 22):\nHoroscope: It's a good day for organizing and decluttering, Virgo. Clean up your physical space and tidy up your thoughts. Focus on practical matters and set achievable goals.");
//     break;
//   case "libra":
//     console.log("(September 23 - October 22):\nHoroscope: Your diplomacy and charm are in full force today, Libra. Use your skills to resolve conflicts and bring harmony to your relationships. Seek balance and fairness in all your interactions.");
//     break;
//   case "scorpio":
//     console.log("(October 23 - November 21):\nHoroscope: Your intuition is heightened today, Scorpio. Trust your instincts and delve into your emotions. Explore your subconscious mind and gain insights into your inner workings.");
//     break;
//   case "sagittarius":
//     console.log("(November 22 - December 21):\nHoroscope: You're in the mood for adventure, Sagittarius. Plan a trip or explore new possibilities. Your optimism and enthusiasm will inspire others, and you may learn something new.");
//     break;
//   case "capricorn":
//     console.log("(December 22 - January 19):\nHoroscope: It's time to focus on your career goals, Capricorn. Set clear objectives and work diligently towards achieving them. Your hard work and determination will pay off in the long run.");
//     break;
//   case "aquarius":
//     console.log("(January 20 - February 18):\nHoroscope: Your humanitarian side is in the spotlight today, Aquarius. Engage in activities that promote social causes and make a positive impact. Connect with like-minded individuals and share your innovative ideas.");
//     break;
//   case "pisces":
//     console.log("(February 19 - March 20):\nHoroscope: Your sensitivity and intuition are heightened today, Pisces. Pay attention to your dreams and emotions, as they may hold important messages for you. Take some time for self-reflection and introspection.");
//     break;
// }

/************************************************************************************************
Task 6 (Switch Statement): (20 pts)
    Create a program that helps you decide what to wear based on the weather forecast for the day.

Steps:
  1. Create a variable named `weather` and assign its value to forecasted weather for the day (e.g. sunny, cloudy, rainy, snowy).
  2. Create a switch statement that checks the value of weather.
    - For each case, write a message recommending appropriate clothing for that weather condition.
    - If the user enters a weather condition that is not recognized by the switch statement, display an error message saying "Sorry, we do not have recommendations for that weather condition."

Example:
  - What's the weather forecast for today? Rainy
  - Recommendations: Wear a waterproof jacket, boots, and bring an umbrella.
  ------------------------------------
  - What's the weather forecast for today? Sunny
  - Recommendations: Wear sunscreen, a hat, and sunglasses.

*Note: Check the file called "Clothing_Recommendations.md" to find the list of weather forecasts and their corresponding clothing recommendations.*
************************************************************************************************/
//  TODO: ADD YOUR CODE BELOW

let weather = "sunny";
let recommendations = "";
switch (weather) {
  case "sunny":
    recommendations = "Recommendations:\n1. Choose lightweight cotton, linen, rayon, chambray, or silk fabrics for breathability and comfort.\n2. Opt for light colors and loose - fitting styles to reflect heat and allow air circulation.\n3. Wear appropriate sun protection, such as a wide - brimmed hat and sunglasses, and apply sunscreen.\n4. Stay hydrated and enjoy the sunny weather in comfortable and breathable clothes!";
    console.log(recommendations);
    break;
  case "rainy":
    recommendations = "Recommendations:\n1. Choose waterproof or water-resistant fabrics like polyester, nylon, or Gore-Tex for maximum protection.\n2. Synthetic blends are also a good option for their water-repelling properties.\n3. Avoid absorbent fabrics like cotton or silk that can become heavy when wet.\n4. Consider treated fabrics that are coated with a water-repellent finish.\n5. Pair rain gear with appropriate footwear and rain accessories as needed to stay dry in rainy weather.";
    console.log(recommendations);
    break;
  case "cloudy":
    recommendations = "1. Layer with lightweight knits, fleece, or flannel for easy adjustment to changing temperatures.\n2. Choose breathable fabrics like cotton, bamboo, or modal for comfort.\n3. Opt for moisture-wicking fabrics like polyester or nylon to stay dry in light drizzle or humidity.\n4. Consider fabrics with stretch for flexibility and comfort during activities.\n5. Don't forget to have a light jacket or coat made of weather-resistant materials for added protection from wind or light rain. Being prepared with versatile fabrics and layering options can help you stay comfortable in changing weather conditions during cloudy days!";
    console.log(recommendations);
    break;
  case "snowy":
    recommendations = "Recommendations:\n1. Insulating fabrics like fleece, down, or synthetic insulation for warmth.\n2. Waterproof or water-resistant fabrics like Gore-Tex, nylon, or polyester to stay dry.\n3. Moisture-wicking fabrics like polyester or merino wool to keep you dry.\n4. Layering fabrics such as thermal knits, fleece, or merino wool for insulation.\n5. Windproof fabrics like nylon or softshell materials for protection from wind chill. Prioritize warmth, insulation, moisture management, and wind protection when dressing for snowy weather, and be sure to layer appropriately to stay warm and dry in snowy conditions!";
    console.log(recommendations);
    break;

}