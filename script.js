// Update these values before publishing your portfolio.
const portfolioConfig = {
  email: "YOUR_EMAIL@example.com",
  linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/",
  github: "https://github.com/YOUR-GITHUB-USERNAME/"
};

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const emailLink = document.getElementById("email-link");
const emailRow = document.getElementById("contact-email-row");
emailLink.textContent = portfolioConfig.email;
emailLink.href = `mailto:${portfolioConfig.email}`;
emailRow.href = `mailto:${portfolioConfig.email}`;

document.querySelectorAll(".contact-links a").forEach((link) => {
  const label = link.querySelector("b")?.textContent;
  if (label === "LinkedIn") link.href = portfolioConfig.linkedin;
  if (label === "GitHub") link.href = portfolioConfig.github;
});
