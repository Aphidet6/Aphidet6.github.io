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
    res.render('index', { title: 'Earth Betta', fish: 'Half Moon COPPER' , Myname: 'Earth'});
});

app.get('/Half_Moon-COPPER', (req, res) => {
    res.render('product',{
        type: 'ปลากัดหางยาว HALF MOON',
        bettaName: 'Half Moon Copper',
        mainImage: '/images/blue-betta.jpg',
        Thumbnail1: '/images/blue-betta.jpg',
        Thumbnail2: '/images/images-detail/blue-betta-2.jpg',
        Thumbnail3: '/images/images-detail/blue-betta-3.jpg',
        PKC: 'HM : 01',
        price: '120'
    });
});

app.get('/Half_Moon-SUPER-BLACK', (req, res) => {
    res.render('product',{
        type: 'ปลากัดหางยาว HALF MOON',
        bettaName: 'Half Moon Super Black',
        mainImage: '/images/black-betta.jpg',
        Thumbnail1: '/images/black-betta.jpg',
        Thumbnail2: '/images/images-detail/black-betta-2.jpg',
        Thumbnail3: '/images/images-detail/black-betta-3.jpg',
        PKC: 'HM : 02',
        price: '180'
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
