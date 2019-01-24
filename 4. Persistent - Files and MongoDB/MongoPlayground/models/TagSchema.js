const mongoose = require('mongoose');
// Each tag should have name, creation date and array of images. 
// Try to add a function in the tag model that turns tagName to lower case.
const tagSchema = new mongoose.Schema({
   name: {type: mongoose.Schema.Types.String, required: true, unique: true},
   creationDate: {type: mongoose.Schema.Types.Date, required: true},
   images: [{type: mongoose.Schema.Types.ObjectId, ref: "Image"}]
});

module.exports = mongoose.model('Tag', tagSchema);
