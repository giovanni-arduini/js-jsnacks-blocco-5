const zucchine = [
  { type: "Napoletana", weight: 10, length: 4 },
  { type: "Trombetta", weight: 13, length: 16 },
  { type: "Napoletana", weight: 4, length: 23 },
  { type: "Trombetta", weight: 11, length: 6 },
  { type: "Napoletana", weight: 2, length: 17 },
  { type: "Romana", weight: 5, length: 10 },
  { type: "Romana", weight: 7, length: 9 },
  { type: "Trombetta", weight: 3, length: 8 },
  { type: "Calabrese", weight: 6, length: 27 },
  { type: "Calabrese", weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

// // Versione ottimizzata: si fa solo un ciclo con verifica e push
// let shorterZucchini = [];
// let longerZucchini = [];

// for (let i = 0; i < zucchine.length; i++) {
//   const currentElement = zucchine[i];

//   if (currentElement.length > 15) {
//     longerZucchini.push(currentElement);
//   } else shorterZucchini.push(currentElement);
// }

// console.log(longerZucchini);
// console.log(shorterZucchini);

//

// versione con metodo filter, ripetuto due volte sull'array di partenza

const shorterZucchini = zucchine.filter(({ length }) => length < 15);
console.log(shorterZucchini);

const longerZucchini = zucchine.filter(({ length }) => length >= 15);
console.log(longerZucchini);
