const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true, // 🔐 CLERK USER
  },
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mode: {
    type: String, // BUY / SELL
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = { OrdersSchema };
