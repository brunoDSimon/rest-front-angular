
const express = require('express');

const app = express();

app.use(express.static('./dist/project-angular'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/project-angular/'}),
);

app.listen(process.env.PORT || 8080);
