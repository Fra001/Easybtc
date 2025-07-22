const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/exchange-rate', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.exchangerate.host/latest?base=EUR&symbols=USD');
    res.json({ rate: data.rates.USD });
  } catch {
    res.status(500).json({ error: 'Unable to fetch exchange rate.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Backend server running on port ${PORT}`));
