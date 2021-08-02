// Buatlah sebuah function untuk mengecek apakah sebuah angka yang diinputkan adalah bilangan palindrom atau bukan.
// *Palindrom merupakan sebuah bilangan yang jika dibalik maka penulisannya tetap sama. Contoh: 16461, 1001

// Input: 1001
// Output: 1001 merupakan bilangan palindrom


const palindrom = (angka) => {
    let reverse = angka.split('').reverse().join('');
    if (angka===reverse) {
        console.log(angka+" merupakan bilangan palindrom");
    }
}
