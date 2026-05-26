const User = require('../models/User');

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
    res.status(200).json({ message: 'Register User' });
};

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
    res.status(200).json({ message: 'Login User' });
};

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = async (req, res) => {
    res.status(200).json({ message: 'User data display' });
};

module.exports = {
    registerUser,
    loginUser,
    getMe,
};
