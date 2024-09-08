const User = require('../models/userModel');

const users = [{ username: 'royalcoder', password: 'royal99@$' }];

// Register a new user
const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.create({ username, password });

  if (user) {
    res.status(201).json({ _id: user._id, username: user.email, password: user.password });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

// Endpoint to get all users
const getUser = async (req, res) => {

  const users = await User.find({});

  try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: "Error fetching users" });
    }
};

module.exports = { registerUser, getUser };
