const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicKeysSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    notes: {
        type: String,
        require: true
    },
    emotions: {
        type: String,
        required: true
    }
}, { collection: 'musicKeys' });

module.exports = mongoose.model('MusicKey', musicKeysSchema);