const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rentSchema = new Schema({
    days: { type: mongoose.Schema.Types.String, required: true },
    car: { type: mongoose.Types.ObjectId, ref: 'Car', required: true }, //Car  – object ID, required, reference to Car model
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },//Owner  – object ID, required, reference to User Model
});

const Rent = mongoose.model('Rent', rentSchema);

module.exports = Rent;