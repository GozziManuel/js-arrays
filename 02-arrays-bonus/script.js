const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE
console.table(teachers);
// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
for (let i = teachers.length - 1; i >= 0; i--) {
  const teachersFor = teachers[i];
  console.log(teachersFor);
}
console.log("----------------------");
// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
for (let i = 0; i < teachers.length; i++) {
  const teachersFor = teachers[i];

  if (teachersFor.length >= 5) {
    console.log(teachersFor);
  }
}
// 3. Rimuovi 'Ed' dall'array teachers
console.log("-------------------------");
for (let i = 0; i < teachers.length; i++) {
  const teachersFor = teachers[i];

  if (teachersFor != "Ed") {
    console.log(teachersFor);
  }
}
// Method 2
// teachers.splice(, 1);
// console.table(teachers);
console.log("-------------------------");
// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const index = teachers.indexOf("Fabio");
if (index > 0) {
  console.log("present");
} else {
  console.log("not present");
}

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;
