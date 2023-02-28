const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");
const allMobileNavLinks = document.querySelectorAll(".nav__link");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

const handleNav = () => {
  navBtn.classList.toggle("is-active");
  navMobile.classList.toggle("nav-mobile--active");
  main.classList.add("main-off");

  allMobileNavLinks.forEach((item) => {
    item.addEventListener("click", () => {
      main.classList.remove("main-off");
      navMobile.classList.remove("nav-mobile--active");
      navBtn.classList.remove("is-active");
    });
  });
};

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};

handleCurrentYear();
navBtn.addEventListener("click", handleNav);
