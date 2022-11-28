const express = require('express');
const router = express.Router();

const app = express();

app.get("/", (req, res) => {
    const envVar = process.env.ENV_VAR;
    res.send(`You have hit the right route - this is the env var: ${envVar}`);
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

app.get("/fake-route", (req, res) => {
    res.send("This is the fake route!!!!!!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
});

