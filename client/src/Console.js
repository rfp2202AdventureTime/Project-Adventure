// function to handle production console log. Turn off when deploy
const productionState = true;

export default function Console(...args) {
  if (productionState) {
    console.log(...args);
  }
}
