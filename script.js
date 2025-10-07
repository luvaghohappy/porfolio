// 🌀 Hero Text Carousel
const texts = [
  "Building smart apps",
  "Designing for impact",
  "Empowering with AI",
  "Creating digital solutions"
];

let index = 0;
const textElement = document.querySelector(".carousel-text");

setInterval(() => {
  index = (index + 1) % texts.length;
  textElement.style.opacity = 0;
  setTimeout(() => {
    textElement.textContent = texts[index];
    textElement.style.opacity = 1;
  }, 500);
}, 3000);

// ✨ Scroll Reveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // trigger once on load
