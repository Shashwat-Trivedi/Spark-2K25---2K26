// FAQ Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get all question elements
  const questions = document.querySelectorAll(".question");
  const faqArrows = document.querySelectorAll(".faq-arrow");

  // Add click event listener to each question
  questions.forEach((question, index) => {
    question.addEventListener("click", function () {
      const answer = question.nextElementSibling;
      const arrow = question.querySelector(".faq-arrow");

      // Toggle the current answer
      if (answer.style.maxHeight === "" || answer.style.maxHeight === "0px") {
        // Show the current answer smoothly
        answer.style.display = "block";
        // Force a reflow to ensure accurate scrollHeight calculation
        answer.offsetHeight;
        // Use a more robust height calculation with extra space for padding and margins
        const contentHeight = answer.scrollHeight + 60; // Add extra padding for safety
        answer.style.maxHeight = contentHeight + "px";
        answer.style.opacity = "1";
        answer.style.paddingTop = "24px";

        // Rotate the arrow
        if (arrow) {
          arrow.style.transform = "rotate(180deg)";
          arrow.style.transition = "transform 0.3s ease";
        }

        // Add active class to question
        question.classList.add("active");

        // Hide all other answers
        questions.forEach((otherQuestion, otherIndex) => {
          if (otherIndex !== index) {
            const otherAnswer = otherQuestion.nextElementSibling;
            const otherArrow = otherQuestion.querySelector(".faq-arrow");

            otherAnswer.style.maxHeight = "0px";
            otherAnswer.style.opacity = "0";
            otherAnswer.style.paddingTop = "0px";
            otherQuestion.classList.remove("active");

            // Hide display after animation
            setTimeout(() => {
              otherAnswer.style.display = "none";
            }, 450);

            if (otherArrow) {
              otherArrow.style.transform = "rotate(0deg)";
              otherArrow.style.transition = "transform 0.4s ease";
            }
          }
        });
      } else {
        // Hide the current answer smoothly
        answer.style.maxHeight = "0px";
        answer.style.opacity = "0";
        answer.style.paddingTop = "0px";
        question.classList.remove("active");
        
        // Hide display after animation completes
        setTimeout(() => {
          answer.style.display = "none";
        }, 450);

        // Reset arrow rotation
        if (arrow) {
          arrow.style.transform = "rotate(0deg)";
          arrow.style.transition = "transform 0.3s ease";
        }
      }
    });

    // Add hover effect to question
    question.addEventListener("mouseenter", function () {
      question.style.cursor = "pointer";
      const questionText = question.querySelector(".question-text");
      if (questionText && !question.classList.contains("active")) {
        questionText.style.color = "#FF812A";
        questionText.style.transition = "color 0.2s ease";
      }
    });

    question.addEventListener("mouseleave", function () {
      const questionText = question.querySelector(".question-text");
      if (questionText && !question.classList.contains("active")) {
        questionText.style.color = "#9F9F9F";
      }
    });
  });

  // Add click event to arrows specifically (with event propagation stopped)
  faqArrows.forEach((arrow, index) => {
    arrow.addEventListener("click", function (e) {
      e.stopPropagation();
      // Trigger the parent question click
      arrow.closest(".question").click();
    });
  });
});
