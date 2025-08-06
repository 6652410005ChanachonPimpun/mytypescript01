"use strict";
//ประกาศตัวแปร JS (let var const)
//let data1 ไม่ error
Object.defineProperty(exports, "__esModule", { value: true });
//ประกาศตัวแปร TS (let const)
//let data1 error
let data1;
let data2;
let data3; //let เปลี่ยนค่าได้ ต้องกำหนดประเภทข้อมูลตลอด
const data4 = 10; //const เปลี่ยนค่าไม่ได้
const data5 = "Hello";
data1 = 20;
console.log(data4);
console.log(data1 + data4);
//# sourceMappingURL=test02.js.map