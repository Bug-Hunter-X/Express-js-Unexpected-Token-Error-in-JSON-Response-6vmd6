const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Error: Unexpected token error in JSON response
//This can occur if you send a non-JSON response that the client is expecting JSON
//Example: sending a string without proper content-type header
//Solution: Check for correct header and ensure you are sending the correct format