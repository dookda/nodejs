const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
    res.status(200).json({
        status: "hello"
    })
})


module.exports = app;