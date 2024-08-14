import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

export const chatSession = model.startChat({
      generationConfig,
   
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"hotels\": [{\"HotelName\": \"The D Las Vegas\", \"Hotel address\": \"301 Fremont Street, Las Vegas, NV 89101\", \"Price\": \"$50-$100\", \"hotel image url\": \"https://images.trvl-media.com/media/content/hotels/17/35/173526a_z.jpg\", \"geo coordinates\": \"36.1699,-115.1421\", \"rating\": \"4.0\", \"descriptions\": \"A downtown Las Vegas hotel with a retro vibe, offering a casino, live music, and a rooftop pool.\"}, {\"HotelName\": \"Golden Nugget Las Vegas\", \"Hotel address\": \"129 E Fremont St, Las Vegas, NV 89101\", \"Price\": \"$70-$150\", \"hotel image url\": \"https://images.trvl-media.com/media/content/hotels/14/67/146796a_z.jpg\", \"geo coordinates\": \"36.1694,-115.1427\", \"rating\": \"4.5\", \"descriptions\": \"A historic hotel on Fremont Street with a casino, multiple restaurants, a pool, and a shark tank.\"}, {\"HotelName\": \"Plaza Hotel & Casino\", \"Hotel address\": \"1 Main St, Las Vegas, NV 89101\", \"Price\": \"$60-$120\", \"hotel image url\": \"https://images.trvl-media.com/media/content/hotels/15/14/151447a_z.jpg\", \"geo coordinates\": \"36.1698,-115.1428\", \"rating\": \"4.0\", \"descriptions\": \"A downtown hotel with a casino, a pool, and multiple restaurants, known for its affordable prices.\"}, {\"HotelName\": \"The Orleans Hotel & Casino\", \"Hotel address\": \"4500 W Tropicana Ave, Las Vegas, NV 89103\", \"Price\": \"$40-$80\", \"hotel image url\": \"https://images.trvl-media.com/media/content/hotels/13/54/135465a_z.jpg\", \"geo coordinates\": \"36.0992,-115.1993\", \"rating\": \"3.5\", \"descriptions\": \"A large hotel and casino located on the Strip, with a wide range of amenities including multiple pools, restaurants, and entertainment.\"}, {\"HotelName\": \"Circus Circus Hotel & Casino\", \"Hotel address\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\", \"Price\": \"$30-$60\", \"hotel image url\": \"https://images.trvl-media.com/media/content/hotels/14/49/144967a_z.jpg\", \"geo coordinates\": \"36.0947,-115.1722\", \"rating\": \"3.0\", \"descriptions\": \"A budget-friendly hotel known for its circus-themed attractions, a casino, and a variety of dining options.\"}], \"itinerary\": [{\"Day\": \"Day 1\", \"Plan\": [{\"placeName\": \"Fremont Street Experience\", \"Place Details\": \"A pedestrian mall with a canopy of lights, live music, and street performers.\", \"Place Image Url\": \"https://www.vegasexperience.com/wp-content/uploads/2017/10/Fremont-Street-Experience-Las-Vegas.jpg\", \"Geo Coordinates\": \"36.1699,-115.1421\", \"ticket Pricing\": \"Free\", \"rating\": \"4.5\", \"Time\": \"Afternoon\"}, {\"placeName\": \"The Mob Museum\", \"Place Details\": \"A museum dedicated to the history of organized crime in the United States.\", \"Place Image Url\": \"https://www.themobmuseum.org/sites/default/files/styles/full_width/public/2022-09/The-Mob-Museum-Las-Vegas-Exterior.jpg\", \"Geo Coordinates\": \"36.1693,-115.1429\", \"ticket Pricing\": \"$25\", \"rating\": \"4.0\", \"Time\": \"Evening\"}], \"Best Time To Visit\": \"Afternoon and Evening\"}, {\"Day\": \"Day 2\", \"Plan\": [{\"placeName\": \"Bellagio Conservatory & Botanical Garden\", \"Place Details\": \"A stunning display of flowers and plants, changing seasonally.\", \"Place Image Url\": \"https://www.bellagio.com/content/dam/mgmresorts/bellagio/images/experiences/conservatory/conservatory-botanical-gardens.jpg\", \"Geo Coordinates\": \"36.1136,-115.1743\", \"ticket Pricing\": \"Free\", \"rating\": \"4.5\", \"Time\": \"Morning\"}, {\"placeName\": \"High Roller Observation Wheel\", \"Place Details\": \"A giant Ferris wheel offering panoramic views of the Strip.\", \"Place Image Url\": \"https://www.thelinq.com/sites/default/files/styles/image_full_width_crop/public/2023-02/HighRoller_01_950x560.jpg\", \"Geo Coordinates\": \"36.1098,-115.1713\", \"ticket Pricing\": \"$35\", \"rating\": \"4.0\", \"Time\": \"Afternoon\"}], \"Best Time To Visit\": \"Morning and Afternoon\"}, {\"Day\": \"Day 3\", \"Plan\": [{\"placeName\": \"Red Rock Canyon National Conservation Area\", \"Place Details\": \"A scenic desert landscape with hiking trails and rock formations.\", \"Place Image Url\": \"https://www.nps.gov/redr/learn/nature/images/RedRockCanyon_2017_11.jpg\", \"Geo Coordinates\": \"36.2011,-115.2739\", \"ticket Pricing\": \"$15\", \"rating\": \"4.5\", \"Time\": \"Morning\"}, {\"placeName\": \"Hoover Dam\", \"Place Details\": \"A historic dam located on the Colorado River.\", \"Place Image Url\": \"https://www.nps.gov/hdam/learn/nature/images/hoover-dam-2008090911420000_med.jpg\", \"Geo Coordinates\": \"36.0217,-114.9934\", \"ticket Pricing\": \"Free\", \"rating\": \"4.0\", \"Time\": \"Afternoon\"}], \"Best Time To Visit\": \"Morning and Afternoon\"}]}\n\n```"},
          ],
        },
      ],
    });