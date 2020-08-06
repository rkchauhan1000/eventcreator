const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;
const ISODate = mongoose.Da;
const eventSchema = mongoose.Schema(
  {
    eventCreator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    name: {
      type: String,
      maxlength: 50,
    },

    venue: {
      type: String,
      maxlength: 50,
    },

    about: {
      type: String,
    },

    date1: {
      type: String,
    },
    date2: {
      type: String,
    },

    limit: {
      type: Number,
      default: 0,
    },

    time: {
      type: String,
    },
  },
  { timeStamp: true }
);

const events = mongoose.model("events", eventSchema);
module.exports = { events };
