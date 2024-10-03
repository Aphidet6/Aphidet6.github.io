const express = require('express');
const path = require('path');
const app = express();

// ตั้งค่า view engine ให้เป็น EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // ตั้งค่า path ของโฟลเดอร์ที่เก็บไฟล์ EJS

// ใช้ไฟล์สไตล์ และรูปภาพจากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'public')));

// กำหนด route สำหรับหน้าเว็บหลัก
app.get('/', (req, res) => {
    res.render('index', { title: 'Earth Betta', fish: 'Half Moon COPPER' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
