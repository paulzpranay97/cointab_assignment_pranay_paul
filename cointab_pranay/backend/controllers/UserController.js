// controllers/UserController.js
const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { name, email, phone, website, address, company } = req.body;
    const cityName = address.city;
    const companyName = company.name;
    const newUser = await User.create({ name, email, phone, website, city: cityName, company: companyName});
    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};