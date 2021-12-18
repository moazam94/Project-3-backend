require("dotenv").config();
const express = require("express");
const app = express()
const { default: App } = require("../Project-3-Solo-frontend/project-3-solo-frontend/src/App");
const router = express.Router();

app.use(express.json())
app.use(require('cors')())

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})