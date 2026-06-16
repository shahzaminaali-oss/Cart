

const router= require('express').Router();
const { signup, login } = require('../controllers/authController.cjs');
const {signupValidation,loginValidation} = require('../middleware/authValidation.cjs')


router.post('/signup', signupValidation, signup)
router.post('/login', loginValidation, login)

module.exports=router;
