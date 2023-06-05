// Truthy and Falsy

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Thanh'));
console.log(Boolean({}));
console.log(Boolean(''));

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas) {
   console.log('scoreDolphins win the trophy');
} else if (scoreKoalas < scoreDolphins) {
   console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
   console.log('Both win the trophy');
}