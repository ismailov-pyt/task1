// + 1USD = 10654 UZS
// + 1EUR = 12674 UZS

let input = prompt("Qiymat kiring: ")
input = Number(input)
let USD = input / 10654
let EUR = input / 12674

alert(`${input} UZS == ${USD} , ${Math.round(USD)} USD\n${input} UZS == ${EUR} , ${Math.round(EUR)} EUR`)