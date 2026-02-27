function showTab(tabId) {
    // Remove active class from all buttons and content
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    // Add active class to selected button and content
    // We find the button that has the onclick with this tabId
    const targetBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(tabId));
    if (targetBtn) targetBtn.classList.add('active');
    
    const targetContent = document.getElementById(tabId);
    if (targetContent) targetContent.classList.add('active');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Reveal animations on scroll
const revealOnScroll = () => {
    const revealElements = document.querySelectorAll('.card, .content-block, .trend-card');
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Initial setup for reveal animations
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.card, .content-block, .trend-card');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
    });
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load
});
