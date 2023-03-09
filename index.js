const express = require('express');
const app = express();
const router = require('./routers');
const {connectToDb} = require('./database');
const cors = require('cors');

const port = process.env.PORT;
// const port = 5001;
app.use(express.json());

// const whitelist = ["http://localhost:3000", "https://codic.vercel.app", "http://localhost:5001"];
// const corsOptions = {
//     origin: function (origin, callback) {
//       if (whitelist.indexOf(origin) !== -1) {
//         callback(null, true)
//       } else {
//         callback(new Error('Not allowed by CORS'))
//       }
//     }
// }

// app.use(cors(corsOptions));
app.use(cors())

connectToDb();

app.use(router);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});