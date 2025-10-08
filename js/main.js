/**
 * Main JavaScript for Technology Monastery Website
 * Vanilla JS - No dependencies required
 */

(function() {
    'use strict';

    // ===================================
    // Mobile Menu Toggle
    // ===================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ===================================
    // Smooth Scrolling for Anchor Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for empty hash or just '#'
            if (href === '#' || href === '') return;

            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update focus for accessibility
                target.setAttribute('tabindex', '-1');
                target.focus();
            }
        });
    });

    // ===================================
    // Lazy Loading Images
    // ===================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ===================================
    // Scroll Animations
    // ===================================
    const observeElements = () => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        // Observe service cards and impact cards
        document.querySelectorAll('.service-card, .impact-card').forEach(el => {
            observer.observe(el);
        });
    };

    // Only run animations if user hasn't requested reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        observeElements();
    }

    // ===================================
    // External Widget Integrations
    // ===================================

    /**
     * Initialize Zeffy Donation Form
     * Documentation: https://www.zeffy.com/en-US/embed
     */
    const initZeffyForm = () => {
        const zeffyContainer = document.getElementById('zeffy-donation-form');
        if (!zeffyContainer) return;

        // Zeffy integration will be added once organization ID is available
        // Example implementation:
        // const script = document.createElement('script');
        // script.src = 'https://www.zeffy.com/embed/donation-form/ORGANIZATION_ID';
        // script.async = true;
        // zeffyContainer.appendChild(script);
        
        console.log('Zeffy donation form placeholder ready. Add organization ID to activate.');
    };

    /**
     * Initialize VolunteerMatch Widget
     * Documentation: https://www.volunteermatch.org/
     */
    const initVolunteerMatchWidget = () => {
        const vmContainer = document.getElementById('volunteer-widget');
        if (!vmContainer) return;

        // VolunteerMatch integration will be added once organization is registered
        // Example implementation based on their widget code
        console.log('VolunteerMatch widget placeholder ready. Add organization ID to activate.');
    };

    // ===================================
    // Analytics & Tracking (via Cloudflare Zaraz)
    // ===================================
    const trackEvent = (eventName, eventData = {}) => {
        // Cloudflare Zaraz will handle this automatically once configured
        // Events can be tracked via zaraz.track()
        if (window.zaraz) {
            window.zaraz.track(eventName, eventData);
        } else {
            console.log('Analytics event:', eventName, eventData);
        }
    };

    // Track CTA clicks
    document.querySelectorAll('.btn, .cta-link').forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.textContent.trim();
            const buttonHref = e.target.getAttribute('href');
            trackEvent('cta_click', {
                text: buttonText,
                href: buttonHref
            });
        });
    });

    // ===================================
    // Form Validation (if forms are added)
    // ===================================
    const validateForm = (form) => {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
                input.setAttribute('aria-invalid', 'true');
            } else {
                input.classList.remove('error');
                input.setAttribute('aria-invalid', 'false');
            }
        });

        return isValid;
    };

    // ===================================
    // Accessibility Enhancements
    // ===================================
    
    // Add aria-current to active navigation link based on scroll position
    const updateActiveNavLink = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
        
        let current = '';
        const scrollPosition = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.removeAttribute('aria-current');
            if (link.getAttribute('href') === `#${current}`) {
                link.setAttribute('aria-current', 'page');
            }
        });
    };

    // Throttle scroll events for performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(() => {
            updateActiveNavLink();
        });
    });

    // ===================================
    // Performance Monitoring
    // ===================================
    const logPerformance = () => {
        if ('performance' in window && 'timing' in window.performance) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            
            console.log('Page load time:', pageLoadTime + 'ms');
            
            // Track with analytics
            trackEvent('performance', {
                pageLoadTime: pageLoadTime,
                dnsTime: perfData.domainLookupEnd - perfData.domainLookupStart,
                tcpTime: perfData.connectEnd - perfData.connectStart,
                renderTime: perfData.domComplete - perfData.domLoading
            });
        }
    };

    // ===================================
    // Initialization
    // ===================================
    const init = () => {
        console.log('Technology Monastery website initialized');
        
        // Initialize widgets
        initZeffyForm();
        initVolunteerMatchWidget();

        // Log performance after page loads
        if (document.readyState === 'complete') {
            logPerformance();
        } else {
            window.addEventListener('load', logPerformance);
        }

        // Initial nav link update
        updateActiveNavLink();
    };

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ===================================
    // Service Worker Registration (for PWA support - optional)
    // ===================================
    if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registered:', registration);
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed:', err);
                });
        });
    }

})();
