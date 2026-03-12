//Egy 3x3-as mátrixot tölts fel 0 és 9 közötti véletlenszámokkal, majd írasd ki!
//a. Számold ki a számok összegét soronként!
//b. Számold ki a számok összegét oszloponként!
//c. Sámold ki az átlók elemeinek összegét!

let matrix = []
let sor = 3
let oszlop = 3
let min = 0
let max = 9

for (let index = 0; index < sor; index++) {
    let matrixSor = []
    for (let j = 0; j < oszlop; j++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        matrixSor.push(randomNumber);
    }
    matrix.push(matrixSor);
}

console.log(matrix);

let matrixKiiratas = ''
for (const sor of matrix) {
    for (const element of sor) {
        matrixKiiratas += element + ' '
    }
    matrixKiiratas += '\n'
}

console.log(matrixKiiratas);

let matrixKiiratasFor = ''
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        matrixKiiratasFor += matrix[i][j] + ' '
    }
    matrixKiiratasFor += '\n'
}

console.log(matrixKiiratasFor);

// A 
let sorOsszegek = []
for (const sor of matrix) {
    let sorOsszeg = 0
    for (const element of sor) {
        sorOsszeg += element
    }
    sorOsszegek.push(sorOsszeg)
}

console.log(sorOsszegek);
for (const element of sorOsszegek) {
    console.log(element);
}

// B
let oszlopOsszegek = []
for (let i = 0; i < matrix.length; i++) {
    let oszlopOsszeg = 0
    for (let j = 0; j < matrix[i].length; j++) {
        oszlopOsszeg += matrix[j][i]
    }
    console.log(oszlopOsszeg);
}