const express = require('express');
const path = require('path');
const session = require('express-session'); // ติดตั้ง express-session
const app = express();

// ตั้งค่า view engine ให้เป็น EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // ตั้งค่า path ของโฟลเดอร์ที่เก็บไฟล์ EJS

const port = process.env.PORT || 5000;

// ใช้ไฟล์สไตล์ และรูปภาพจากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'public')));

// ตั้งค่า express-session
// app.use(session({
 //   secret: '15915963Za', // เปลี่ยนเป็น secret ที่คุณต้องการ
   // resave: false,
   // saveUninitialized: true,
   // cookie: { secure: true } // ใช้ true ถ้าคุณใช้ HTTPS
// }));

// Middleware เพื่อจัดการการส่งข้อมูลจากฟอร์ม
app.use(express.urlencoded({ extended: true })); // ใช้สำหรับการรับข้อมูลจากฟอร์ม

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

app.get('/Half_Moon-PK-COPPER', (req, res) => {
    res.render('product',{
        type: 'ปลากัดหางสั้น',
        bettaName: 'HALFMOON PLAKAD COPPER',
        mainImage: '/images/copper-betta.jpg',
        Thumbnail1: '/images/copper-betta.jpg',
        Thumbnail2: '/images/images-detail/copper-betta-2.jpg',
        Thumbnail3: '/images/images-detail/copper-betta-3.jpg',
        PKC: 'HMPK : 01',
        price: '150'
    });
});

app.get('/Half_Moon-PK-NEMO-GALAXY', (req, res) => {
    res.render('product',{
        type: 'ปลากัดหางสั้น',
        bettaName: 'HALFMOON PLAKAD NEMO GALAXY',
        mainImage: '/images/galaxy-betta.jpg',
        Thumbnail1: '/images/galaxy-betta.jpg',
        Thumbnail2: '/images/images-detail/galaxy-betta-2.jpg',
        Thumbnail3: '/images/images-detail/galaxy-betta-3.jpg',
        PKC: 'HMPK : 02',
        price: '200'
    });
});

app.get('/Half_Moon-PK-BLACK-DRAGON', (req, res) => {
    res.render('product',{
        type: 'ปลากัดหางสั้น',
        bettaName: 'HALFMOON PLAKAD BLACK DRAGON',
        mainImage: '/images/HMPK BLACK DRAGON.jpg',
        Thumbnail1: '/images/HMPK BLACK DRAGON.jpg',
        Thumbnail2: '/images/images-detail/HMPK BLACK DRAGON-2.jpg',
        Thumbnail3: '/images/images-detail/HMPK BLACK DRAGON-3.jpg',
        PKC: 'HMPK : 03',
        price: '300'
    });
});

app.get('/Half_Moon-PK-DUMBO-RED', (req, res) => {
    res.render('product',{
        type: 'ปลากัดหูช้าง',
        bettaName: 'HALFMOON PLAKAD DUMBO RED',
        mainImage: '/images/HMPK DUMBO.jpg',
        Thumbnail1: '/images/HMPK DUMBO.jpg',
        Thumbnail2: '/images/images-detail/HMPK DUMBO-2.jpg',
        Thumbnail3: '/images/images-detail/HMPK DUMBO-3.jpg',
        PKC: 'HMD : 01',
        price: '400'
    });
});

app.get('/Half_Moon-PK-DUMBO-BLUE', (req, res) => {
    res.render('product',{
        type: 'ปลากัดหูช้าง',
        bettaName: 'HALFMOON PLAKAD DUMBO BLUE',
        mainImage: '/images/HMPK DUMBO BLUE.jpg',
        Thumbnail1: '/images/HMPK DUMBO BLUE.jpg',
        Thumbnail2: '/images/images-detail/HMPK DUMBO BLUE-2.jpg',
        Thumbnail3: '/images/images-detail/HMPK DUMBO BLUE-3.jpg',
        PKC: 'HMD : 02',
        price: '400'
    });
});

app.get('/Half_Moon-PK-CROWN-TAIL-FANCY', (req, res) => {
    res.render('product',{
        type: 'ปลากัดหางหนาม',
        bettaName: 'CROWN TAIL FANCY',
        mainImage: '/images/CT FANCY.jpg',
        Thumbnail1: '/images/CT FANCY.jpg',
        Thumbnail2: '/images/images-detail/CT FANCY-2.jpg',
        Thumbnail3: '/images/images-detail/CT FANCY-3.jpg',
        PKC: 'HMCT : 01',
        price: '500'
    });
});

// Route สำหรับเพิ่มสินค้าลงในตะกร้า
app.post('/add-to-cart', (req, res) => {
    const { bettaName, price, quantity } = req.body;

    if (!req.session.cart) {
        req.session.cart = []; // สร้างตะกร้าใหม่หากยังไม่มี
    }

    // เพิ่มสินค้าลงในตะกร้า
    req.session.cart.push({ bettaName, price, quantity });
    
    // เช็คปุ่มที่กด
    if (req.body.action === 'buy') {
        return res.redirect('/cart'); // เปลี่ยนไปที่หน้าตะกร้า
    }
    
    // กลับไปที่หน้าผลิตภัณฑ์หลังจากหยิบลงตะกร้า
    res.redirect('back');
});


// Route สำหรับหน้าแสดงผลตะกร้า
app.get('/cart', (req, res) => {
    const cartItems = req.session.cart || []; // ดึงข้อมูลตะกร้าสินค้า
    res.render('cart', { cartItems }); // ส่งข้อมูลไปยัง template
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
