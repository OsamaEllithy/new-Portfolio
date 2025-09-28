document.addEventListener("DOMContentLoaded", () => {
    // ==== Banner Animation ====
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.image-container');

    heroContent.style.opacity = 0;
    heroContent.style.transform = 'translateY(50px)';
    heroContent.style.transition = 'all 1.8s ease';

    heroImage.style.opacity = 0;
    heroImage.style.transform = 'translateY(50px)';
    heroImage.style.transition = 'all 1.8s ease';

    setTimeout(() => {
        heroContent.style.opacity = 1;
        heroContent.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        heroImage.style.opacity = 1;
        heroImage.style.transform = 'translateY(0)';
    }, 1000);

    // ==== Portfolio Animation ====
    const portfolioCards = document.querySelectorAll('.card');
    const portfolioObserver = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 500);
                portfolioObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    portfolioCards.forEach(card => {
        portfolioObserver.observe(card);
    });

    // ==== Services Animation ====
    const serviceCards = document.querySelectorAll('.category');
    const serviceObserver = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 500);
                serviceObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    serviceCards.forEach(card => {
        serviceObserver.observe(card);
    });

    // ==== Skills Animation ====
    const skillsSection = document.querySelector('.about-skills-section');
    const progressBars = document.querySelectorAll('.progress-bar');
    let animated = false;

    const animateSkills = () => {
        progressBars.forEach(bar => {
            const fill = bar.querySelector('.fill');
            const percentage = bar.getAttribute('data-percentage');
            fill.style.width = percentage;
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animateSkills();
                animated = true;
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);

    // ==== EmailJS ====

    emailjs.init("NTqo8rbbQ9PXIPbsO");

    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            emailjs.sendForm("service_izdf1ic", "template_loabj7m", form)
                .then(function () {
                    alert("✅ Your message has been sent successfully. Thank you!");
                    form.reset();
                }, function (error) {
                    alert("⚠️ Oops! Something went wrong. Please try again later.");
                    console.error("EmailJS Error:", error);
                });
        });
    }
});

// ==== Flip Animation for Portfolio ====
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const inner = card.querySelector('.card-inner');
    card.addEventListener('mouseenter', () => {
        anime({
            targets: inner,
            rotateY: '180deg',
            easing: 'easeInOutQuad',
            duration: 500,
        });
    });

    card.addEventListener('mouseleave', () => {
        anime({
            targets: inner,
            rotateY: '0deg',
            easing: 'easeInOutQuad',
            duration: 500,
        });
    });
});

        // ==== Scroll Top Button ====
        const scrollBtn = document.querySelector('.scroll-top-btn');

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        function openForm() {
            document.getElementById("contactForm").style.display = "flex";
        }

        function closeForm() {
            document.getElementById("contactForm").style.display = "none";
        }

        window.addEventListener("scroll", function() {
            const serviceSection = document.querySelector(".service");
            const aboutSection = document.querySelector(".about-skills-section");
            const navLinks = document.querySelectorAll(".navbar nav a, .navbar a");

            const triggerPoint = window.innerHeight * 0.1;

            const serviceRect = serviceSection.getBoundingClientRect();
            const aboutRect = aboutSection.getBoundingClientRect();

            const inService = serviceRect.top <= triggerPoint && serviceRect.bottom >= triggerPoint;
            const inAbout = aboutRect.top <= triggerPoint && aboutRect.bottom >= triggerPoint;

            navLinks.forEach(link => {
                if (inService || inAbout) {
                    link.classList.add("blue-links");
                } else {
                    link.classList.remove("blue-links");
                }
            });
        });

        function toggleMenu() {
            const nav = document.querySelector(".navbar nav");
            nav.classList.toggle("active");
        }

        // ==== CV Button ====
        let change;
        document.getElementById("cv").onclick = () => {
            change = document.getElementById("cv").textContent = 'Downloaded';
            change = document.getElementById("cv").style.backgroundColor = '#25d366';
            setTimeout(() => {
                change = document.getElementById("cv").textContent = 'Download CV';
                change = document.getElementById("cv").style.backgroundColor = '#0073ff';
            }, 5000)
        }
