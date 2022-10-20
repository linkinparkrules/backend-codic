const express = require('express');
const app = express();
const router = require('./routers');
const {connectToDb} = require('./database');
const cors = require('cors');

const port = 3000;
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}))

connectToDb();

app.use(router);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});