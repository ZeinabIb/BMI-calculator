"use strict";

console.log("hi");

let bmi = 0;

document.querySelector(".done").addEventListener("click", function () {
  let weight = Number(document.querySelector(".weight").value);

  let height = Number(document.querySelector(".height").value);
  console.log(weight, height);

  function clacBMI(weight, height) {
    bmi = weight / Math.pow(height, 2);

    return bmi;
  }

  bmi = clacBMI(weight, height);
  console.log(bmi);

  document.querySelector(".bmi").textContent = bmi;

  if (bmi <= 18.5) {
    displayMessage("Underweight!");
  } else if (bmi > 18.5 && bmi < 25) {
    displayMessage("Healthy weight!");
  } else if (bmi > 25 && bmi < 30) {
    displayMessage("Overweight");
  } else if (bmi >= 30) {
    displayMessage("Obesity");
  } else {
    displayMessage("wrong inputs!");
  }
});

const displayMessage = function (message) {
  document.querySelector(".desc").textContent = message;
};
