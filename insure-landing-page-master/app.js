const toggle = document.querySelector(".toggle-section");
const navbar = document.querySelector(".navbar");
const removeNav = document.querySelector(".remove-nav");

toggle.addEventListener('click', () => {
    navbar.classList.toggle("show");
    removeNav.classList.toggle("active");
});