import React from 'react';
import { Link } from 'react-router-dom';

function PlaceCardItem({ place }) {
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + place.placeName}
          target='_blank'>
      <div className='hover:scale-105 transition-transform cursor-pointer bg-white rounded-lg shadow-sm p-4 border border-gray-100'>
        <div className='flex gap-4'>
          <img src="/placeholder.jpg"
               className='w-[130px] h-[130px] rounded-md shadow-sm object-cover' alt={place.placeName} />
          <div>
            <h2 className='font-bold text-lg text-gray-800'>{place.placeName}</h2>
            <p className='text-sm text-gray-500 mt-2'>{place.placeDetails}</p>
            <h2 className='mt-3 text-sm text-blue-600'>🕒 {place.timeToTravel}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PlaceCardItem;
