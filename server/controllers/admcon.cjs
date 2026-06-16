const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Admin = require('../modal/adminmod.cjs');

const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      email,
      password: hashedPassword
    });

    await admin.save();

    res.json({ success: true, message: "Admin created" });

  } catch (err) {
    console.log(err);
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Invalid email"
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password"
      });
    }
const token = jwt.sign(
      { id: admin._id, role: "admin" },
      "SECRET_KEY",
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      message: "Login successful",
      token
    });

  } catch (err) {
    console.log(err);
  }
};

module.exports = { registerAdmin,loginAdmin };