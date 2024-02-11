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
let zodiacSign= "Aquarius"
switch(zodiacSign){
  case "Aries" :console.log(`(March 21 - April 19):
    Horoscope: You're feeling bold and energetic today, Aries! Take advantage of this burst of energy and tackle any challenges that come your way. Your determination and confidence will help you achieve your goals.`);
break
case "Taurus" : console.log(`(April 20 - May 20):
  Horoscope: It's a good day to focus on your financial matters, Taurus. Take a look at your budget and make any necessary adjustments. Avoid impulsive spending and save for the future.`);
break
case "Gemini" :console.log(`(May 21 - June 20):
  Horoscope: Your social calendar is likely to be full today, Gemini. You're in the mood for socializing and networking. Make new connections and engage in stimulating conversations. Keep an open mind.`)
  ;
  break
  case "Cancer" :console.log(`(June 21 - July 22):
    Horoscope: It's time to take care of yourself, Cancer. Pay attention to your emotional well-being and prioritize self-care. Take a break from your usual routine and indulge in some self-nurturing activities.`);
    break
  case "Leo" : console.log(`(July 23 - August 22):
    Horoscope: Your creativity is on fire today, Leo. Express yourself through your artistic pursuits and let your inner child come out to play. Your confidence and charisma will attract attention.`);
    break
    case "Virgo" : console.log(`(August 23 - September 22):
      Horoscope: It's a good day for organizing and decluttering, Virgo. Clean up your physical space and tidy up your thoughts. Focus on practical matters and set achievable goals.`);
    break   
  case "Libra" :console.log(` (September 23 - October 22):
    Horoscope: Your diplomacy and charm are in full force today, Libra. Use your skills to resolve conflicts and bring harmony to your relationships. Seek balance and fairness in all your interactions.
 `);
 break
 case "Scorpio" :console.log(`(October 23 - November 21):
  Horoscope: Your intuition is heightened today, Scorpio. Trust your instincts and delve into your emotions. Explore your subconscious mind and gain insights into your inner workings.`);
  break
  case "Sagittarius" : console.log(`(November 22 - December 21):
    Horoscope: You're in the mood for adventure, Sagittarius. Plan a trip or explore new possibilities. Your optimism and enthusiasm will inspire others, and you may learn something new.`
 );
 break
 case "Capricorn":console.log(`(December 22 - January 19):
  Horoscope: It's time to focus on your career goals, Capricorn. Set clear objectives and work diligently towards achieving them. Your hard work and determination will pay off in the long run.
`);
break 
case "Aquarius" :console.log(`(January 20 - February 18):
  Horoscope: Your humanitarian side is in the spotlight today, Aquarius. Engage in activities that promote social causes and make a positive impact. Connect with like-minded individuals and share your innovative ideas.
`);
break
case "Pisces":`(February 19 - March 20):
  Horoscope: Your sensitivity and intuition are heightened today, Pisces. Pay attention to your dreams and emotions, as they may hold important messages for you. Take some time for self-reflection and introspection.
`
default:console.log("Sorry, we do not have a horoscope for that sign."); }
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
let weather=`sunny`
switch (weather) {
  case `sunny`:console.log(`What's the weather forecast for today? Sunny 
  It is recommended to wear light, colorful clothing to avoid the sun's rays`);
    
    break;

    case `coludy`:console.log(`What's the weather forecast for today?cooludy
    It is recommended to wear thick clothes `);

    break
    case `rainy`:console.log(`What's the weather forecast for today?rainy
    It is recommended to take an umbrella when going out `);
    break
    case `snowy`:console.log(`What's the weather forecast for today?snowey
    It is recommended to wear snowresistant clothing`);
    break
  default:console.log("Sorry, we do not have recommendations for that weather condition.");
    ;
}


