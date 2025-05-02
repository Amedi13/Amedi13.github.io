// personal.js

// Handle form submission for the contact section
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const response = document.getElementById("formResponse");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        response.style.color = "red";
        response.textContent = "Please fill in all fields.";
        return;
      }
  
      // Display fake confirmation (no backend connected)
      response.style.color = "green";
      response.textContent = `Thank you, ${name}! Your message has been received.`;
      form.reset();
    });
  });
  