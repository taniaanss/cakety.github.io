const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const btnTop = document.querySelector("#btn-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    if (!btnTop.classList.contains("btnMuncul")) {
      btnTop.classList.remove("btnHilang");
      btnTop.classList.add("btnMuncul");
      btnTop.style.display = "block"; //muncul btn
      // const nav = document.querySelector('nav');
      // nav.style
    }
  } else {
    if (btnTop.classList.contains("btnMuncul")) {
      btnTop.classList.remove("btnMuncul");
      btnTop.classList.add("btnHilang");
      btnTop.style.display = "none"; //btn hilang
    }
  }
}

btnTop.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}

// const scrollNav = document.querySelector("nav");
// window.addEventListener("scroll", scrollFunction);
