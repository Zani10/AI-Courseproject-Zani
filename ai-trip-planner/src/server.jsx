const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/get-place-details', async (req, res) => {
  const { textQuery } = req.body;
  const response = await axios.post('https://maps.googleapis.com/maps/api/place/textsearch', {
    params: {
      query: textQuery,
      key: process.env.GOOGLE_MAP_PLACE_API_KEY, // Use your API key here
    }
  });

  res.json(response.data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
