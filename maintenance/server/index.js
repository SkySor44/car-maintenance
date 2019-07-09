const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = 3001;

app.use(bodyParser.json({limit:'10mb'}));

app.use(cors());

app.get('/test', (req, res) => res.status(200).send("Success!"))

app.listen(port, () => console.log(`Listening on port ${port}!`))

