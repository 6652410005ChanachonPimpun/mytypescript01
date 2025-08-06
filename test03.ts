//data type (number, string, boolean, array, object)
let data1 : number
data1 = 20

let data2 : string
data2 = "Hello"
data2 = 'World'
data2 = 'uuu'

let data3 : boolean
data3 = true
data3 = false

let data4 : string[] = []
data4[0] = "hfder"
data4[1] = "asad"
data4[2] = "rthf"
// data4[3] = 55555 error ข้อมูลใน array ต้องเป็นประเภทเดียวกัน

let data5 : (string | number | boolean)[] = []
data5[0] = "Hello"
data5[1] = 100
data5[2] = 200
data5[3] = 777
data5[4] = true

let data6 : number[] = [1, 2, 3, 4, 5]

let data7 : {
    name: string,
    age: number,
    saraly: number
}

data7 = {
    name: "Andrew",
    age: 30,
    saraly: 50000.00
}

console.log(data7.name)
console.log(data7.age)
console.log(data7.saraly)