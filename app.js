const express = require('express');
const router = express.Router();

const app = express();

app.get("/", (req, res) => {
    res.send("You have hit the right route");
});

app.get("/test", (req, res) => {
    res.send("The API is running!");
});

app.get("/users", (req, res) => {
   res.send("This is the users route!");
});

app.get("/diagrams", (req, res) => {
    res.send("This is the diagrams route!!!!!!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
});

