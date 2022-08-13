const express = require('express');
const router = express.Router();

const app = express();

app.get("/", (req, res) => {
    res.send("You have hit the right route");
});

const port = process.env.PORT || 3000;
app.listen(port);

