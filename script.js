const mobileOpenNav = document.querySelector("#mobile-open-nav");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  mobileOpenNav.classList.toggle("display-none");
  console.log("hello world");
});
