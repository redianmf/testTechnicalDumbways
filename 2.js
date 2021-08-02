// Buatlah function untuk dapat mengurutkan beberapa kata dalam string yang diberikan. Setiap kata akan memiliki sebuah angka. Angka tersebut akan menentukan posisi kata tersebut diurutkan.

const urutKata = (kalimat) => {

let kata = kalimat.matchAll(/(\S+\d\S+)/g);

let urutkan = function (a,b) {
    return (Number(a.match(/(\S+\d\S+)/g)[0]) - Number((b.match(/(\S+\d\S+)/g)[0])));
}

let arrayUrut = kata.sort(urutkan);

if (kalimat ="") {
    return "";
} else {return (arrayUrut.join(" "));}

}