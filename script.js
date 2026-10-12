// Toggle the mobile menu when the menu button is clicked
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("active");
});

// Simple contact form validation
const form = document.getElementById("contact-form");
const formMsg = document.getElementById("form-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the form from reloading the page

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    formMsg.style.color = "red";
    formMsg.textContent = "Please fill in all the fields.";
  } else {
    formMsg.style.color = "green";
    formMsg.textContent = "Thank you " + name + "! Your message has been sent.";
    form.reset(); // clear the form
  }
});