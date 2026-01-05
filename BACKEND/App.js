const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const router = require("./routes/routes");
require("dotenv").config();
const path = require("path");


const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());
app.use("/",router)


app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});


sequelize.authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ DB error:", err));