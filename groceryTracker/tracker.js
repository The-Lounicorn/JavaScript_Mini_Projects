function calculateTotal() {
  // Get values from input fields
  let amount1 = parseFloat(document.getElementById('amount1').value) || 0;
  let amount2 = parseFloat(document.getElementById('amount2').value) || 0;
  let amount3 = parseFloat(document.getElementById('amount3').value) || 0;
  let amount4 = parseFloat(document.getElementById('amount4').value) || 0;
  let amount5 = parseFloat(document.getElementById('amount5').value) || 0;

  // Calculate total
  let total = amount1 + amount2 + amount3 + amount4 + amount5;

  // Display result
  let resultElement = document.getElementById('result');
  resultElement.textContent = `Total Monthly Grocery Amount: $${total.toFixed(2)}`;
}