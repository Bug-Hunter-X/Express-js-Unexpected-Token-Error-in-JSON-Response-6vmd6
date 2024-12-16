const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const response = {
    message: 'Hello from Express!'
  };
  res.setHeader('Content-Type', 'application/json');
  res.json(response); //or res.send(JSON.stringify(response))
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});