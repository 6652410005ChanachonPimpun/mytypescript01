//ประกาศตัวแปร JS (let var const)
//let data1 ไม่ error

//ประกาศตัวแปร TS (let const)
//let data1 error
let data1 :number
let data2 :string
let data3 :boolean //let เปลี่ยนค่าได้ ต้องกำหนดประเภทข้อมูลตลอด
const data4 :number = 10 //const เปลี่ยนค่าไม่ได้
const data5 :string = "Hello"

data1 = 20
console.log(data4)
console.log(data1 + data4)