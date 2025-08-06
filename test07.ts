//function: Optional parameter 
//คือ parameter ที่จะรับค่า agument หรือไม่ก็ได้
function fun01(n1: number, n2: number, n3?: number){
    if(typeof n3 !== 'undefined'){
        console.log(n1 + n2 + n3);
    }else {
    console.log(n1 + n2)
    }
}

fun01(10, 20, 30);
fun01(10, 20);

//funvtion: Default parameter
function fun02(n1: number, n2: number, n3: number = 100){
    console.log(n1 + n2 + n3);
}

fun02(10, 20, 30);
fun02(10, 20);