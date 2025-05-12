const express = require('express');
const cors = require('cors');
const customerRoutes = require('./routes/customerRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // to parse JSON bodies

app.use('/api/customers', customerRoutes); 

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// --- Book Appointment ---
app.post('/api/book', async (req, res) => {
  const {
    shape,
    shapeOption,
    shapePrice,
    decoration,
    nailArtCount,
    nailArtPrice,
    totalPrice,
    appointmentTime
  } = req.body;

  try {
    await pool.query(
      'INSERT INTO appointments (shape, shape_option, shape_price, decoration, nail_art_count, nail_art_price, total_price, time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
      [shape, shapeOption, shapePrice, decoration, nailArtCount, nailArtPrice, totalPrice, appointmentTime]
    );
    res.status(201).send({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Booking failed' });
  }
});

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(5000, () => console.log('Server running on port 5000'));
