//class instant(object)
class Student{
    //data(property/attribute/field) = ตัวแปร
    fname : string = ""
    age : number = 0

    //constructor
    constructor(){
        console.log('DTI SAU')
    }

    //method = ฟังก์ชั่น
    showInfo(){
        console.log(`Hi..${this.fname}`)
        console.log(`Your age..${this.age}`)
    }

}

let ob1 = new Student()
let ob2 = new Student()

ob1.fname = 'student'
ob1.age = 20
ob1.showInfo()