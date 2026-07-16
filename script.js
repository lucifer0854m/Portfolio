/*====================================================
        MOBILE HAMBURGER MENU
=====================================================*/

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

        } else {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

    document.querySelectorAll("#nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        });

    });

}

/*====================================================
        SMOOTH SCROLL
=====================================================*/

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*====================================================
        STICKY NAVBAR
=====================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/*====================================================
        ACTIVE NAVIGATION
=====================================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("#nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.pageYOffset >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

/*====================================================
        SCROLL REVEAL ANIMATION
=====================================================*/

const revealItems = document.querySelectorAll(

    ".card, .project, .timeline-item"

);

function revealOnScroll() {

    revealItems.forEach(item => {

        const windowHeight = window.innerHeight;

        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < windowHeight - 120) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/*====================================================
        TYPEWRITER EFFECT
=====================================================*/

const roles = [
    "Executive Administrator",
    "Python Developer",
    "Data Analyst",
    "Machine Learning Enthusiast",
    "AWS Cloud Learner"
];

let roleIndex = 0;
let charIndex = 0;

const heroTitle = document.querySelector(".hero-text h2");

function typeWriter() {

    if (!heroTitle) return;

    if (charIndex < roles[roleIndex].length) {

        heroTitle.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, 80);

    } else {

        setTimeout(eraseWriter, 1800);

    }

}

function eraseWriter() {

    if (charIndex > 0) {

        heroTitle.textContent = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseWriter, 40);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        setTimeout(typeWriter, 250);

    }

}

if (heroTitle) {

    heroTitle.textContent = "";

    typeWriter();

}

/*====================================================
        BACK TO TOP BUTTON
=====================================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*====================================================
        THEME TOGGLE
=====================================================*/

const themeBtn = document.getElementById("themeBtn");

function enableLightMode() {

    document.body.classList.add("light-mode");

    if (themeBtn) {

        themeBtn.textContent = "☀";

    }

}

function enableDarkMode() {

    document.body.classList.remove("light-mode");

    if (themeBtn) {

        themeBtn.textContent = "🌙";

    }

}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    enableLightMode();

}

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        if (document.body.classList.contains("light-mode")) {

            enableDarkMode();

            localStorage.setItem("theme", "dark");

        } else {

            enableLightMode();

            localStorage.setItem("theme", "light");

        }

    });

}

/*====================================================
        HERO IMAGE FLOATING EFFECT
=====================================================*/

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    heroImage.addEventListener("mouseenter", () => {

        heroImage.style.transform = "scale(1.06)";

    });

    heroImage.addEventListener("mouseleave", () => {

        heroImage.style.transform = "";

    });

}

/*====================================================
        CONTACT FORM VALIDATION
=====================================================*/

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.border = "2px solid red";

            } else {

                input.style.border = "";

            }

        });

        if (!valid) {

            e.preventDefault();

            alert("Please fill in all required fields.");

        }

    });

}

/*====================================================
        PAGE FADE IN
=====================================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

/*====================================================
        CURRENT YEAR IN FOOTER (OPTIONAL)
=====================================================*/

const footerYear = document.querySelector("#year");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}