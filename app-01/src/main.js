const express = require('express');
const cors = require('cors');
// Import the responseApi.js
const { success, error, validation } = require("./responseApi");
const { getIngredients } = require('./api');


const app = express();

app.use(cors({
    origin: 'http://localhost:3003'
}));

app.listen('3200', () => {
    console.log('Server started in PORT :', 3200);
});


app.get('/getme', (req, res) => {
    res.status(200).json(success("OK", { data: "Sample Data" }, res.statusCode));
});

app.get('/ingredients', (req, res) => {
    if (req.query?.color) {
        res.status(200).json(success("OK", { data: getIngredients(req.query.color) }, res.statusCode));
    }

    res.status(200).json(success("OK", { data: getIngredients() }, res.statusCode));
});

