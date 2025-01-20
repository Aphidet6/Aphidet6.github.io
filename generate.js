const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// โหลดไฟล์ EJS
const templatePath = path.join(__dirname, 'views', 'index.ejs');
const template = fs.readFileSync(templatePath, 'utf-8');

// ข้อมูลที่ต้องการส่งไปยังไฟล์ EJS
const data = {
    name: 'Earth'
};

// คอมไพล์ EJS เป็น HTML
const output = ejs.render(template, data);

// สร้างไฟล์ HTML
const outputPath = path.join(__dirname, 'dist', 'index.html');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output);

console.log('HTML file generated successfully at: ' + outputPath);
