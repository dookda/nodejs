const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.options("*", cors())

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}))

const port = 5100;

const api = require("./service/api")
app.use(api)

app.listen(port, () => {
    console.log("start http://localhost:" + port)
})