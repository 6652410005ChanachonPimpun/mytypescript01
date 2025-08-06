//function มี 4 ประเภท
//1. no parameters no return return
function funA() {
    console.log("Hello A")
}

//2. have parameters no return
function funB(param1: number, param2: string) {
    console.log(param1)
    console.log(param2)
}

funA()
funB(100, "Hello B") //arguments
funA()