
const express = require('express');

const app = express();

app.use(express.static('./dist/projectAngular'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/projectAngular/'}),
);

app.listen(process.env.PORT || 8080);
