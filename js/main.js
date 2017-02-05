let coin = [].slice.call(document.getElementsByClassName('coin'));
const calcBtn = document.getElementById('calcBtn');
const newCoinInput = document.getElementById('newCoinInput');
const saveBtn = document.getElementById('saveBtn');
let currentCoin;

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
