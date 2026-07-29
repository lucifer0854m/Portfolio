/* ==========================================
   PORTFOLIO SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =============================
       MOBILE MENU
    ============================== */

    const menuBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            menuBtn.classList.toggle("open");

        });

    }

    /* =============================
       SMOOTH NAVIGATION
    ============================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

                if (navLinks) {

                    navLinks.classList.remove("active");

                }

            }

        });

    });

    /* =============================
       ACTIVE NAV LINK
    ============================== */

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (window.scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* =============================
       NAVBAR SHADOW
    ============================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 8px 30px rgba(0,0,0,.35)";

        } else {

            header.style.boxShadow = "none";

        }

    });

    /* =============================
       SCROLL REVEAL
    ============================== */

    const revealElements = document.querySelectorAll(

        ".card, .project-card, .timeline-item, .counter-box, .about-container"

    );

    const reveal = () => {

        revealElements.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                el.style.opacity = "1";
                el.style.transform = "translateY(0)";

            }

        });

    };

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = ".8s";

    });

    window.addEventListener("scroll", reveal);

    reveal();

    /* =============================
       TYPING EFFECT
    ============================== */

    const typingElement = document.querySelector(".hero-text h2");

    if (typingElement) {

        const words = [

            "Executive Admin",

            "Data Analyst",

            "Python Developer",

            "IT Professional"

        ];

        let wordIndex = 0;
        let letterIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(0, letterIndex++);

                if (letterIndex > currentWord.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1200);

                    return;

                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, letterIndex--);

                if (letterIndex < 0) {

                    deleting = false;

                    wordIndex = (wordIndex + 1) % words.length;

                }

            }

            setTimeout(typeEffect, deleting ? 60 : 120);

        }

        typeEffect();

    }

    /* =============================
       COUNTER
    ============================== */

    const counters = document.querySelectorAll(".counter-box h2");

    counters.forEach(counter => {

        const text = counter.innerText.replace("+", "");

        const target = parseInt(text);

        if (!isNaN(target)) {

            let value = 0;

            const interval = setInterval(() => {

                value++;

                counter.innerHTML = value + "+";

                if (value >= target) {

                    clearInterval(interval);

                }

            }, 60);

        }

    });

    /* =============================
       BACK TO TOP
    ============================== */

    const topButton = document.querySelector(".scroll-top");

    window.addEventListener("scroll", () => {

        if (!topButton) return;

        if (window.scrollY > 400) {

            topButton.style.opacity = "1";
            topButton.style.visibility = "visible";

        } else {

            topButton.style.opacity = "0";
            topButton.style.visibility = "hidden";

        }

    });

    /* =============================
       CONTACT FORM
    ============================== */

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Thank you! Your message has been received.");

            form.reset();

        });

    }

});