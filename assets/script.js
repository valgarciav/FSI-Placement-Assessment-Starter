// HINT: You can delete this console.log after you no longer need it!
console.log("JavaScript code has loaded!");

let yourName = "Valeria Garcia";

// We'll use these variables to track the counts of each cookie type
// These will represent the number values that you can use to display on the page
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle
let total = 0; //Total

// selecting the element with an id of credit
const credit = document.querySelector("#credit");

// BUTTONS
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector("#add-gb");
const gbMinusBtn = document.querySelector("#minus-gb");

//Selecting the element with an id of add-cc
const ccPlusBtn = document.querySelector("#add-cc");
const ccMinusBtn = document.querySelector("#minus-cc");

//Selecting the element with an id of add-sugar
const sugarPlusBtn = document.querySelector("#add-sugar");
const sugarMinusBtn = document.querySelector("#minus-sugar");

// TOTALS for gb
const gbTotal = document.querySelector("#qty-gb");
const qtyTotal = document.querySelector("#qty-total");

//Totals for cc
const ccTotal = document.querySelector("#qty-cc");

//Totals for sugar
const sugarTotal = document.querySelector("#qty-sugar");

// Code to update name display
credit.textContent = `Created by ${yourName}`;

// Event listener for clicks on the "+" & '-' button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function () {
  gb++;
  gbTotal.textContent = gb;
  total++;
  qtyTotal.textContent = total;
});
gbMinusBtn.addEventListener("click", function () {
  if (gb > 0) {
    gb--;
    gbTotal.textContent = gb;
    total--;
    qtyTotal.textContent = total;
  }
});
// Event Listener for '+' & '-' on chocolate chip cookies
ccPlusBtn.addEventListener("click", function () {
  cc++;
  ccTotal.textContent = cc;
  total++;
  qtyTotal.textContent = total;
});
ccMinusBtn.addEventListener("click", function () {
  if (cc > 0) {
    cc--;
    ccTotal.textContent = cc;
    total--;
    qtyTotal.textContent = total;
  }
});
// Event Listener for the "+" & "-" on sugar cookies
sugarPlusBtn.addEventListener("click", function () {
  sugar++;
  sugarTotal.textContent = sugar;
  total++;
  qtyTotal.textContent = total;
});
sugarMinusBtn.addEventListener("click", function () {
  if (sugar > 0) {
    sugar--;
    sugarTotal.textContent = sugar;
    total--;
    qtyTotal.textContent = total;
  }
});
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

// HINT: You can delete this console.log after you no longer need it!
console.log("Gingerbread + button was clicked!");
