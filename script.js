/**
 * Enhanced Portfolio Website JavaScript
 * Features: Typing effect, smooth scrolling, scroll animations, header effects
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        typing: {
            text: "software engineer.",
            speed: 110,
            cursorClass: 'typing'
        },
        scroll: {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        },
        animations: {
            duration: 600,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }
    };

    // State management
    let isScrolling = false;
    let scrollTimeout;

    // ===== INITIALIZATION =====
    function init() {
        try {
            initTypingEffect();
            initScrollAnimations();
            initHeaderEffects();
            initSmoothScrolling();
            initActiveNavigation();
            initPerformanceMonitoring();
            initErrorHandling();
            initParallaxEffects();
            initSkillAnimations();
            
            console.log('🚀 Portfolio website initialized successfully');
        } catch (error) {
            console.error('❌ Error initializing portfolio website:', error);
        }
    }

    // ===== TYPING EFFECT =====
    function initTypingEffect() {
    const typingElement = document.getElementById('typing-effect');

        if (!typingElement) {
            console.warn('Typing effect element not found');
            return;
        }

        let index = 0;
        
        function typeCharacter() {
            if (index < CONFIG.typing.text.length) {
                typingElement.textContent += CONFIG.typing.text.charAt(index);
            index++;
                setTimeout(typeCharacter, CONFIG.typing.speed);
            }
        }

        // Start typing effect with delay
        setTimeout(() => {
            try {
                typeCharacter();
            } catch (error) {
                console.error('Error with typing effect:', error);
                typingElement.textContent = CONFIG.typing.text;
            }
        }, 1000);
    }

    // ===== SCROLL ANIMATIONS =====
    function initScrollAnimations() {
        const observerOptions = {
            threshold: CONFIG.scroll.threshold,
            rootMargin: CONFIG.scroll.rootMargin
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        // Observe all scroll-reveal elements
        const revealElements = document.querySelectorAll('.scroll-reveal');
        revealElements.forEach(el => observer.observe(el));

        // Add stagger effect to cards
        const cardElements = document.querySelectorAll('.project-card, .skill-category, .experience-card');
        cardElements.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }

    // ===== NAVIGATION EFFECTS =====
    function initHeaderEffects() {
        const nav = document.querySelector('.nav');
        
        if (!nav) return;

        function handleScroll() {
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }

        // Throttled scroll handler
        window.addEventListener('scroll', () => {
            if (!isScrolling) {
                requestAnimationFrame(() => {
                    handleScroll();
                    isScrolling = false;
                });
                isScrolling = true;
            }
        });
    }

    // ===== SMOOTH SCROLLING =====
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        console.log('Scrolling to:', targetId); // Debug log
                        scrollToElement(targetElement);
                        updateActiveNavigation(targetId);
                    } else {
                        console.log('Target element not found:', targetId); // Debug log
                    }
                }
            });
        });
    }

    function scrollToElement(element) {
        const navHeight = document.querySelector('.nav').offsetHeight;
        const elementPosition = element.offsetTop - navHeight - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }

    // ===== ACTIVE NAVIGATION =====
    function initActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        function updateActiveNav() {
            let currentSection = '';
            
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const navHeight = document.querySelector('.nav').offsetHeight;
                
                if (rect.top <= navHeight + 100 && rect.bottom >= navHeight + 100) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentSection) {
                    link.classList.add('active');
                }
            });
        }

        // Update on scroll with throttling
        window.addEventListener('scroll', () => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(updateActiveNav, 10);
        });
        
        // Initial check
        updateActiveNav();
    }

    function updateActiveNavigation(targetId) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + targetId) {
                link.classList.add('active');
            }
        });
    }

    // ===== PARALLAX EFFECTS =====
    function initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.hero-image');
        
        function updateParallax() {
            const scrollY = window.scrollY;
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                const yPos = -(scrollY * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        }

        window.addEventListener('scroll', () => {
            requestAnimationFrame(updateParallax);
        });
    }

    // ===== SKILL ANIMATIONS =====
    function initSkillAnimations() {
        const skillTags = document.querySelectorAll('.skill-tag');
        
        skillTags.forEach((tag, index) => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1) rotate(2deg)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    }

    // ===== INTERACTIVE ELEMENTS =====
    function initInteractiveElements() {
        // Project card hover effects
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Button ripple effect
        const buttons = document.querySelectorAll('.contact-button, .project-link');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // ===== PERFORMANCE MONITORING =====
    function initPerformanceMonitoring() {
        if ('performance' in window) {
            window.addEventListener('load', function() {
                setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                        const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                        console.log(`⚡ Page load time: ${loadTime}ms`);
                        
                        // Log performance metrics
                        if (loadTime > 3000) {
                            console.warn('⚠️ Page load time is slow, consider optimization');
                        }
                    }
                }, 0);
            });
        }

        // Monitor scroll performance
        let scrollCount = 0;
        window.addEventListener('scroll', () => {
            scrollCount++;
            if (scrollCount % 100 === 0) {
                console.log(`📊 Scroll events: ${scrollCount}`);
            }
        });
    }

    // ===== ERROR HANDLING =====
    function initErrorHandling() {
        window.addEventListener('error', function(event) {
            console.error('💥 JavaScript error:', event.error);
            
            // Send error to analytics (if available)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'exception', {
                    description: event.error.toString(),
                    fatal: false
                });
            }
        });
        
        window.addEventListener('unhandledrejection', function(event) {
            console.error('💥 Unhandled promise rejection:', event.reason);
        });
    }

    // ===== ACCESSIBILITY ENHANCEMENTS =====
    function initAccessibility() {
        // Skip to content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1001;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Keyboard navigation for project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.setAttribute('tabindex', '0');
            
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const link = this.querySelector('.project-link');
                    if (link) {
                        link.click();
                    }
                }
            });
        });
    }

    // ===== UTILITY FUNCTIONS =====
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // ===== INITIALIZE ALL FEATURES =====
    function startInitialization() {
        init();
        initInteractiveElements();
        initAccessibility();
        
        // Add loaded class to body for CSS animations
        document.body.classList.add('loaded');
    }

    // Start initialization based on document ready state
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startInitialization);
    } else {
        startInitialization();
    }

    // Export functions for potential external use
    window.Portfolio = {
        scrollToElement,
        updateActiveNavigation,
        CONFIG
    };

})();