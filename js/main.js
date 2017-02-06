let total = 0;
let currentCoin;
let coin = [].slice.call(document.getElementsByClassName('coin'));
const calcBtn = document.getElementById('calcBtn');
const newCoinInput = document.getElementById('newCoinInput');
const saveBtn = document.getElementById('saveBtn');
const userInput = document.getElementById('userInput');
const coinCount = document.getElementsByClassName('coinCount');
let coinValues = {};

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
};

// Coin values array is passed in and finds labels for coin count notifications.
function findCurrCoinCount(coinValues) {
  for(var i = 0; i < 4; i++) {
    let currCoinCount = coinCount[i];
    currCoinCount.innerHTML = '';
    for (var key in coinValues) {
      // key must match current coin and must have a value in matching key.
      if (key === coinCount[i].id && coinValues[key]) {
        currCoinCount.innerHTML = coinValues[key];
      };
    };
  };
};

calcBtn.onclick = function() {
  let userInput = self.userInput.value;
  let coinValuesArr = [];
  for(var key in coin) {
    coinValuesArr.push(coin[key].value);
  };
  coinValuesArr.sort((a,b) => b-a);

  coinValues = {
    coin1: 0,
    coin2: 0,
    coin3: 0,
    coin4: 0,
  };

  if(userInput >= coinValuesArr[0]) {
    coinValues.coin1 = Math.floor(userInput / coinValuesArr[0]);
    userInput -= (coinValues.coin1 * coinValuesArr[0]);
  };
  if(userInput >= coinValuesArr[1]) {
    coinValues.coin2 = Math.floor(userInput / coinValuesArr[1]);
    userInput -= (coinValues.coin2 * coinValuesArr[1]);
  };
  if(userInput >= coinValuesArr[2]) {
    coinValues.coin3 = Math.floor(userInput / coinValuesArr[2]);
    userInput -= (coinValues.coin3 * coinValuesArr[2]);
  };
  if(userInput >= coinValuesArr[3]) {
    coinValues.coin4 = Math.floor(userInput / coinValuesArr[3]);
    userInput -= (coinValues.coin4 * coinValuesArr[3]);
  };
  calcCoins(coinValues);
};

function calcCoins(coinValues) {
  console.log('coinValues:', coinValues);
  findCurrCoinCount(coinValues);
  for(var i =0; i< coinValues.length; i++) {
    let currCoin = coin[i];
    currCoin.value = coinValues[curr];
    total += coinValues[curr];
    changeInput(total);
  };
};
