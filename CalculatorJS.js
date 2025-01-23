// just comment
//*important
//?what the fuck
//!alert
//TODO
////this is not nessasary

//define all vars
const backspaceB = document.getElementById("button-delete-one");
const clearB = document.getElementById("button-clear");
const persentB = document.getElementById("button-percent");
const divideB = document.getElementById("button-divide");
const oneB = document.getElementById("button-1");
const twoB = document.getElementById("button-2");
const threeB = document.getElementById("button-3");
const minusB = document.getElementById("button-minus");
const fourB = document.getElementById("button-4");
const fiveB = document.getElementById("button-5");
const sixB = document.getElementById("button-6");
const plusB = document.getElementById("button-plus");
const sevenB = document.getElementById("button-7");
const eightB = document.getElementById("button-8");
const nineB = document.getElementById("button-9");
const multiplyB = document.getElementById("button-multiply");
const zeroB = document.getElementById("button-0");
const pointB = document.getElementById("button-point");
const equalB = document.getElementById("button-equal");

const container = document.getElementById("output-box");
const textElement = document.getElementById("output-text");
const arrayDisplay = document.getElementById("test-array-box");

const memoryArray = []; //array of input numbers

//function to display input button value
const display = (input) => {
  textElement.innerText += `${input.value}`;
  memoryArray.push(input.value);
  arrayDisplay.innerText += memoryArray; 
    // adjustFontSize();
};

//function for clear button to delete everything output have
const clear = () => {
  output.innerText = "";
  //also do something with memory array
};

//*from Athena on decreasing font size
// function adjustFontSize() {
//   let fontSize = 70; // Starting font size in pixels
//   textElement.style.fontSize = fontSize + "px";

//   while (
//     textElement.scrollWidth > container.clientWidth ||
//     textElement.scrollHeight > container.clientHeight
//   ) {
//     fontSize -= 1; // Decrease font size
//     textElement.style.fontSize = fontSize + "px";
//   }
// }