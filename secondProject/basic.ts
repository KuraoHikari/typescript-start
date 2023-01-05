function add(n1: number, n2: number, printResult: boolean, textForResult: string) {
  const result = n1 + n2;
  if (printResult) {
    console.log(textForResult + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 20;
const printResult = true;
let textForResult: string;
textForResult = 'the res is Goes Brrrrr : ';

add(number1, number2, printResult, textForResult);
