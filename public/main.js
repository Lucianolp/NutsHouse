let home = document.getElementById("verhome");
let nosotros = document.getElementById("vernosotros");
let productos = document.getElementById("verproductos");
let combos = document.getElementById("vercombos");
let contacto = document.getElementById("vercontacto");
const hamburguerMenu = document.querySelector(".hamburguer");

const menuActive = () => {
  hamburguerMenu.classList.toggle("active");
};
hamburguerMenu.addEventListener("click", menuActive);

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

home.addEventListener("click", function () {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    menuActive();
  } else {
    x.style.display = "block";
  }
});

nosotros.addEventListener("click", function () {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    menuActive();
  } else {
    x.style.display = "block";
  }
});
productos.addEventListener("click", function () {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    menuActive();
  } else {
    x.style.display = "block";
  }
});
combos.addEventListener("click", function () {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    menuActive();
  } else {
    x.style.display = "block";
  }
});
contacto.addEventListener("click", function () {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    menuActive();
  } else {
    x.style.display = "block";
  }
});
window.addEventListener("scroll", function () {
  let element = document.getElementById("aprovecha");
  let screenSize = window.innerHeight;

  if (element.getBoundingClientRect().top < screenSize) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});
window.addEventListener("scroll", function () {
  let element = document.getElementById("nuestros");
  let screenSize = window.innerHeight;

  if (element.getBoundingClientRect().top < screenSize) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
});
