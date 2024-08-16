import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCard({hotel}) {

    const [photoUrl, setPhotoUrl]=useState();
        useEffect(()=>{
        hotel&&GetPlacePhoto();
    }, [hotel])

  const GetPlacePhoto=async()=> {
    const data={
      textQuery:hotel?.hotelName
    }

    const result=await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[3].name)

      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    })
  }
  return (
    <Link 
        to={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotelName+","+hotel?.hotelAddress} 
        target='_blank'
    >
        <div 
            className='hover:scale-105 transition-transform cursor-pointer bg-white rounded-lg shadow-sm p-4 border border-gray-100'>
            <img src={photoUrl?photoUrl:"/placeholder.jpg"} className='rounded-md shadow-sm w-full h-48 object-cover' alt="Hotel" />
                <div className='mt-2 flex flex-col gap-1'>
                    <h2 className='font-medium text-gray-700'>{hotel?.hotelName}</h2>
                    <h2 className='text-xs text-gray-500'>📍{hotel?.hotelAddress}</h2>
                    <h2 className='text-sm text-green-500'>💰{hotel?.price}</h2>
                    <h2 className='text-sm text-yellow-500'>⭐{hotel?.rating}</h2>
                </div>
        </div>
  </Link>
  )
}

export default HotelCard