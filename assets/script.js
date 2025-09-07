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
