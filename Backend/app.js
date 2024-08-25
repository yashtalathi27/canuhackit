require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./Database/connection")
const PORT = process.env.PORT || 3000;
const session = require("express-session");
app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,PATCH,DELETE",
    credentials: true
}));
app.use(express.json());



app.listen(PORT, () => {
    console.log(`server start at port no ${PORT}`)
})


