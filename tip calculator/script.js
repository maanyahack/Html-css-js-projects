const button = document.getElementById("calculateBtn");
const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const totalAmountDisplay = document.getElementById("totalAmount");
function calculate(){
const bill=parseFloat(billAmountInput.value);
const tipPercentage=parseFloat(tipPercentageInput.value);
const total=bill+(bill*tipPercentage/100);
totalAmountDisplay.innerText="Total Amount: $"+total.toFixed(2);
}
button.addEventListener("click",calculate);