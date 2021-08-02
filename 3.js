// Buatlah sebuah function untuk membentuk sebuah segitiga siku-siku dengan ketentuan sebagai berikut:
// Input user berupa panjang alas dan tinggi segitiga (alas dan tingginya sama) dengan ketentuan :
// 0 < Alas/Tinggi < 10
// Segitiga dibentuk dengan deret angka prima yang terus berlanjut meskipun barisnya berganti.
// Output berupa segitiga siku-siku



function primeNumber(n) {
    let arr = [2];
    for (let i = 3; i <= n; i += 2)
        if (!((i % 3 == 0 && i > 3) || (i % 5 == 0 && i > 5) || (i % 7 == 0 && i > 7) || (i % 9 == 0 && i > 9))) {
            arr.push(i);
        }
    return arr;
}

let bilanganPrima = primeNumber(500);

const segitiga =(input) => {
    for(var i=1;i<=input;i++){
        for(var j=1;j<=i;j++){
            console.log(bilanganPrima);
        }
        console.log('<br>');
    }}