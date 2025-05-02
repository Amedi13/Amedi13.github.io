/**
 * FAQ page script
 */
document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
  });

  /**
   * Character Counter for Special Instructions Textarea
   */
  const notes = document.getElementById("notes");
  const maxChars = 200;

  // Only run if notes textarea exists
  if (notes) {
    const counter = document.createElement("p");
    counter.id = "char-count";
    counter.textContent = `Characters remaining: ${maxChars}`;
    notes.insertAdjacentElement("afterend", counter);

    notes.addEventListener("input", function () {
      const remaining = maxChars - notes.value.length;
      counter.textContent = `Characters remaining: ${remaining}`;
      counter.style.color = remaining < 20 ? "red" : "#555";
    });
  }

  /**
   * Order Form script for email notifications
   */
  emailjs.init("F8LX_k1hxmHosDP4n"); // EmailJS public key

  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_ijoniep", "template_l4cd5a7", this)
        .then(function () {
          alert("Order submitted and email sent successfully!");
          orderForm.reset();
        }, function (error) {
          alert("Failed to send email. Error: " + JSON.stringify(error));
        });
    });
  }
});
