const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

const hanburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hanburger.addEventListener("click", () => {
  hanburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) => n.addEventListener("click", () => { 
	hanburger.classList.remove("active");
	navMenu.classList.remove("active");
}));
