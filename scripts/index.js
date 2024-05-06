"use strict";

const theForm = document.querySelector("#theForm");
const toppings = document.querySelector("#toppings");
const showDiv = document.querySelector("#results");
// lisens out for page change but only reacts to cone or cup
addEventListener("change", (e) => {
  if (e.target.value === "cup") {
    document.querySelector("#toppings").style.display = "block";
  }
  if (e.target.value === "cone") {
    document.querySelector("#toppings").style.display = "none";
  }
});
// form info
theForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   number of scoops
  const radioBtnValue = e.target.coneOrCup.value;
  let scoop = e.target.numScoops.value;
  let totalCost = 0;
  let baseCost = 2.25;
  let taxRate = 0.07;
  let tax;
  let total;
  let varholde;
  const sprinkles = e.target.sprikles.checked;
  const whippedCream = e.target.whippedCream.checked;
  const hotFudge = e.target.hotFudge.checked;
  const cherry = e.target.cherry.checked;
  if (scoop == 1) {
    totalCost = baseCost;
  } else if (scoop > 1) {
    totalCost = scoop * 1.25 + baseCost;
    totalCost.toFixed(2);
  } else if (scoop <= 0) {
    tax = 0;
    total = 0;
    totalCost = 0;
  }

  if (radioBtnValue === "cup") {
    if (sprinkles) {
      totalCost += 0.5;
    }
    if (whippedCream) {
      totalCost += 0.25;
    }
    if (hotFudge) {
      totalCost += 1.25;
    }
    if (cherry) {
      totalCost += 0.25;
    }
  }
  tax = taxRate * baseCost;
  total = totalCost + tax;
  showDiv.innerHTML = `<div>
  <h2>Your Order</h2>
  <p>base price: ${totalCost.toFixed(2)}</p>
  <p>tax: ${tax.toFixed(2)}</p>
  <p>total: ${total.toFixed(2)}</p>
  </div>`;
});
