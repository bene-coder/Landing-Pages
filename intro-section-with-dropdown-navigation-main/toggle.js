const navSector = document.querySelectorAll(".nav-sector");
const select = document.querySelectorAll(".select");
const navContent = document.querySelectorAll(".nav-content");
const toggle = document.querySelector(".toggle-section");
const navbar = document.querySelector(".navbar");
const close = document.querySelector(".close");
const open = document.querySelector(".open");
const dropDown = document.querySelectorAll(".drop-down")

navContent.forEach((element, idx) => {
    element.addEventListener("click", () => {
        select[idx].classList.toggle("active");
        dropDown[idx].classList.toggle("drop-up");
    });
});

toggle.addEventListener("click", () => {
    navbar.classList.toggle("show");
    close.classList.toggle("active");
    open.classList.toggle("close-open");
})