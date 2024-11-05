function calculateInterest() {
  // Get input values
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100;
  const time = parseFloat(document.getElementById("time").value);

  // Validate inputs
  if (
    isNaN(principal) ||
    principal <= 0 ||
    isNaN(rate) ||
    rate < 0 ||
    isNaN(time) ||
    time <= 0
  ) {
    document.getElementById("result").innerText =
      "Please enter valid positive numbers.";
    return;
  }

  // Calculate interest and total amount
  const interest = principal * rate * time;
  const total = principal + interest;

  // Update result text
  document.getElementById(
    "result"
  ).innerText = `With an initial principal of $${principal.toFixed(
    2
  )} and with a growth rate of ${
    rate * 100
  }% for ${time} years, your total interest will be $${interest.toFixed(
    2
  )} with a grand total of $${total.toFixed(2)}.`;
}
