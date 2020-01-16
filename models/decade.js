const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DecadeSchema = new Schema({
    decade_name: String,
    description: String,
    dates: String,
    dances: Array
});

const Decade = mongoose.model('Decade', DecadeSchema);
module.exports = Decade;
