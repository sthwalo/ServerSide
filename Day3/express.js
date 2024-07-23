const express = require('express');
const helper = require('./helper.js');
const app = express();
const port = 3000;

app.get('/employees', async(req, res) => {

    const data = await helper.getDataFromDatabase();
    res.send(data);
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}/`);
});