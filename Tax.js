// Tax calculation function
function calculateTax(income) {
  income = Number(income); // Ensure income is a number
  if (income <= 15600) {
    return income * 0.105;
  } else if (income <= 53500) {
    return 15600 * 0.105 + (income - 15600) * 0.175;
  } else if (income <= 78100) {
    return 15600 * 0.105 + (53500 - 15600) * 0.175 + (income - 53500) * 0.3;
  } else if (income <= 180000) {
    return (
      15600 * 0.105 +
      (53500 - 15600) * 0.175 +
      (78100 - 53500) * 0.3 +
      (income - 78100) * 0.33
    );
  } else {
    return (
      15600 * 0.105 +
      (53500 - 15600) * 0.175 +
      (78100 - 53500) * 0.3 +
      (180000 - 78100) * 0.33 +
      (income - 180000) * 0.39
    );
  }
}

// Get DOM elements
const button = document.querySelector("button");
const input = document.querySelector("input");
const taxResult = document.querySelector(".tax");

// Add event listener to the button
button.addEventListener("click", function () {
  const income = input.value;
  const tax = calculateTax(income);
  taxResult.textContent = `Tax : $${tax.toFixed(2)}`;
  taxResult.style.color = "#45a049";
});
document.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const income = input.value;
    const tax = calculateTax(income);
    taxResult.textContent = `Tax : $${tax.toFixed(2)}`;
  }
});
