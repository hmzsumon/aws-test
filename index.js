const express = require('express');
const PORT = process.env.PORT || 5000;
const os = require('os');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// listen
app.listen(PORT, (host) => {
  console.log(os.hostname());
  console.log(` listening on port http://localhost:${PORT}`);
});
