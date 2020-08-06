const express = require("express");
const { User } = require("../models/User");
const { events } = require("../models/Event");
const router = express.Router();
const { auth } = require("../middleware/auth");
const mongoose = require("mongoose");
var getEvents = events.find({});
router.post("/list/event", (req, res) => {
  const event = new events(req.body);
  event.save((err, data) => {
    if (err) return res.status(400).json({ success: false, err });
    else {
      return res.status(200).json({ success: true });
    }
  });
});

router.get("/show/events", (req, res) => {
  getEvents.exec((err, data) => {
    if (err) return res.status(400).json({ success: false, err });
    else {
      return res.status(200).json({ success: true, data });
    }
  });
});

router.get("/show/myEvents", (req, res) => {
  events
    .find()
    .populate("eventCreator")
    .exec((err, data) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true, data });
    });
});
module.exports = router;
