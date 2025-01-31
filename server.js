require("dotenv").config(); // ✅ Load environment variables FIRST
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Enable CORS (move it after app is defined)
app.use(cors());
app.use(express.json());

// Suppress Mongoose strictQuery warning
mongoose.set("strictQuery", false);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Basic Route
app.get("/", (req, res) => {
  res.send("Client Manager API Running!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
