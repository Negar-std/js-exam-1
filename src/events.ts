import {fiveDigitNumberInput} from "./importer.js"
import { getPrimesUpToN } from "./function.js";
import {primeNumbers } from "./state.js"; 

export const firstButtonHandler = () => {
    const randomNumber = Math.floor(10000 + Math.random() * 90000);;
  
    fiveDigitNumberInput!.value = randomNumber.toString();
}

export const secondButtonHandler = () => {
    
  const givenNumberString = fiveDigitNumberInput!.value;
  const givenNumber = +givenNumberString;

  if (isNaN(givenNumber) || givenNumber <= 0) {
    alert("Enter a valid number."); 
    return;
  }

  const primeNumbers = getPrimesUpToN(givenNumber);

  console.log("Prime numbers from 0 to", givenNumber, ":", primeNumbers);
}

export const thirdButtonHandler = () => {
    fiveDigitNumberInput!.value = ""; 
    primeNumbers.splice(0, primeNumbers.length);
    console.log("reset numbers");
}

export const fiveDigitNumberInputHandler = () => {
    const input = fiveDigitNumberInput!.value;
    const numberInput = +input;

    if (isNaN(numberInput) || numberInput <= 0) {
      alert("Enter a valid number.");
      fiveDigitNumberInput!.value = "";
    }
}