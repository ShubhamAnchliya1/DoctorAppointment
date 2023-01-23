const express = require("express");

const cors = require("cors");

const dbConfig = require("./config/database.js");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT;

dbConfig();

app.use(cors({origin: true , credentials: true}));

app.use(express.json({extended: false}));


const user = require("./routes/userRoute.js");

app.get('/', (req, res) => res.send('Server is running'));

app.use("/api/user", user);


app.listen(PORT, () =>

    console.log(`server is running on http://localhost:${PORT}`)
);



