import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { IoIosSend } from "react-icons/io";
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';


function InfoSection({ trip }) {

  const [PhotoUrl, setPhotoUrl]=useState();
  useEffect(()=>{
    trip&&GetPlacePhoto();
  }, [trip])

  const GetPlacePhoto=async()=> {
    const data={
      textQuery:trip?.userSelection?.location?.label
    }

    const result=await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[3].name)

      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl)
    })
  }
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-orange-400 mt-20">
  <img src={PhotoUrl?PhotoUrl:"/placeholder.jpg"} className='h-[360px] w-full object-cover rounded-md shadow-lg' alt="Location" />
  <div className='flex justify-between items-center mt-6'>
    <div className='my-5 flex flex-col gap-3'>
      <h2 className='font-extrabold text-4xl text-orange-400'>{trip?.userSelection?.location?.label}</h2>
      <div className='flex gap-6'>
        <h2 className='p-2 px-4 bg-blue-100 rounded-full text-blue-600 text-md shadow-sm'>📅 {trip.userSelection?.noOfDays} Day</h2>
        <h2 className='p-2 px-4 bg-green-100 rounded-full text-green-600 text-md shadow-sm'>💶 {trip.userSelection?.budget} Budget</h2>
        <h2 className='p-2 px-4 bg-yellow-100 rounded-full text-yellow-600 text-md shadow-sm'>👨‍👩‍👧 Number Of Travelers: {trip.userSelection?.people}</h2>
      </div>
    </div>
    <Button className="bg-gradient-to-r from-orange-400 to-green-400 text-white rounded-full shadow-lg p-3"><IoIosSend className="text-2xl" /></Button>
  </div>
</div>

  )
}

export default InfoSection;
