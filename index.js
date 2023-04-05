// make year value dynamic

const yearEl = document.querySelector(".year");
const myYear = new Date().getFullYear();
yearEl.textContent = myYear;

// make mobile nav work
const btnNavEl = document.querySelector(".mobile-nav-btn");

const headerEL = document.querySelector(".main-header");
btnNavEl.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});
