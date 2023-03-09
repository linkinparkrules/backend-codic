const express = require('express');
const app = express();
const router = require('./routers');
const {connectToDb} = require('./database');
const cors = require('cors');

const port = process.env.PORT;
// const port = 5001;
app.use(express.json());

app.options('*', cors())
const whitelist = ["http://localhost:3000", "https://codic.vercel.app", "http://localhost:5001"];
// const corsOptions = {
//     origin: function (origin, callback) {
//       if (whitelist.indexOf(origin) !== -1) {
//         callback(null, false)
//       } else {
//         callback(new Error('Not allowed by CORS'))
//       }
//     }
// }

app.use(function(req, res, next) {
  // Set the Access-Control-Allow-Origin header to allow requests from any domain
  res.header("Access-Control-Allow-Origin", "*");
  // Set the Access-Control-Allow-Methods header to allow POST and GET requests
  res.header("Access-Control-Allow-Methods", "POST, GET");
  // Set the Access-Control-Allow-Headers header to allow requests with the "Content-Type" header
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // Call the next middleware in the chain
  next();
});
app.use(cors())
// app.use(cors(corsOptions));

connectToDb();

app.use(router);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});