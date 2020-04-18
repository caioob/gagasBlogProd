const express = require('express');
const path = require('path');
const app = express();

const HTTP_PORT = process.env.PORT || '8080';

app.use(express.static(__dirname + '/dist/caioSite'));

app.get(('/*'), (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/caioSite/index.html'));
});


app.listen(HTTP_PORT, () => {
    console.log("app running in http port: " +HTTP_PORT);
});