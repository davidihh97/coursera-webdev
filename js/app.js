/* =============================
   APP.JS – CUSTOM INTERACTIONS
============================= */

// Back to top button
const backToTop = document.createElement("button");
backToTop.id = "backToTop";
backToTop.innerHTML = "↑";
document.body.appendChild(backToTop);

// Show button after scrolling
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// Scroll to top when clicked
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth fade animation for cards on scroll
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.3 });

cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(40px)";
    observer.observe(card);
});

// Form submission alert (demo)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            alert("Your message has been sent successfully!");
        });
    }
});
