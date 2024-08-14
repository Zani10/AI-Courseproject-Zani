import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Toast } from '@/components/ui/toast';
import { toast as triggerToast } from '@/components/ui/use-toast';
import { SelectBudgetOptions, SelectTypeTraveler } from '@/constants/options';
import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function PlanYourTrip() {
    const [destination, setDestination] = useState();

    const [tripDetails, setTripDetails] = useState({});

    const updateTripDetail = (key, value) => {
        setTripDetails((prevDetails) => ({
            ...prevDetails,
            [key]: value,
        }));
    };

    useEffect(() => {
        console.log(tripDetails);
    }, [tripDetails]);

    const handleTripGeneration = () => {
        if (
            !tripDetails?.location ||
            !tripDetails?.noOfDays ||
            !tripDetails?.budget ||
            !tripDetails?.people
        ) {
            triggerToast("Please fill in all the details.");
            return;
        }
        console.log(tripDetails);
    };

    return (
        <div className='sm:px10 md:px-32 lg:px-56 xl:px'>
            <h2 className='font-bold text-3xl'>Tailor Your Travel Adventure 🗺️🏝️</h2>
            <p className='mt-3 text-gray-500 text-xl'>
                Provide us with some information, and our AI will generate a personalized itinerary that fits your preferences and budget.
            </p>

            <div className='mt-20 flex flex-col gap-10'>
                <div>
                    <h2 className='text-xl my-3 font-medium'>Where do you want to go?</h2>
                    <GooglePlacesAutocomplete
                        apiKey={import.meta.env.VITE_GOOGLE_MAP_PLACE_API_KEY}
                        selectProps={{
                            value: destination,
                            onChange: (location) => {
                                setDestination(location);
                                updateTripDetail('location', location);
                            },
                        }}
                    />
                </div>

                <div>
                    <h2 className='text-xl my-3 font-medium'>How many days will your trip last?</h2>
                    <Input
                        placeholder='Days'
                        type='number'
                        min='1'
                        onChange={(e) => updateTripDetail('noOfDays', e.target.value)}
                    />
                </div>

                <div>
                    <h2 className='text-xl my-3 font-medium'>What's Your Budget Range?</h2>
                    <div className='grid grid-cols-3 gap-5 mt-5'>
                        {SelectBudgetOptions.map((option, idx) => (
                            <div
                                key={idx}
                                onClick={() => updateTripDetail('budget', option.title)}
                                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                                    tripDetails?.budget === option.title && 'shadow-lg border-black'
                                }`}
                            >
                                <h2 className='text-4xl'>{option.icon}</h2>
                                <h2 className='font-bold text-lg'>{option.title}</h2>
                                <h2 className='text-sm text-gray-500'>{option.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className='text-xl my-3 font-medium'>Who will be traveling with you?</h2>
                    <div className='grid grid-cols-3 gap-5 mt-5'>
                        {SelectTypeTraveler.map((option, idx) => (
                            <div
                                key={idx}
                                onClick={() => updateTripDetail('people', option.people)}
                                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                                    tripDetails?.people === option.people && 'shadow-lg border-black'
                                }`}
                            >
                                <h2 className='text-4xl'>{option.icon}</h2>
                                <h2 className='font-bold text-lg'>{option.title}</h2>
                                <h2 className='text-sm text-gray-500'>{option.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='my-10 justify-end flex'>
                <Button onClick={handleTripGeneration}>Generate Trip</Button>
            </div>
        </div>
    );
}

export default PlanYourTrip;
