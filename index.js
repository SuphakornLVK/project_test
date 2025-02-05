// import lib...
const express = require("express");
const cors = require("cors");
const morgan = require("morgan"); // Data send log libs
const handleErrors = require("./middlewares/error");
require("dotenv").config(); // READ .env

// Routing
const authRouter = require("./routes/auth-route");
const userRouter = require("./routes/user-route");
const app = express();

// Middlewares
app.use(cors()); // allow cross from others domains [can config]
app.use(morgan("dev")); // Show req log
app.use(express.json()); // read json

//Routing
app.use("/api", authRouter);
app.use("/api", userRouter);

// Handle Errors
app.use(handleErrors);

// start server
const PORT = process.env.PORT; // recieve Hidden port from .env
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
