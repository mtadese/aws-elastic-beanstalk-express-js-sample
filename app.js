const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is a devops learning path sample code. This is a second update to test a new commit and pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
