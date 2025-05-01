/**
 * Faqs page script
 */
 // Wait for the page to fully load
 document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((button) => {
      button.addEventListener("click", () => {
        const answer = button.nextElementSibling;

        // Toggle visibility
        answer.style.display = (answer.style.display === "block") ? "none" : "block";
      });
    });
  });


  /**
   * Order Form script for email notifcaitons
   * This script is used to send an email notification when the order form is submitted.
   */
  // EmailJS integration
  emailjs.init("F8LX_k1hxmHosDP4n"); //public key

  document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_ijoniep", "template_l4cd5a7", this)
      .then(function () {
        alert("Order submitted and email sent successfully!");
        document.getElementById("orderForm").reset();
      }, function (error) {
        alert("Failed to send email. Error: " + JSON.stringify(error));
      });
  });