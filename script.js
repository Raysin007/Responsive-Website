const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const numbers = document.querySelectorAll(".num");
const minusButtons = document.querySelectorAll(".minus");     //Declaring constants//
const numbers = document.querySelectorAll(".num");    

plusButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let value = parseInt(numbers[index].innerText, 10);
    if (value < 10) value++;          
    if (value < 10) value++;          //Logic: this is for the + button (if value is smaller than 10 then increment the number//
    numbers[index].innerText = value;
  });
});

minusButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let value = parseInt(numbers[index].innerText, 10);
    if (value > 0) value--;          
    if (value > 0) value--;          //Logic: this is for the - button (if value is grater than 0 then decrement the number//
    numbers[index].innerText = value;
  });
});
