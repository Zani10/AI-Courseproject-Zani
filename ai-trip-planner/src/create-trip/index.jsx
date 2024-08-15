import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTypeTraveler,
} from "@/constants/options";
import { chatSession } from "@/service/AI-Model";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { db } from "../service/firebaseConfig";
import { useNavigate} from "react-router-dom";

function PlanYourTrip() {
  const [destination, setDestination] = useState();

  const [tripDetails, setTripDetails] = useState({});

  const [openDialog, setOpenDialog] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate=useNavigate();

  const updateTripDetail = (key, value) => {
    setTripDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  useEffect(() => {
    console.log(tripDetails);
  }, [tripDetails]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const handleTripGeneration = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (
      (tripDetails?.noOfDays > 5 && !tripDetails?.location) ||
      !tripDetails?.budget ||
      !tripDetails?.people
    ) {
      toast("Please fill in all the details.");
      return;
    }
    

    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      tripDetails?.location?.label || "Unknown Location"
    )
      .replace("{totalDays}", tripDetails?.noOfDays || "1")
      .replace("{traveler}", tripDetails?.people || "1")
      .replace("{budget}", tripDetails?.budget || "Unknown Budget");
  
    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const tripData = await result?.response?.text();
      const parsedTripData = JSON.parse(tripData);
  
      console.log("--", parsedTripData);
      setLoading(false);
      SaveAiTrip(parsedTripData);
  
    } catch (error) {
      console.error("Error during trip generation:", error);
      setLoading(false);
      toast("Failed to generate trip. Please try again.");
    }
  };

  const SaveAiTrip = async (TripData) => {
    try {
      setLoading(true);
  
      const user = JSON.parse(localStorage.getItem("user"));
      const docId = Date.now().toString();
  
      const dataToSave = {
        userSelection: tripDetails,
        tripData: TripData,
        userEmail: user?.email,
        id: docId,
      };
  
      console.log("Data to save:", dataToSave);
  
      await setDoc(doc(db, "AITrips", docId), dataToSave);
  
      console.log("Trip saved successfully with ID:", docId);
      setLoading(false);
      
      navigate('/view-trip/'+docId)
      
    } catch (error) {
      console.error("Error saving trip to Firestore:", error);
      setLoading(false);
    }

    
  };

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        handleTripGeneration();
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-10">
    <h2 className="font-bold text-4xl text-center mb-8 text-gray-800 mt-20">Tailor Your Travel Adventure 🗺️🏝️</h2>
    <p className="text-center text-lg text-gray-600 mb-16">
        Provide us with some information, and our AI will generate a personalized itinerary that fits your preferences and budget.
    </p>

    <div className="grid gap-10 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Where do you want to go?</h2>
            <GooglePlacesAutocomplete
                apiKey={import.meta.env.VITE_GOOGLE_MAP_PLACE_API_KEY}
                selectProps={{
                    value: destination,
                    onChange: (location) => {
                        setDestination(location);
                        updateTripDetail("location", location);
                    },
                }}
                className="border rounded-md p-3 shadow-inner focus:ring-2 focus:ring-blue-400"
            />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">How many days will your trip last?</h2>
            <Input
                placeholder="Days"
                type="number"
                min="1"
                className="w-full border rounded-md p-3 shadow-inner focus:ring-2 focus:border-blue-500"
                onChange={(e) => updateTripDetail("noOfDays", e.target.value)}
            />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">What's Your Budget Range?</h2>
            <div className="grid grid-cols-3 gap-6">
                {SelectBudgetOptions.map((option, idx) => (
                    <div
                        key={idx}
                        onClick={() => updateTripDetail("budget", option.title)}
                        className={`p-6 bg-gray-50 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg ${
                            tripDetails?.budget === option.title && "border-2 border-orange-200"
                        }`}
                    >
                        <h2 className="text-5xl">{option.icon}</h2>
                        <h2 className="font-bold text-xl mt-2">{option.title}</h2>
                        <h2 className="text-sm text-gray-500">{option.desc}</h2>
                    </div>
                ))}
            </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Who will be traveling with you?</h2>
            <div className="grid grid-cols-3 gap-6">
                {SelectTypeTraveler.map((option, idx) => (
                    <div
                        key={idx}
                        onClick={() => updateTripDetail("people", option.people)}
                        className={`p-6 bg-gray-50 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg ${
                            tripDetails?.people === option.people && "border-2 border-orange-200"
                        }`}
                    >
                        <h2 className="text-5xl">{option.icon}</h2>
                        <h2 className="font-bold text-xl mt-2">{option.title}</h2>
                        <h2 className="text-sm text-gray-500">{option.desc}</h2>
                    </div>
                ))}
            </div>
        </div>
    </div>

    <div className="mt-16 text-center">
        <Button
            disabled={loading}
            className="bg-gradient-to-r from-orange-400 to-green-400 text-white py-3 px-12 rounded-full shadow-lg transform transition hover:scale-105"
            onClick={handleTripGeneration}>
            {loading ? (
                <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
            ) : (
                "Generate Trip"
            )}
        </Button>
    </div>


      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/trip.png" className="w-16 h-16 mb-4" />
              <h2 className="font-bold text-lg">Sign In With Google</h2>
              <p>Sign in to the App with Google authentication securely</p>
              <Button
                disabled={loading}
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-7 w-7" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PlanYourTrip;
