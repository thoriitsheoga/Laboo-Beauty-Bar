const pool = require('../db'); // Assuming you have a pool set up

const signupCustomer = async (req, res) => {
  const { name, last_name, email, phone, password } = req.body;

  try {
    // Check for duplicates
    const existing = await pool.query(
      'SELECT * FROM customer WHERE email = $1 OR phone = $2',
      [email, phone]
    );
    if (existing.rows.length > 0) {
      return res.status(400).json({ error: 'Email or phone already exists' });
    }

    // Insert new customer
    const result = await pool.query(
      'INSERT INTO customer (name, last_name, email, phone, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, last_name, email, phone, password]
    );

    res.status(201).json({ user: result.rows[0] });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
const loginCustomer = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    const result = await pool.query('SELECT * FROM customer WHERE email = $1', [email]);
    const user = result.rows[0];
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error('Login error:', err.message, err.stack);
    res.status(500).json({ error: `Server error during login: ${err.message}` });
  }
};
module.exports = {
  signupCustomer,
  loginCustomer
};
