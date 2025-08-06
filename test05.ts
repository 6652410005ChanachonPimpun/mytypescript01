//3. no paramiter has return
function funC(): string{
    console.log('GOGOGO')
    return 'MALL';
}

//4. have paramiter has return
function funD(n1 : number, n2: number, n3: number): number {
    return n1 + n2 + n3;
}

console.log(funC())
let result : number = funD(1, 2, 3);
console.log(result);