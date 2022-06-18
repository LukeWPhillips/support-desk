const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;

// connect to database
connectDB();

const app = express();

// /middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// test get request on postman to get hello
app.get("/", (req, res) => {
  res.send("hello Welcome to the Support desk API");
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log("server started on port 5000"));
