// JavaScript for scroll-triggered animations

window.addEventListener('scroll', function() {
    const paragraphs = document.querySelectorAll('p');
    
    paragraphs.forEach(p => {
        const rect = p.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            p.classList.add('scroll-active'); // Trigger the animation when in view
        }
    });

    // Parallax Scroll Effect for Backgrounds
    const parallax1 = document.querySelector('.parallax1');
    const parallax2 = document.querySelector('.parallax2');
    
    if (parallax1) {
        parallax1.style.transform = 'translateY(' + window.scrollY * 0.5 + 'px)';
    }
    
    if (parallax2) {
        parallax2.style.transform = 'translateY(' + window.scrollY * 0.5 + 'px)';
    }
});
