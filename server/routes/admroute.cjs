const express = require('express');
const router = express.Router();

const {
  registerAdmin,
  loginAdmin
} = require('../controllers/admcon.cjs');


// 🔐 Register Admin (ONE TIME USE)
router.post('/register', registerAdmin);


// 🔑 Login Admin
router.post('/login', loginAdmin);


module.exports = router;