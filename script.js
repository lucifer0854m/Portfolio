/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuToggle.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

/* ==========================================
   CLOSE MENU AFTER CLICK
========================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.innerHTML =
            '<i class="fas fa-bars"></i>';

    });

});

/* ==========================================
   TYPING EFFECT
========================================== */

const typingElement = document.querySelector(".typing");

const words = [
    "Executive Admin",
    "Data Analyst",
    "Python Developer",
    "IT Professional",
    "Machine Learning Enthusiast"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex++;

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex--;

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

            letterIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

/* ==========================================
   STICKY HEADER
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(8,17,31,.95)";
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(8,17,31,.80)";
        header.style.boxShadow = "none";

    }

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

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

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
    ".card, .project-card, .timeline-item, .about-text, .contact-info, .contact-form"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});

/* ==========================================
   PRELOADER (OPTIONAL)
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================================
   CURRENT YEAR
========================================== */

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${year} Deepak Lodhi. All Rights Reserved.`;

}