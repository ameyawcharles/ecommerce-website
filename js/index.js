// index.js

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}

// Function to initialize Paystack payment
function initializePaystack() {
  const paymentForm = {
    email: 'icharlesame@gmail.com', // Replace with the customer's email
    amount: 3000, // Replace with the total amount in kobo (e.g., 25000 for $250.00)
  };

  const handler = PaystackPop.setup({
    key: 'pk_test_880153fffcde76782349bacfc1427556a6d0b578', // Replace with your actual Paystack public key
    email: paymentForm.email,
    amount: paymentForm.amount,
    currency: 'GHS', // Replace with your desired currency code
    ref: 'PAYSTACK_' + Math.floor((Math.random() * 1000000000) + 1), // Replace with a unique reference for each transaction
    callback: function(response) {
      // Handle the payment success, e.g., redirect to a success page
      console.log(response);
      window.location.href = 'success.html';
    },
    onClose: function() {
      // Handle the case where the user closes the Paystack dialog
      console.log('Payment closed without completion');
    }
  });

  handler.openIframe();
}
