const express = require('express')
const app = express()
const port = 8000

app.get('/project-01', (req, res) => {
  // Serve the index.html file
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})