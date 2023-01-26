const btnStarted = document.querySelector(".btn");
const slideStarted = document.querySelector(".content");

btnStarted.addEventListener("click", () => {
  slideStarted.classList.toggle("main");
  slideStarted.style.display = "flex";
  slideStarted.style.flexDirection = "column";
});

const faSharp = document.querySelector(".fa-sharp");
btnStarted.addEventListener("mouseenter", () => {
  faSharp.style.backgroundColor = "aqua";
});
btnStarted.addEventListener("mouseleave", () => {
  faSharp.style.backgroundColor = "rgba(138, 27, 27, 0.521)";
});
