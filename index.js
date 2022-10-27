const express = require('express');
const app = express();
const router = require('./routers');
const {connectToDb} = require('./database');
const cors = require('cors');

const port = process.env.PORT;
// const port = 5001;
app.use(express.json());

// app.use((req, res, next) => {
//     const allowedOrigins = ["http://localhost:3000", "https://codic.vercel.app"];
//     const origin = req.headers.origin;
//     if (allowedOrigins.includes(origin)) {
//          res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     return next();
// });
const whitelist = ["http://localhost:3000", "https://codic.vercel.app"];
const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }

app.use(cors(corsOptions));

connectToDb();

app.use(router);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});