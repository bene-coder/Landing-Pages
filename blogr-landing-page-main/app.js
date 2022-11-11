const navContent = document.querySelectorAll(".nav-content");
const navSelect = document.querySelectorAll(".nav-select");
const toggle = document.querySelector(".toggle-section");
const navSector = document.querySelector(".nav-section");
const removeToggle = document.querySelector(".remove-toggle");
const toggleBtn = document.querySelector(".toggle");
const arrow = document.querySelectorAll(".arrow");
const arrrow = document.querySelectorAll(".arrow-2")

navContent.forEach((element, idx) => {
  element.addEventListener("click", () => {
    navSelect[idx].classList.toggle("active");
    arrow[idx].classList.toggle("arrow-active");
    arrrow[idx].classList.toggle("arrow-active");

  });
});


toggle.addEventListener("click", () => {
  navSector.classList.toggle("show");
  removeToggle.classList.toggle("close-active");
  toggleBtn.classList.toggle("toggle-btn-hide")

});

// function checkForClick() {

// }