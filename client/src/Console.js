// function to handle production console log. Turn off when deploy
const productionState = true;

const Console = {
  log: (...args) => {
    if (productionState) {
      console.log(...args);
    }
  },
};

export default Console;
