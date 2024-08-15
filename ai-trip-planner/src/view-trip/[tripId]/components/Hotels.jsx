import React from 'react';
import { Link } from 'react-router-dom';
import HotelCardItem from './HotelCardItem';

function Hotels({ trip }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-blue-400 mt-10">
      <h2 className='font-extrabold text-2xl text-blue-500 mb-5'>Hotel Recommendations</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <HotelCardItem hotel={hotel}/>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
