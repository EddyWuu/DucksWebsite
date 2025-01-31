document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = this.getAttribute('href');

        if (target.includes('.html')) {
            return; 
        }

        e.preventDefault();
        const section = document.querySelector(target);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
