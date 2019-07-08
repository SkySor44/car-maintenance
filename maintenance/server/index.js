const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json({limit:'10mb'}));

app.get('/', (req, res) => res.status(200).send('Hello World!'))

app.listen(port, () => console.log(`Listening on port ${port}!`))