require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Docker Container!!!!</h1>");
})

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
})