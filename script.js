const whatsappNumber = "51947182071"; // Número oficial, sin + ni espacios.
const defaultMessage = "Hola, quiero solicitar información sobre una consultoría con Qori Analytics.";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  const service = link.dataset.service;
  const message = service
    ? `Hola, quiero solicitar información sobre el servicio de ${service} de Qori Analytics.`
    : defaultMessage;
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}
