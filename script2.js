document.addEventListener("DOMContentLoaded", () => {
    // Handle all FAQ buttons
    for (let i = 1; i <= 5; i++) {
        let faqButton = document.querySelector(`#faq-${i}`);
        
        if (faqButton) {
            faqButton.addEventListener("click", (e) => {
                e.preventDefault(); // Prevent any default behavior
                console.log(`FAQ ${i} button clicked`);
            });
        }
    }
});