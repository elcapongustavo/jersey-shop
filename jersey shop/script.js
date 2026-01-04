// Greeting + Date
const greeting = document.getElementById("greeting");
const date = document.getElementById("date");
if (greeting && date) {
  const now = new Date();
  const hours = now.getHours();
  let timeGreeting = "Good evening";
  if (hours < 12) timeGreeting = "Good morning";
  else if (hours < 18) timeGreeting = "Good afternoon";
  greeting.textContent = `${timeGreeting}, welcome to Jersey Shop!`;
  date.textContent = `Today's date: ${now.toDateString()}`;
}

// Shopping Cart
let cartCount = 0;
const cartDisplay = document.getElementById("cart-count");
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartDisplay.textContent = cartCount;
  });
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  theme