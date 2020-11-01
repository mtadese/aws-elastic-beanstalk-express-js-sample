const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => res.send('this is a devops learning path sample code.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
