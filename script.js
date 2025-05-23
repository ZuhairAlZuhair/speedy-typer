const textElement = document.getElementById('text-to-type');
const inputElement = document.getElementById('user-input');
const startButton = document.getElementById('start-button');
const resultElement = document.getElementById('result');

const sampleText = "The quick brown fox jumps over the lazy dog.";
let startTime;

startButton.addEventListener('click', () => {
  textElement.textContent = sampleText;
  inputElement.value = '';
  inputElement.disabled = false;
  inputElement.focus();
  resultElement.textContent = '';
  startTime = new Date().getTime();
});

inputElement.addEventListener('input', () => {
  const currentInput = inputElement.value;
  if (currentInput === sampleText) {
    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000; // seconds
    const words = sampleText.split(" ").length;
    const speed = (words / timeTaken).toFixed(2);
    resultElement.textContent = `Your typing speed is ${speed} words per second!`;
    inputElement.disabled = true;
  }
});
