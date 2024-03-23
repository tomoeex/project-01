const express = require('express');
const path = require('path');
const app = express();
const port = 8082;

// Define the directory where your static files (like index.html) are located
const staticDir = path.join(__dirname); // ไม่ใช้ 'public' แล้ว

// Serve static files from the directory
app.use(express.static(staticDir));

// Define a route to serve the index.html file
app.get('/project-01', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/project-01`);
});
