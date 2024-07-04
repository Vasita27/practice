const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection setup
mongoose.connect(
  "mongodb+srv://vasitapuppala:0NYUwrNGcmxjNrG2@cluster0.lzhqeww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    dbName: "YourDbs",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error("Error connecting to MongoDB:", err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

// Define MongoDB Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  acad: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("users", UserSchema);
User.createIndexes();

// Middleware // Use CORS globally for all routes

// CORS configuration for a specific origin

// Routes
app.get("/", (req, res) => {
  res.send("App is Working");
});

app.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      res.send(req.body);
    } else {
      console.log("User already registered");
    }
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).send("Something went wrong");
  }
});

module.exports = app; // Export the app for Vercel deployment
