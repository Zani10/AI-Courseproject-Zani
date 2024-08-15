import React from 'react';

function Hotels({ trip }) {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5 text-gray-800'>Hotel Recommendations</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-6'>
  {trip?.tripData?.hotels?.map((hotel, index) => (
    <div 
      key={hotel?.id || index} 
      className='hover:scale-105 transition-transform cursor-pointer bg-white rounded-lg shadow-sm p-4 border border-gray-100'>
      <img src="/placeholder.jpg" className='rounded-md shadow-sm w-full h-48 object-cover' alt="Hotel" />
      <div className='mt-2 flex flex-col gap-1'>
        <h2 className='font-medium text-gray-700'>{hotel?.hotelName}</h2>
        <h2 className='text-xs text-gray-500'>📍{hotel?.hotelAddress}</h2>
        <h2 className='text-sm text-green-500'>💰{hotel?.price}</h2>
        <h2 className='text-sm text-yellow-500'>⭐{hotel?.rating}</h2>
      </div>
    </div>
  ))}
</div>


    </div>
  )
}

export default Hotels;
