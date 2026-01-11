const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true, // 🔐 CLERK USER
  },
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

module.exports = { HoldingsSchema };
