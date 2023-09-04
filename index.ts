import {fiveDigitNumberInput, firstButton, secondButton, thirdButton} from "./src/importer.js"
import {firstButtonHandler, secondButtonHandler, thirdButtonHandler, fiveDigitNumberInputHandler} from "./src/events.js"


firstButton?.addEventListener("click", firstButtonHandler);

secondButton?.addEventListener("click", secondButtonHandler);

thirdButton?.addEventListener("click", thirdButtonHandler);

fiveDigitNumberInput?.addEventListener("input", fiveDigitNumberInputHandler);

