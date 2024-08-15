import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-green-400 mt-10">
      <h2 className='font-extrabold text-2xl text-green-500 mb-5'>Places To Visit</h2>

      <div>
        {trip.tripData?.itinerary?.map((item, index) => (
          <div key={index} className='mt-8'>
            <h2 className='font-semibold text-xl text-green-600 mb-4'>{item.day}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              {item.plan?.map((place, placeIndex) => (
                <div key={placeIndex} className=''>
                  <h2 className='font-semibold text-sm text-orange-600 mb-2'>{place.time}</h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
