const express = require('express');
const generateController = require('../controllers/generateController');

const router = express.Router();

/**
 * Get list of all musical keys stored in database.
 */
router.get('/', generateController.getAllKeys, (req, res) => {
    res.status(200).send(res.locals.keys);
});

/**
 * Get list of all emotion adjectives returned in an array.
 */
router.get('/keywords', generateController.getAllKeywords, (req, res) => {
    res.status(200).send(res.locals.keywords);
});

module.exports = router;
