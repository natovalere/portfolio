// ----------------------------
// ANIMATION BARRES DE COMPETENCES
// ----------------------------
window.addEventListener("scroll", () => {
    const skills = document.querySelectorAll(".skill-fill");
    skills.forEach(skill => {
        const rect = skill.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            skill.style.width = skill.dataset.value + "%";
        }
    });
});

// ----------------------------
// SCROLL ANIMATION POUR SECTIONS
// ----------------------------
const sections = document.querySelectorAll("section");
const options = { threshold: 0.1 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, options);

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// ----------------------------
// FORMULAIRE CONTACT SIMPLE
// ----------------------------
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Merci ! Votre message a été envoyé.");
    contactForm.reset();
});
