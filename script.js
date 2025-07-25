document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initial setup - hide elements that will be animated
    gsap.set([
        ".spark-icon",
        ".divider-text",
        ".spark-title",
        ".description-first-line",
        ".description-second-line",
        ".gradient-button",
        ".resource-button",
        ".hero-image",
        ".about-spark-card",
        ".timeline-header-content",
        ".timeline-event-content",
        ".event-header-content",
        ".event-content-wrapper",
        ".qr-wrapper",
        ".inquires-faq-button",
        ".faq"
    ], {
        opacity: 0,
        y: 50
    });

    // Hero Section Animations
    
    // 1. Spark Icon entrance with rotation
    gsap.to(".spark-icon", {
        opacity: 1,
        y: 0,
        rotation: 360,
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: 0.3
    });

    // 2. "It all starts with a" text with typing effect
    gsap.to(".divider-text", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.8
    });

    // 3. SPARK title with scale and glow effect
    gsap.timeline({ delay: 1.2 })
        .to(".spark-title", {
            opacity: 1,
            y: 0,
            scale: 1.1,
            duration: 1,
            ease: "elastic.out(1, 0.5)"
        })
        .to(".spark-title", {
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
        });

    // 4. Corner dots animation
    gsap.fromTo(".about-corner-dot", {
        scale: 0,
        rotation: 0
    }, {
        scale: 1,
        rotation: 180,
        duration: 0.8,
        ease: "back.out(2)",
        stagger: 0.1,
        delay: 1.8
    });

    // 5. Description lines with stagger
    gsap.to([".description-first-line", ".description-second-line"], {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        delay: 2.2
    });

    // 6. Buttons with bounce effect
    gsap.to([".gradient-button", ".resource-button"], {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.2,
        delay: 2.8
    });

    // 7. Hero image with parallax and reveal effect
    gsap.to(".hero-image", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 3.2
    });

    // Parallax effect for hero images
    gsap.to(".blurred-image", {
        y: -50,
        scrollTrigger: {
            trigger: ".hero-image-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    gsap.to(".sharp-image", {
        y: -30,
        scrollTrigger: {
            trigger: ".hero-image-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    // About Spark Section Animations
    ScrollTrigger.create({
        trigger: ".about-spark-section",
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
            gsap.to(".about-spark-card", {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out"
            });
        }
    });

    // Timeline Section Animations
    ScrollTrigger.create({
        trigger: ".about-details-section",
        start: "top 80%",
        onEnter: () => {
            gsap.timeline()
                .to(".timeline-header-content", {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out"
                })
                .to(".timeline-event-content", {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    stagger: 0.3
                }, "-=0.5");
        }
    });

    // Events Section Animations
    ScrollTrigger.create({
        trigger: ".events-containner",
        start: "top 80%",
        onEnter: () => {
            gsap.to(".event-header-content", {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            });
        }
    });

    // Individual event cards with stagger
    gsap.utils.toArray(".event-content-wrapper").forEach((card, i) => {
        ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            onEnter: () => {
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    delay: i * 0.2
                });
            }
        });
    });

    // QR Section Animation
    ScrollTrigger.create({
        trigger: ".qr-container",
        start: "top 80%",
        onEnter: () => {
            gsap.to(".qr-wrapper", {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out"
            });
        }
    });

    // FAQ Section Animations
    ScrollTrigger.create({
        trigger: ".faq-section",
        start: "top 80%",
        onEnter: () => {
            gsap.timeline()
                .to(".inquires-faq-button", {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out"
                })
                .to(".faq", {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.15
                }, "-=0.5");
        }
    });

    // Enhanced FAQ Button Interactions
    for (let i = 1; i <= 5; i++) {
        let faqButton = document.querySelector(`#faq-${i}`);
        
        if (faqButton) {
            // Add hover animations
            faqButton.addEventListener("mouseenter", () => {
                gsap.to(faqButton, {
                    scale: 1.1,
                    rotation: 45,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            faqButton.addEventListener("mouseleave", () => {
                gsap.to(faqButton, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            faqButton.addEventListener("click", (e) => {
                e.preventDefault();
                
                // Find the parent FAQ container and then the answer
                let faqContainer = faqButton.closest('.faq');
                let faqAnswer = faqContainer.querySelector('.faq-answer');
                
                // Check if answer is currently visible
                const isVisible = faqAnswer.classList.contains('show');
                
                if (!isVisible) {
                    // Show animation
                    faqAnswer.classList.add('show');
                    gsap.fromTo(faqAnswer, {
                        height: 0,
                        opacity: 0
                    }, {
                        height: "auto",
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out"
                    });
                    
                    // Rotate button
                    gsap.to(faqButton.querySelector('.faq-button-image'), {
                        rotation: 180,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                } else {
                    // Hide animation
                    gsap.to(faqAnswer, {
                        height: 0,
                        opacity: 0,
                        duration: 0.4,
                        ease: "power2.in",
                        onComplete: () => {
                            faqAnswer.classList.remove('show');
                        }
                    });
                    
                    // Reset button rotation
                    gsap.to(faqButton.querySelector('.faq-button-image'), {
                        rotation: 0,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                }
                
                console.log(`FAQ ${i} button clicked`);
            });
        }
    }

    // Button Hover Animations
    gsap.utils.toArray(".gradient-button, .event-button, .qr-button").forEach(button => {
        button.addEventListener("mouseenter", () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        button.addEventListener("mouseleave", () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Floating animation for corner dots
    gsap.to(".about-corner-dot", {
        y: -5,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2
    });

    // Continuous gentle rotation for spark icons
    gsap.to(".spark-icon img", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1
    });

    // Smooth scroll enhancement
    ScrollTrigger.refresh();
});