require("dotenv").config();
const express = require("express");
const app = express();
const routesReport = require('rowdy-logger').begin(app);
const cors = require('cors');
const { default: App } = require("../Project-3-Solo-frontend/project-3-solo-frontend/src/App");
const router = express.Router();

app.use(express.json())
app.use((cors)())

const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/users', userRoutes);
app.use('/items', itemRoutes);
app.use('/users', orderRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})