const express = require("express");
const app = express();
const registerRoutes = require("./routes/registerRoutes");


const cors = require("cors");
const bodyparser = require("body-parser");

// cross origin resource sharing
app.use(cors());

// handle form data
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// handle json data
app.use(express.json());

console.log("inside app.js");

// app.post('/api/register', (req, res) => {
//     const { username, password, email } = req.body;
//     // Use the username, password, and email as needed
//     console.log('Received request:', { username, password, email });
//     res.send('Received request successfully');
// });
app.use("/api/register", registerRoutes);
app.use("/api", registerRoutes);

module.exports = app;