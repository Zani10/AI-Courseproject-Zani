# TRIP | AI-Powered Travel Planner

## Project Overview

This project is an AI-powered travel planning website that allows users to generate personalized travel itineraries based on their preferences and budget. The app integrates several Google products, including Firebase, Google Gemini AI, Google Maps Places API, and Google OAuth, to create a seamless and efficient user experience.

## Features

- **Custom Travel Itineraries**: Generate detailed travel plans based on destination, budget, and traveler type.
- **Hotel Recommendations**: Get a list of hotels with key details such as price, rating, and location.
- **Places to Visit**: Discover must-see places with detailed information including best time to visit, ticket pricing, and travel time.
- **Google Maps Integration**: Direct links to Google Maps for easy navigation.
- **User Authentication**: Secure login using Google OAuth.
- **Real-time Database**: Store and retrieve user data and generated trips using Firebase Firestore.

## Technologies Used

### 1. **React.js**
   - **Why**: React is a popular JavaScript library for building user interfaces, particularly single-page applications where fast, interactive user experience is critical.
   - **Usage**: We used React for creating the dynamic and responsive frontend of the application.

### 2. **Tailwind CSS**
   - **Why**: Tailwind CSS is a utility-first CSS framework that allows for rapid UI development with pre-defined classes.
   - **Usage**: Used for styling components consistently and efficiently across the application.

### 3. **Google Firebase**
   - **Why**: Firebase provides a comprehensive backend-as-a-service (BaaS) solution, including real-time database, authentication, and hosting, all within the Google ecosystem.
   - **Usage**: We used Firebase Firestore for storing user data and trip details, Firebase Authentication for user login, and Firebase Hosting for deploying the application.

### 4. **Google Gemini AI**
   - **Why**: Google Gemini AI (part of the Google Cloud AI suite) provides powerful natural language processing (NLP) capabilities for generating text-based content.
   - **Usage**: We utilized Google Gemini AI to generate custom travel itineraries based on user inputs.

### 5. **Google Maps Places API**
   - **Why**: The Google Maps Places API provides detailed information about geographical locations, including place names, addresses, photos, and user ratings.
   - **Usage**: Used to fetch place details such as hotels and tourist spots, and to generate Google Maps links for easy navigation.

### 6. **Google OAuth 2.0**
   - **Why**: Google OAuth 2.0 allows users to authenticate using their Google accounts, providing a secure and familiar login experience.
   - **Usage**: Implemented for user authentication, ensuring that user data is securely managed and accessible.

### 7. **Axios**
   - **Why**: Axios is a promise-based HTTP client for making HTTP requests in JavaScript.
   - **Usage**: Used to handle API requests to Google Places API and other endpoints.

### 8. **Vite**
   - **Why**: Vite is a next-generation frontend tool that offers fast build times and improved development experiences for modern web projects.
   - **Usage**: Used as the build tool and development server for the React application.

### 9. **Other**
   - **emojis**: https://emojipedia.org/
   - **Icons**: https://react-icons.github.io/react-icons/

## Project Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **NPM** or **Yarn** package manager
- **Google Cloud API Key** with access to Google Places API and Google Gemini AI.
- **Firebase Project** set up with Firestore and Authentication enabled.

### Environment Variables

Create a `.env` file in the root directory with the following variables:

    ```bash
    VITE_FIREBASE_API_KEY=your-firebase-api-key
    VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
    VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
    VITE_FIREBASE_APP_ID=your-firebase-app-id
    VITE_GOOGLE_MAP_PLACE_API_KEY=your-google-maps-api-key
    VITE_GOOGLE_GEMINI_AI_API_KEY=your-google-gemini-ai-key
    VITE_GOOGLE_AUTH_CLIENT_ID=your-google-oauth-client-id

## Installation
### Clone the repository:
    ```bash
    git clone https://github.com/Zani10/AI-Courseproject-Zani.git

### Install dependencies:
    ```bash
    npm install
    # or
    yarn install

### Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev

The application will be available at http://localhost:5173.

## Usage
1. Login using your Google account.
2. Select your travel preferences including destination, number of days, budget, and traveler type.
3. Generate Itinerary to receive custom travel plans and hotel recommendations.
4. View Details for each hotel and place, with direct links to Google Maps.

## Inspiration (websites & Youtubers)
https://youtu.be/uUCk0_PNIxU?si=6kf9bLcacGJpF0xV
https://youtu.be/ldotPiaTO4E?si=_ToRPDwzOXmmNaNE
https://youtu.be/309beMyhXtg?si=igz1YVvKw6uRVPsK
https://youtu.be/f_7grfh9TxU
https://tripplanner.ai/
https://layla.ai/nl
https://wonderplan.ai/
https://www.trip-planner.ai/rp/start1/index.php?mode=4
https://plantrip.io/itinerary/870074#google_vignette
https://www.aitripmaker.com/
https://www.tripadvisor.com/AITripBuilder

## References/Sources
Gemini AI integration/Use: https://youtu.be/EspenFj1EaE  https://youtu.be/qFyzvIlAZSU
Firebase integration/Use: https://youtu.be/ad6IavyAHsQ  https://youtu.be/cEJ6SUVQCy8
Google Places API: https://youtu.be/PfZ4oLftItk?list=PL2rFahu9sLJ2QuJaKKYDaJp0YqjFCDCtN
Autocomplete searchbar google feature: https://youtu.be/qpUfj4zPxWQ?si=XDpivvY55NUw-cYJ
Advanced Google API features: https://youtu.be/UKdQjQX1Pko
oAuth Google Login: https://youtu.be/HtJKUQXmtok?si=ZWEIHE5HkWMS0-E-  https://youtu.be/r5ff1_3WrPM?si=qkIYvehi4JCGe3UG

## Helpful
- React Documentation
- Tailwind CSS Documentation
- Google Firebase Documentation
- Google Places API Documentation
- Google OAuth 2.0 Documentation
- Vite Documentation
- Axios Documentation

## License
This project is licensed under the MIT License. See the LICENSE file for details.
