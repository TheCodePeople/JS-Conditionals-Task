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
let sign = prompt("Enter Your Zodiac Sign");
let horoscope;
switch(sign.toLowerCase())
{
  case "Aries".toLowerCase():
horoscope="Today, you will crave total freedom in whatever you are doing, says Ganesha. And sheer entertainment is on the cards for "
"teenyboppers, like mall-hopping or going for a film. The kids will demand a Jumbo Berry ice cone. All in all, it will be a family day for you.";
    break;
  case "Taurus".toLowerCase():
    horoscope="It has been predicted that Saturn, Rahu, and Jupiter will all play an important role in careers this year. This year, a positive"
    " attitude, patience, perseverance, and research will be the keywords that will come into play. In the first quarter of this year, it is"
    " suggested that you maintain patience and avoid being aggressive so that your plans can be carried out. For getting Saturn’s blessing to get"
    " expected business success, it will require you to have persistence, as well as avoid negative comments and thoughts. The Sun, at the "
    "beginning of the year, can give some delay in getting the boss' and senior's favor. Those of you who want to play/start a career as a player"
    " at the international level will also be able to achieve the expected result. The year 2023 may also be advantageous in terms of promotion"
    " and the new job";
    break;
    case "Gemini".toLowerCase():
      horoscope="You will find yourself caught in two minds repeatedly, owing to your unpredictable mood swings. This will be the cause of a lot of mental stress.";
    
    break;
    case "Cancer".toLowerCase():
      horoscope="A day to indulge in fantasy. Your ideas will be fantastic.Your status and prestige go up. People will praise your efforts";
      break;
    case "Leo".toLowerCase():
        horoscope="You will relentlessly try to find means to progress at the workplace today. You will remain steadfast in your resolutions."
        " You will not allow those working under you to slack. You will need to let go of your inhibitions and fears to be happy in life. You"
        " will receive the benifice of highly placed superiors, says Ganesha.";
      break;
    case "Virgo".toLowerCase():
          horoscope="Confidently take on the challenges that in all likelihood will test your business abilities, especially the ones that are"
          " related to your investments and monetary matters. You will most probably come up with novel ideas to solve long-pending issues, and "
          "Ganesha says that this will be very effective.";
      break;

          case "Libra".toLowerCase():
          horoscope="Ganesha says that you will be busy in your work field today and will be able to attain your goals in your work field today."
          "Your level of enthusiasm will be at its peak. Today you may be able to meet with a person from the opposite sex who will be your "
          "future partner. Ganesha showers you with his blessings always.";
          break;

          case "Scorpius".toLowerCase():
          horoscope="You are a visionary and today you work towards building a successful future. But, expecting an instant result would be unfair. You need to have patience to bring in those dynamic changes in your life. Wait and watch, the patience would reap sweet fruits!";
          break;


          case "Sagittarius".toLowerCase():
          horoscope="The cloud of worries is likely to keep you gloomy today. Try to burst that cloud, and take a decision that would help you to solve your troubles. There may be some delay, if you want the situation to get back to normal. However, as Ganesha says, you would be the one who would benefit at the end of the day!The cloud of worries is likely to keep you gloomy today. Try to burst that cloud, and take a decision that would help you to solve your troubles. There may be some delay, if you want the situation to get back to normal. However, as Ganesha says, you would be the one who would benefit at the end of the day!";
          break;


          case "Capricornus".toLowerCase():
          horoscope="You want to enhance your knowledge by exploring foreign shores, but luck hasn't favoured you yet. Ganesha predicts today to be a favourable day for you to try again for higher studies.If associated with the Stock Market or speculation, you are likely to make profits. You will come across many opportunities, but you need to identify and explore them to the fullest.";
          break;

          case "Aquarius".toLowerCase():
          horoscope="Are you facing a roadblock in your path? Make a minor change in your route, you will find a smooth and clear road once again, advises Ganesha. The efforts you have made in the past will come to fruition, today. Don't get satisfied with your current achievements, you still have a long way to keep working hard.";
          break;

          case "Pisces".toLowerCase():
          horoscope="Do not commit yourself to any large investments today. It is best to avoid speculative activities. For those who have a job, the co-operation of your colleagues will help you progress, says Ganesha.";
          break;
      default:
        alert("لا يوجد برج بهذا الاسم")

}
alert("توقعات البرج الخاص بك هي" +"\n" + horoscope);
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
let weatherValues=["clear_sky","few_clouds","scattered_clouds","broken_clouds","shower_rain","rain","thunderstorm","snow"];
let weather=prompt("ما هو الطقس الذي سوف تخرج فيه");
switch(weather)
{
case weatherValues[0]:
alert("جو صافي البس اي شي");
break;
case weatherValues[1]:
alert("احذر قد تكون هناك امطار");
break;
case weatherValues[2]:
alert("احذر قد تكون هناك امطار");
break;
case weatherValues[3]:
alert("احذر قد تكون هناك امطار");
break;
case weatherValues[4]:
alert("البس ملابس مطرية مع مظلة فالجو ممطر");
break;
case weatherValues[5]:
alert("البس ملابس مطرية مع مظلة فالجو ممطر");
break;
case weatherValues[6]:
alert("يفضل عدم الخروج هناك عواصف رعدية");
break;
case weatherValues[7]:
alert("نزول للثلج اخرج و ارتدي ملابس سميكة");
break;
default :
alert("حدد احد الخيارات الممكنة ");
}
