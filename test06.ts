//express function
//--- Anonymas function
let sum1 = function(n1:number, n2:number) {
    console.log(n1 + n2)
}

//--- Arrow function
let sum2 = (n1:number, n2:number) => {
    console.log(n1 + n2)
}

let sum3 = (n1:number, n2:number) : number => {
    return n1 + n2;
}

sum1(10, 20);
sum2(40, 80);
console.log(sum3(20, 50));