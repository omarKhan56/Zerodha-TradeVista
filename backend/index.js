require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// 🔐 JWT AUTH MIDDLEWARE
//const authMiddleware = require("./middleware/authMiddleware");
//const authRoutes = require("./routes/authRoutes");


// MODELS
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(express.json());
//app.use(authRoutes);


/* =====================================================
   TEMP DATA ROUTES (RUN ONLY ONCE)
   ===================================================== */

app.get("/addHoldings", async (req, res) => {
  try {
    const tempHoldings = [
      {
        name: "BHARTIARTL",
        qty: 2,
        avg: 538.05,
        price: 541.15,
        net: "+0.58%",
        day: "+2.99%",
      },
      {
        name: "HDFCBANK",
        qty: 2,
        avg: 1383.4,
        price: 1522.35,
        net: "+10.04%",
        day: "+0.11%",
      },
    ];

    for (let item of tempHoldings) {
      await HoldingsModel.create({
        userId: "temp-user",
        ...item,
      });
    }

    res.send("Holdings Added");
  } catch (err) {
    res.status(500).json({ error: "Failed to add holdings" });
  }
});

app.get("/addPositions", async (req, res) => {
  try {
    const tempPositions = [
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        isLoss: true,
      },
    ];

    for (let item of tempPositions) {
      await PositionModel.create({
        userId: "temp-user",
        ...item,
      });
    }

    res.send("Positions Added");
  } catch (err) {
    res.status(500).json({ error: "Failed to add positions" });
  }
});

/* =====================================================
   🔐 JWT PROTECTED DASHBOARD ROUTES
   ===================================================== */

// 🔐 GET HOLDINGS
app.get("/allHoldings", async (req, res) => {
  const holdings = await HoldingsModel.find();
  res.json(holdings);
});


// 🔐 GET POSITIONS
app.get("/allPositions", async (req, res) => {
  const holdings = await PositionsModel.find();
  res.json(positions);
});


// 🔐 CREATE ORDER
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      userId: "temp-user",
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order Saved!!");
  } catch (err) {
    res.status(500).json({ error: "Order failed" });
  }
});


/* =====================================================
   SERVER
   ===================================================== */

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("❌ DB Connection Failed", err));
