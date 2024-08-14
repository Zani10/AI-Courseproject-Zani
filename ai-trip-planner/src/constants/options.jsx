export const SelectTypeTraveler = [
    {
      id: 1,
      title: 'Solo Adventure',
      desc: 'A lone explorer on a journey',
      icon: '🤸',
      people: '1',
    },
    {
      id: 2,
      title: 'Couple Getaway',
      desc: 'Two travelers enjoying together',
      icon: '🥂',
      people: '2 People',
    },
    {
      id: 3,
      title: 'Family Fun',
      desc: 'A group of joyful adventurers',
      icon: '🏡',
      people: '3 to 5 People',
    },
    {
      id: 4,
      title: 'Friends Trip',
      desc: 'A crew of thrill-seekers',
      icon: '⛵',
      people: '4+ People',
    }
  ];
  
  export const SelectBudgetOptions = [
    {
      id: 1,
      title: 'Cheap',
      desc: 'Keep your expenses low',
      icon: '💵',
    },
    {
      id: 2,
      title: 'Balanced',
      desc: 'Spend moderately',
      icon: '💰',
    },
    {
      id: 3,
      title: 'Luxury',
      desc: 'Indulge without limits',
      icon: '💸',
    }
  ];
  
  export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} people with a {budget} budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.';
  