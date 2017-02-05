let total = 0;
let currentCoin;
let coin = [].slice.call(document.getElementsByClassName('coin'));
const calcBtn = document.getElementById('calcBtn');
const newCoinInput = document.getElementById('newCoinInput');
const saveBtn = document.getElementById('saveBtn');
const userInput = document.getElementById('userInput');
const coinCount = document.getElementsByClassName('coinCount');
const coinValues = {};

// Adds event handlers to coins and save button.
// Values of coins will change after save button is pressed.
function changeCoinValue() {
  for(var i = 0; i < 4; i++) {
    let currCoin = coin[i];
    currCoin.onclick = function () {
      currentCoin = this;
      newCoinInput.value = this.value;
    };
    saveBtn.onclick = function() {
      currentCoin.value = newCoinInput.value;
    };
  };
};

changeCoinValue();

// changes input that user enters
function changeInput(newInput) {
  userInput.value = newInput;
}

// Coin values array is passed in and finds labels for coin count notifications.
function findCurrCoinCount(coinValues) {
  for(var i = 0; i < 4; i++) {
    let currCoinCount = coinCount[i];
    currCoinCount.innerHTML = '';
    for (var key in coinValues) {
      // key must match current coin and must have a value in matching key.
      if (key === coinCount[i] && coinCount[key]) {
        currLabel.innerHTML = coinValues[key];
      }
    }
  }
}
