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

function PlanYourTrip() {
  const [destination, setDestination] = useState();

  const [tripDetails, setTripDetails] = useState({});

  const [openDialog, setOpenDialog] = useState(false);

  const [loading, setLoading] = useState(false);

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
      tripDetails?.location?.label
    )
      .replace("{totalDays}", tripDetails?.noOfDays)
      .replace("{traveler}", tripDetails?.people)
      .replace("{budget}", tripDetails?.budget);

    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log("--", result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text());
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
    <div className="sm:px10 md:px-32 lg:px-56 xl:px">
      <h2 className="font-bold text-3xl">Tailor Your Travel Adventure 🗺️🏝️</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Provide us with some information, and our AI will generate a
        personalized itinerary that fits your preferences and budget.
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">Where do you want to go?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_MAP_PLACE_API_KEY}
            selectProps={{
              value: destination,
              onChange: (location) => {
                setDestination(location);
                updateTripDetail("location", location);
              },
            }}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days will your trip last?
          </h2>
          <Input
            placeholder="Days"
            type="number"
            min="1"
            onChange={(e) => updateTripDetail("noOfDays", e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            What's Your Budget Range?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((option, idx) => (
              <div
                key={idx}
                onClick={() => updateTripDetail("budget", option.title)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                  tripDetails?.budget === option.title &&
                  "shadow-lg border-black"
                }`}
              >
                <h2 className="text-4xl">{option.icon}</h2>
                <h2 className="font-bold text-lg">{option.title}</h2>
                <h2 className="text-sm text-gray-500">{option.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            Who will be traveling with you?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTypeTraveler.map((option, idx) => (
              <div
                key={idx}
                onClick={() => updateTripDetail("people", option.people)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                  tripDetails?.people === option.people &&
                  "shadow-lg border-black"
                }`}
              >
                <h2 className="text-4xl">{option.icon}</h2>
                <h2 className="font-bold text-lg">{option.title}</h2>
                <h2 className="text-sm text-gray-500">{option.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10 justify-end flex">
        <Button
          disabled={loading}
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
