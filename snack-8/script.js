const students = [
  {
    id: 1,
    name: "Marco Lanci",
    age: 32,
    class: "3C",
  },
  {
    id: 2,
    name: "Mario Banfi",
    age: 34,
    class: "4A",
  },
  {
    id: 3,
    name: "Luigi Banzi",
    age: 33,
    class: "5B",
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

const foundStudentClass = students.find(
  ({ name }) => name === "Marco Lanci"
).class;

console.log(foundStudentClass);

// //
// // soluzione in forma di funzione
// function findStudentClass(studentName) {
//   return students.find(({ name }) => name === studentName).class;
// }

// console.log(findStudentClass("Marco Lanci"));
