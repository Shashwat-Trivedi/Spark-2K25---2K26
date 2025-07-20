// SPARK Website JavaScript
// This file contains interactive functionality for the SPARK website

document.addEventListener('DOMContentLoaded', function() {
    console.log('SPARK Website loaded successfully!');
    
    // Initialize interactive elements
    initializeNavigation();
    initializeButtons();
    initializeTimeline();
});

/**
 * Initialize navigation functionality
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // You can add smooth scrolling or page navigation here
            console.log(`Navigating to: ${this.textContent}`);
        });
    });
}

/**
 * Initialize button functionality
 */
function initializeButtons() {
    // Gradient button (Join OSS Club)
    const gradientButton = document.querySelector('.gradient-button');
    if (gradientButton) {
        gradientButton.addEventListener('click', function() {
            alert('OSS Club registration will be opening soon! Stay tuned for updates.');
        });
    }
    
    // Notes button
    const outlineButton = document.querySelector('.outline-button');
    if (outlineButton) {
        outlineButton.addEventListener('click', function() {
            // You can implement notes download or redirect functionality here
            window.open('#', '_blank'); // Placeholder URL
        });
    }
    
    // Resource buttons
    const resourceButtons = document.querySelectorAll('.resource-button');
    resourceButtons.forEach(button => {
        button.addEventListener('click', function() {
            // You can implement resource download or redirect functionality here
            alert('Resources will be available during the session!');
        });
    });
}

/**
 * Initialize timeline functionality
 */
function initializeTimeline() {
    const timelineEvents = document.querySelectorAll('.timeline-event');
    
    timelineEvents.forEach(event => {
        event.addEventListener('click', function() {
            // Toggle active state or show more details
            if (!this.classList.contains('inactive')) {
                console.log('Timeline event clicked:', this);
                // You can add functionality to show more details about the event
            }
        });
    });
}

/**
 * Utility function for smooth scrolling
 */
function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Add animation effects on scroll (optional enhancement)
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe timeline events for animation
    document.querySelectorAll('.timeline-event').forEach(el => {
        observer.observe(el);
    });
}

// Call scroll animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeScrollAnimations, 1000);
});
