const express = require('express');
const path = require('path');
const mysql = require('mysql2'); // เพิ่มโมดูล mysql2
const app = express();
const port = 80;
let conn = null

const initMySQL = async () => {
  conn = await mysql.createConnection({
    host: 'db', // หรือใส่เป็น localhost ก็ได้
    user: 'root',
    password: 'root',
    database: 'tutorial'
  })
}

// Define the directory where your static files (like index.html) are located
const staticDir = path.join(__dirname); // ไม่ใช้ 'public' แล้ว

// Serve static files from the directory
app.use(express.static(staticDir));

// Define a route to serve the index.html file 
app.get('/project-01', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

// path = GET /users สำหรับ get users ทั้งหมดที่บันทึกเข้าไปออกมา


// Start the server and listen on the specified port
app.listen(port, async () => {
  await initMySQL()
  console.log(`Server running at http://localhost:${port}/`)
})
