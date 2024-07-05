require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Joi = require("joi");


const app = express();

const db = require("./db/connect");

const userRoutes = require("./routes/users.routes")
const authRoutes = require("./routes/auth.routes");
const passwordReset = require("./routes/passwordReset.routes");

app.use(express.json());
app.use(cors());
db();

app.use("/api", userRoutes);
app.use("/api", authRoutes);
app.use("/api", passwordReset);

app.get('/', (req, res) => {
    res.send('Welcome to our Reset Password Application!')
});

const PORT = process.env.PORT || 1700;

app.listen(PORT, () => {
    console.log(`Application is running on port http://localhost:1700`);
});