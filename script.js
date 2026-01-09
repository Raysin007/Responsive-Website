const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const numbers = document.querySelectorAll(".num");

// 1. Select the element on top of the screen (CHANGE '.cart-count' to your actual class or ID)
const cartCountElement = document.querySelector(".cart-num");

// 2. Define a function to sum up all quantities
function updateCartTotal() {
    let totalQuantity = 0;
    
    // Loop through every product number on the page and add it to total
    numbers.forEach(num => {
        totalQuantity += parseInt(num.innerText, 10);
    });

    // Update the top element
    if (cartCountElement) {
        cartCountElement.innerText = totalQuantity;
    }
}

plusButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let value = parseInt(numbers[index].innerText, 10);
    if (value < 10) { 
        value++;
        numbers[index].innerText = value;
        
        // 3. Call the update function
        updateCartTotal(); 
    }
  });
});

minusButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let value = parseInt(numbers[index].innerText, 10);
    if (value > 0) { 
        value--;
        numbers[index].innerText = value;
        
        // 3. Call the update function
        updateCartTotal();
    }
  });
});
