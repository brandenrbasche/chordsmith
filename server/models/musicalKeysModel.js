const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicalKeySchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    notes: {
        type: [String],
        require: true
    },
    emotions: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('MusicalKey', musicalKeySchema);