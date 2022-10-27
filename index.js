const express = require('express');
const app = express();
const router = require('./routers');
const {connectToDb} = require('./database');
const cors = require('cors');

const port = process.env.PORT;
// const port = 5001;
app.use(express.json());

const whitelist = ["http://localhost:3000", "https://codic.vercel.app"];
app.use((req,res) => {
    if (whitelist.includes(req.headers.origin)) {
        return cors({origin: req.headers.origin})
    }
})

connectToDb();

app.use(router);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});