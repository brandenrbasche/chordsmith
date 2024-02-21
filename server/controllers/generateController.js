const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://brandenbasche:UB6lrioh2VXE0faQ@solo-project-v1.hirjnbf.mongodb.net/chord_generator";
const MusicKeys = require('../models/musicKeysModel');

const generateController = {};

/**
 * Gets all musical keys returned as a list of objects.
 */
generateController.getAllKeys = (req, res, next) => {
    MusicKeys.find({})
        .then(response => {
            console.log('logging response:\n\n', response);
            res.locals.keys = response;
            return next();
        })
        .catch(err => {
            if (err) return next('Error in generateController.getAllKeys: ' + JSON.stringify(err));
        });
}

/**
 * Returns all keywords within the musicKeys[emotions] collection returned as an array
 */
generateController.getAllKeywords = (req, res, next) => {
    MusicKeys.find({})
        .then(response => {
            let keywords = [];
            
            for(const key of response) {
                console.log(key.emotions.split(','));
                const subArr = key.emotions.split(', ')
                keywords.push(...subArr);
            }

            res.locals.keywords = keywords;
            return next();
        })
        .catch(err => {
            return next('There was an error in generateController.getAllKeywords: ' + JSON.stringify(err));
        })
}

module.exports = generateController;