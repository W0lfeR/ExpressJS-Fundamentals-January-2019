const mongoose = require('mongoose');

// Each image should have URL, creation date, title, description and multiple tags.
const imageSchema = new mongoose.Schema({
    url: {type: mongoose.Schema.Types.String, required: true},
    creationDate: {type: mongoose.Schema.Types.Date, required: true},
    title: {type: mongoose.Schema.Types.String, required: true},
    description: {type: mongoose.Schema.Types.Date, required: true},
    tags: [{type: mongoose.Schema.Types.ObjectId,ref: "Tag"}]

});

module.exports = mongoose.model('Image', imageSchema);