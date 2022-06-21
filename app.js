// EXAMPLE 1
// This code is not DRY
const pets = ['Cat', 'Dog', 'Bird', 'Fish', 'Frog', 'Hamster', 'Pig', 'Horse', 'Lion', 'Dragon'];
// Print all pets
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);

// We can make it DRY by doing the following:
for (i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

// EXAMPLE 2
const greet = (message, name) => {
  console.log(`${message}, ${name}!`)
}

greet('Hello', 'John');
greet('Hola', 'Antonio');
greet('Ciao', 'Luigi')
  