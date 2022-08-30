let numDisplay = document.getElementById("num");
let value = 0;

let buttonAdd = document.querySelector(".add");
let buttonReset = document.querySelector(".reset");
let buttonMinus = document.querySelector(".minus");

buttonAdd.addEventListener("click", () => {
  value++;
  numDisplay.textContent = value;
});

buttonMinus.addEventListener("click", () => {
  value--;
  numDisplay.textContent = value;
});

buttonReset.addEventListener("click", () => {
  value = 0;
  numDisplay.textContent = value;
});
