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
  
  export const AI_PROMPT = `
  Generate a travel plan for the location {location} for {totalDays} days for {traveler} people with a {budget} budget. 
  Return the result in JSON format with the following structure, ensuring that all keys are in camelCase:

  {
    "hotels": [
      {
        "hotelName": "string",
        "hotelAddress": "string",
        "price": "string",
        "hotelImageUrl": "string",
        "geoCoordinates": "string",
        "rating": "string",
        "descriptions": "string"
      }
    ],
    "itinerary": [
      {
        "day": "string",
        "plan": [
          {
            "placeName": "string",
            "placeDetails": "string",
            "placeImageUrl": "string",
            "geoCoordinates": "string",
            "ticketPricing": "string",
            "rating": "string",
            "time": "string", // Format should be "9:00 AM - 11:00 AM"
            "timeToTravel": "string" // Format should be "30 minutes"
          }
        ],
        "bestTimeToVisit": "string"
      }
    ]
  }
`;

  