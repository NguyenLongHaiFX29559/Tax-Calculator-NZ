// Tax calculation function with detailed breakdown
function calculateTax(income) {
  income = Number(income); // Ensure income is a number
  let tax = 0;
  let calculations = [];

  if (income <= 15600) {
    tax = income * 0.105;
    calculations.push(`$${income.toFixed(2)} x 10.5% = $${tax.toFixed(2)}`);
  } else {
    // First bracket
    tax += 15600 * 0.105;
    calculations.push(`$15,600 x 10.5% = $${(15600 * 0.105).toFixed(2)}`);

    if (income <= 53500) {
      let secondBracketTax = (income - 15600) * 0.175;
      tax += secondBracketTax;
      calculations.push(
        `$${(income - 15600).toFixed(2)} x 17.5% = $${secondBracketTax.toFixed(
          2
        )}`
      );
    } else {
      // Second bracket
      tax += (53500 - 15600) * 0.175;
      calculations.push(
        `$37,900 x 17.5% = $${((53500 - 15600) * 0.175).toFixed(2)}`
      );

      if (income <= 78100) {
        let thirdBracketTax = (income - 53500) * 0.3;
        tax += thirdBracketTax;
        calculations.push(
          `$${(income - 53500).toFixed(2)} x 30% = $${thirdBracketTax.toFixed(
            2
          )}`
        );
      } else {
        // Third bracket
        tax += (78100 - 53500) * 0.3;
        calculations.push(
          `$24,600 x 30% = $${((78100 - 53500) * 0.3).toFixed(2)}`
        );

        if (income <= 180000) {
          let fourthBracketTax = (income - 78100) * 0.33;
          tax += fourthBracketTax;
          calculations.push(
            `$${(income - 78100).toFixed(
              2
            )} x 33% = $${fourthBracketTax.toFixed(2)}`
          );
        } else {
          // Fourth bracket
          tax += (180000 - 78100) * 0.33;
          calculations.push(
            `$101,900 x 33% = $${((180000 - 78100) * 0.33).toFixed(2)}`
          );

          // Fifth bracket
          let fifthBracketTax = (income - 180000) * 0.39;
          tax += fifthBracketTax;
          calculations.push(
            `$${(income - 180000).toFixed(
              2
            )} x 39% = $${fifthBracketTax.toFixed(2)}`
          );
        }
      }
    }
  }

  return { tax, calculations };
}

// Get DOM elements
const button = document.getElementById("calculate-btn");
const input = document.getElementById("income-input");
const taxResult = document.querySelector(".tax");
const calculationsList = document.getElementById("calculations-list");

// Function to update the UI with tax calculation results
function updateTaxResults(income) {
  const { tax, calculations } = calculateTax(income);

  // Update total tax amount
  taxResult.textContent = `Tax : $${tax}`;

  // Clear previous calculations
  calculationsList.innerHTML = "";

  // Add new calculations
  calculations.forEach((calc) => {
    const li = document.createElement("li");
    li.textContent = calc;
    calculationsList.appendChild(li);
  });
}

// Add event listener to the button
button.addEventListener("click", function () {
  const income = input.value;
  updateTaxResults(income);
  taxResult.style.color = "limegreen";
});

// Add event listener for Enter key press
input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const income = input.value;
    updateTaxResults(income);
    taxResult.style.color = "limegreen";
    calculationsList.style.color = "orangered";
  }
});

// Tax calculation function (remains the same as before)

// Get DOM elements
const toggleBtn = document.getElementById("toggle-breakdown");
const breakdown = document.getElementById("breakdown");

// Function to update the UI with tax calculation results
function updateTaxResults(income) {
  const { tax, calculations } = calculateTax(income);

  // Update total tax amount
  taxResult.textContent = `Tax : $${tax.toFixed(2)}`;

  // Clear previous calculations
  calculationsList.innerHTML = "";

  // Add new calculations
  calculations.forEach((calc) => {
    const li = document.createElement("li");
    li.textContent = calc;
    calculationsList.appendChild(li);
  });

  // Show the toggle button
  toggleBtn.style.display = "block";
}

// Toggle breakdown visibility
toggleBtn.addEventListener("click", function () {
  breakdown.classList.toggle("hidden");
  toggleBtn.textContent = breakdown.classList.contains("hidden")
    ? "Show Breakdown"
    : "Hide Breakdown";
});

// Initially hide the toggle button
toggleBtn.style.display = "none";
