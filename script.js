/* ============================
   Smooth Scroll
============================ */

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/* ============================
   Sticky Navbar
============================ */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


/* ============================
   Active Navigation
============================ */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* ============================
   Scroll Animation
============================ */

const revealElements = document.querySelectorAll(".card, .project, .timeline-item");

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


/* ============================
   Typewriter Effect
============================ */

const roles = [
    "Executive Administrator",
    "Python Developer",
    "Data Analyst",
    "Machine Learning Enthusiast",
    "AWS Learner"
];

let roleIndex = 0;
let charIndex = 0;

const title = document.querySelector(".hero-text h2");

function typeWriter() {

    if (!title) return;

    if (charIndex < roles[roleIndex].length) {

        title.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, 80);

    } else {

        setTimeout(eraseWriter, 2000);

    }

}

function eraseWriter() {

    if (charIndex > 0) {

        title.textContent = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseWriter, 40);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        setTimeout(typeWriter, 300);

    }

}

title.textContent = "";

typeWriter();


/* ============================
   Back To Top Button
============================ */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ============================
   Hero Image Animation
============================ */

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    setInterval(() => {

        heroImage.classList.toggle("floating");

    }, 2000);

}


/* ============================
   Theme Toggle
============================ */

const themeBtn = document.createElement("button");

themeBtn.innerHTML = "🌙";

themeBtn.id = "themeBtn";

document.body.appendChild(themeBtn);

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.innerHTML = "☀";

    } else {

        themeBtn.innerHTML = "🌙";

    }

});


/* ============================
   Contact Form Validation
============================ */

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

            alert("Please fill all fields.");

        }

    });

}


/* ============================
   Fade-In on Load
============================ */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});