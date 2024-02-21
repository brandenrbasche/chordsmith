const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://brandenbasche:UB6lrioh2VXE0faQ@solo-project-v1.hirjnbf.mongodb.net/chord_generator";
const MusicKeys = require('../models/musicKeysModel');

const generateController = {};

generateController.getAllKeys = async (req, res, next) => {
    await MusicKeys.find({})
        .then(response => {
            console.log('logging response:\n\n', response);
            res.locals.keys = response;
            return next();
        })
        .catch(err => {
            if (err) return next('Error in generateController.getAllKeys: ' + JSON.stringify(err));
        });
}

module.exports = generateController;