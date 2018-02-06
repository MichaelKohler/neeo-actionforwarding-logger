const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 6000;

app.use(bodyParser.json());

app.post('/', (req) => {
  console.log('action was received: ', req.body);
});

app.listen(PORT, () => {
  console.log(`Action forwarding listening on port ${PORT}!`)
});
