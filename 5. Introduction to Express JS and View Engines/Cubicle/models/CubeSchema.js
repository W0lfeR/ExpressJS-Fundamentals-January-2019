const mongoose = require('mongoose');


const cubeSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String, minlength: 3, maxlength: 15
    },
    description: {type: mongoose.Schema.Types.String, minlength: 20, maxlength: 300},
    imageURL: {type: mongoose.Schema.Types.String,},
    difficulty: {}
});