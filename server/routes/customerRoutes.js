const express = require('express');
const router = express.Router();
const { signupCustomer, loginCustomer } = require('../controllers/customerController');

router.post('/signup', signupCustomer); // POST /api/customers/signup
router.post('/login', loginCustomer);   // POST /api/customers/login

module.exports = router;
