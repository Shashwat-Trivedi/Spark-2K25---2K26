// SPARK Website JavaScript
// This file contains interactive functionality for the SPARK website

document.addEventListener('DOMContentLoaded', function() {
    console.log('SPARK Website loaded successfully!');
    
    // Initialize interactive elements
    initializeNavigation();
    initializeButtons();
    initializeTimeline();
    initializeScrollNavigation();
});

/**
 * Initialize scroll-based navigation functionality
 */
function initializeScrollNavigation() {
    const navigation = document.getElementById('bottomNav');
    if (!navigation) return;

    let lastScrollTop = 0;
    let scrollTimeout;
    let isNavigationVisible = true;
    
    // Initially show navigation
    navigation.classList.add('visible');
    navigation.classList.remove('hidden');

    function handleScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Clear existing timeout
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        // If at the top of the page, always show navigation
        if (currentScroll <= 100) {
            showNavigation();
            lastScrollTop = currentScroll;
            return;
        }

        // Determine scroll direction
        if (currentScroll > lastScrollTop) {
            // Scrolling down - hide navigation
            if (isNavigationVisible) {
                hideNavigation();
            }
        } else {
            // Scrolling up - show navigation
            if (!isNavigationVisible) {
                showNavigation();
            }
        }

        // Set timeout to show navigation after user stops scrolling
        scrollTimeout = setTimeout(() => {
            if (!isNavigationVisible) {
                showNavigation();
            }
        }, 1500);

        lastScrollTop = currentScroll;
    }

    function showNavigation() {
        navigation.classList.remove('hidden');
        navigation.classList.add('visible');
        isNavigationVisible = true;
    }

    function hideNavigation() {
        navigation.classList.remove('visible');
        navigation.classList.add('hidden');
        isNavigationVisible = false;
    }

    // Add scroll event listener with throttling
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Add touch support for mobile devices
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleTouchGesture();
    });

    function handleTouchGesture() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiping up (scrolling down) - hide navigation
                if (window.pageYOffset > 100) {
                    hideNavigation();
                }
            } else {
                // Swiping down (scrolling up) - show navigation
                showNavigation();
            }
        }
    }
}

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
            
            // Get the section to navigate to
            const section = this.getAttribute('data-section');
            
            // Smooth scroll to section (you can customize this based on your sections)
            if (section === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (section === 'about') {
                const aboutSection = document.querySelector('.about-spark-section');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (section === 'schedule') {
                const scheduleSection = document.querySelector('.about-details-section');
                if (scheduleSection) {
                    scheduleSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
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
