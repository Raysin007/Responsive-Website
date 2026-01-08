const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const numbers = document.querySelectorAll(".num");

plusButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let value = parseInt(numbers[index].innerText, 10);
    if (value < 10) value++;          
    numbers[index].innerText = value;
  });
});

minusButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let value = parseInt(numbers[index].innerText, 10);
    if (value > 0) value--;          
    numbers[index].innerText = value;
  });
});



