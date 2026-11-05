const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const savedTheme = localStorage.getItem("tn-portfolio-theme");
if (savedTheme === "light") document.body.classList.add("light");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("tn-portfolio-theme", document.body.classList.contains("light") ? "light" : "dark");
});
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
