require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const foodRoutes = require("./routes/foodRoutes");

app.use("/api/foods", foodRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
