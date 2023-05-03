const app = require("express")();
const dataRoutes = require("./routes/data");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(cors());
app.use("/api/v1/", dataRoutes);

app.get("/", (req, res) => res.send("Visualization api ready to use..."));

app.listen(port, () => {
  console.log('Server is running on port:', port);
})

