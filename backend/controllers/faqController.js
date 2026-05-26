const FAQ = require('../models/FAQ');

// @desc    Get all FAQs (u5)
// @route   GET /api/faqs
// @access  Public/Private
const getFAQs = async (req, res) => {
    res.status(200).json({ message: 'Get FAQs' });
};

// @desc    Create an FAQ (Admin)
// @route   POST /api/faqs
// @access  Private (Admin)
const createFAQ = async (req, res) => {
    res.status(200).json({ message: 'Create FAQ' });
};

// @desc    Update an FAQ
// @route   PUT /api/faqs/:id
// @access  Private (Admin)
const updateFAQ = async (req, res) => {
    res.status(200).json({ message: `Update FAQ ${req.params.id}` });
};

// @desc    Delete an FAQ
// @route   DELETE /api/faqs/:id
// @access  Private (Admin)
const deleteFAQ = async (req, res) => {
    res.status(200).json({ message: `Delete FAQ ${req.params.id}` });
};

module.exports = {
    getFAQs,
    createFAQ,
    updateFAQ,
    deleteFAQ
};
