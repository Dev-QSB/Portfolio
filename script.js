document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const projects = document.querySelectorAll('.project');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    projects.forEach(project => {
        project.addEventListener('click', () => {
            projects.forEach(p => p.classList.remove('active'));
            project.classList.add('active');
        });
    });
});
