const express = require('express');
const app = express();
const router = require('./routers');
const {connectToDb} = require('./database');
const cors = require('cors');

const port = process.env.PORT;
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}))

const jwt = require('jsonwebtoken');
app.post('/login', (req,res) => {
    const username = req.body.username;
    const token = jwt.sign(
        {username: username},
        "myPrivateKey",
        {expiresIn: 3600}
    )
    res.json({
        username:username,
        token:token
    })
});

// connectToDb();

// app.use(router);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});