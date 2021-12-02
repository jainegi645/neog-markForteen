var initialprice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function submitHandler() {
  var ip = initialprice.value;
  var qty = stocksQuantity.value;
  var curr = currentPrice.value;

  calculateProfitAndLoss(ip, qty, curr);
}
function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    outputBox.innerText = `hey the loss is ${loss} and the percenet is ${lossPercentage}%`;
    outputBox.style.color = "red";
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    outputBox.innerText = `hey the profit is ${profit} and the percentage is ${profitPercentage}%`;
    outputBox.style.color = "green";
  } else {
    outputBox.innerText = "no pain no gain";
  }
}

submitBtn.addEventListener("click", submitHandler);
