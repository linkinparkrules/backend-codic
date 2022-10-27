const express = require('express');
const app = express();
const router = require('./routers');
const {connectToDb} = require('./database');
const cors = require('cors');

const port = process.env.PORT;
// const port = 5001;
app.use(express.json());

function allowedOrigin () {
    const whitelist = ["http://localhost:3000", "https://codic.vercel.app"];
    const origin = req.headers.origin;
    if(whitelist.includes(origin)) {
        return {origin: origin}
    }
}
app.use(cors(allowedOrigin))
// app.use((req, res, next) => {
//     const allowedOrigins = ["http://localhost:3000", "https://codic.vercel.app"];
//     const origin = req.headers.origin;
//     if (allowedOrigins.includes(origin)) {
//          res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
//     res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.header('Access-Control-Allow-Credentials', true);
//     return next();
//   });

connectToDb();

app.use(router);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});