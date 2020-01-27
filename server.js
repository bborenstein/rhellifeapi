const express = require('express');
const app = express();
const port = 3000;



const airframes = require("./my.json");

app.get('/', (req, res) => {
  res.send("Welcome to the / of my glorious production API.");
});

app.get('/airframes', (req, res) => {
  res.json(airframes)
})

app.get('/airframes/:id', (req, res) => {
  res.json(airframes[req.params.id])
})

app.use(express.json())

const server = app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


