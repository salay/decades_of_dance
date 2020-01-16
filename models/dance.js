const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DanceSchema = new Schema({
    name: String,
    description: String,
    video_link: String,
    decade: { type: Schema.ObjectId, ref: 'Decade' }
});

const Dance = mongoose.model('Dance', DanceSchema);
module.exports = Dance;



