var billamount = document.getElementById('billAmount');
var tippercentage = document.getElementById('tipPercentage');
var calculatebtn = document.getElementById('calculateTip');
var tipresult = document.getElementById('tipResult');
calculatebtn.addEventListener('click', function() {
    var bill = parseFloat(billamount.value);
    var tipPercent = parseFloat(tippercentage.value);  
    var tip = (tipPercent / 100) * bill;
    tipresult.textContent = 'Tip Amount: $' + tip.toFixed(2);
});