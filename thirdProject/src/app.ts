const userName = 'max';
// let age = 20;

// age = 29;

function add(a: number, b: number = 1): number {
  let result;
  result = a + b;
  return result;
}
console.log(add(2));

const addNumber = (a: number, b: number) => a + b;

console.log(addNumber(2, 5));

const printOutput = (output: string | number) => console.log(output);
printOutput(addNumber(5, 2));

//spread operator
const hobbies = ['Sports', 'Cooking', 'anjay'];
const activeHobbies = ['Haking'];

activeHobbies.push(...hobbies);

const person = {
  name: 'Max',
  age: 30,
};

const copiedPerson = { ...person, idiocity: 99 };

const addv2 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const addSomeNumber = addv2(5, 10, 2, 3.7);

console.log(addSomeNumber);

//array distracting
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...anyHobbies] = hobbies;

console.log(hobby1, hobby2, anyHobbies);

const { age } = person;
