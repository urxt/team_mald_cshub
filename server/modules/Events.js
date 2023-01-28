const mongoose = require('mongoose');

const EventsSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    limit: {
        type: Number,
        required: true,
    },
    dressCode: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    buildingName: {
        type: String,
        required: true
    },
    streetNum: {
        type: Number,
        required: true
    },
    streetName: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    }
})

const Events = mongoose.model("events", EventsSchema);
module.exports = { Events };