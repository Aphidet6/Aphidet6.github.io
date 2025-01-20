const express = require('express');
const path = require('path');
// สร้าง Express app
const app = express();

// กำหนดพอร์ต
const port = process.env.PORT || 3000;
let title = 'Earth Betta'
// ตั้งค่า view engine เป็น EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // ตั้งค่า path ของโฟลเดอร์ที่เก็บไฟล์ EJS

// ใช้ไฟล์สไตล์และรูปภาพจากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'public')));



// Route สำหรับหน้าแสดงผลผลิตภัณฑ์ต่าง ๆ
const products = [
    {
      route: 'Half_Moon-COPPER',
      type: 'ปลากัดหางยาว HALF MOON',
      bettaName: 'Half Moon Copper',
      mainImage: '/images/blue-betta.jpg',
      thumbnails: [
        '/images/blue-betta.jpg',
        '/images/images-detail/blue-betta-2.jpg',
        '/images/images-detail/blue-betta-3.jpg'
      ],
      PKC: 'HM : 01',
      price: '120'
    },
    {
      route: 'Half_Moon-SUPER-BLACK',
      type: 'ปลากัดหางยาว HALF MOON',
      bettaName: 'Half Moon Super Black',
      mainImage: '/images/black-betta.jpg',
      thumbnails: [
        '/images/black-betta.jpg',
        '/images/images-detail/black-betta-2.jpg',
        '/images/images-detail/black-betta-3.jpg'
      ],
      PKC: 'HM : 02',
      price: '180'
    },
    {
      route: 'Half_Moon-PK-COPPER',
      type: 'ปลากัดหางสั้น',
      bettaName: 'HALFMOON PLAKAD COPPER',
      mainImage: '/images/copper-betta.jpg',
      thumbnails: [
        '/images/copper-betta.jpg',
        '/images/images-detail/copper-betta-2.jpg',
        '/images/images-detail/copper-betta-3.jpg'
      ],
      PKC: 'HMPK : 01',
      price: '150'
    },
    {
      route: 'Half_Moon-PK-NEMO-GALAXY',
      type: 'ปลากัดหางสั้น',
      bettaName: 'HALFMOON PLAKAD NEMO GALAXY',
      mainImage: '/images/galaxy-betta.jpg',
      thumbnails: [
        '/images/galaxy-betta.jpg',
        '/images/images-detail/galaxy-betta-2.jpg',
        '/images/images-detail/galaxy-betta-3.jpg'
      ],
      PKC: 'HMPK : 02',
      price: '200'
    },
    {
      route: 'Half_Moon-PK-BLACK-DRAGON',
      type: 'ปลากัดหางสั้น',
      bettaName: 'HALFMOON PLAKAD BLACK DRAGON',
      mainImage: '/images/HMPK BLACK DRAGON.jpg',
      thumbnails: [
        '/images/HMPK BLACK DRAGON.jpg',
        '/images/images-detail/HMPK BLACK DRAGON-2.jpg',
        '/images/images-detail/HMPK BLACK DRAGON-3.jpg'
      ],
      PKC: 'HMPK : 02',
      price: '200'
    },
    {
      route: 'Half_Moon-PK-DUMBO-RED',
      type: 'ปลากัดหูช้าง',
      bettaName: 'HALFMOON PLAKAD DUMBO RED',
      mainImage: '/images/HMPK DUMBO.jpg',
      thumbnails: [
        '/images/HMPK DUMBO.jpg',
        '/images/images-detail/HMPK DUMBO-2.jpg',
        '/images/images-detail/HMPK DUMBO-3.jpg'
      ],
      PKC: 'HMPD : 01',
      price: '400'
    },
    {
      route: 'Half_Moon-PK-DUMBO-BLUE',
      type: 'ปลากัดหูช้าง',
      bettaName: 'HALFMOON PLAKAD DUMBO BLUE',
      mainImage: '/images/HMPK DUMBO BLUE.jpg',
      thumbnails: [
        '/images/HMPK DUMBO BLUE.jpg',
        '/images/images-detail/HMPK DUMBO BLUE-2.jpg',
        '/images/images-detail/HMPK DUMBO BLUE-2.jpg'
      ],
      PKC: 'HMPD : 02',
      price: '400'
    },
    {
      route: 'Half_Moon-PK-CROWN-TAIL-FANCY',
      type: 'ปลากัดหางหนาม',
      bettaName: 'CROWN TAIL FANCY',
      mainImage: '/images/CT FANCY.jpg',
      thumbnails: [
        '/images/CT FANCY.jpg',
        '/images/images-detail/CT FANCY-2.jpg',
        '/images/images-detail/CT FANCY-2.jpg'
      ],
      PKC: 'HMCT : 01',
      price: '500'
    },
    // เพิ่มสินค้าอื่น ๆ ในลักษณะเดียวกัน
  ];

products.forEach(product => {
  app.get(`/${product.route}`, (req, res) => {
    res.render('product', { product });
  });
});

// กำหนด route สำหรับหน้าเว็บหลัก
app.get('/', (req, res) => {
  res.render('index', { req: req, title, products});
});

app.get('/cart', (req, res) => {
  const name = req.query.name;
  const price = req.query.price;
  const img = req.query.img;

  // ตรวจสอบถ้ามีข้อมูลสินค้า
  const hasProduct = name && price && img;

  res.render('cart', { name, price, img, hasProduct });
});


app.get('/payment', (req, res) => {
  res.render('payment');
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
