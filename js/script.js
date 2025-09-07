// Typing effect for "Hello, I'm ..."
const text = "Bina Paul";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  }
}
window.onload = typeEffect;

// Scroll animation for sections
const sections = document.querySelectorAll("section");

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
