let home = document.getElementById("verhome");
let nosotros = document.getElementById("vernosotros");
let productos = document.getElementById("verproductos");
let combos = document.getElementById("vercombos");
let contacto = document.getElementById("vercontacto");
const hamburguerMenu = document.querySelector(".hamburguer");

let precioMixCervecero750 = document.getElementById('precioMixCervecero750');
let precioMixCervecero350 = document.getElementById('precioMixCervecero350');
let precioManiSalado500 = document.getElementById('precioManiSalado500');
let precioMixEnergia250 = document.getElementById('precioMixEnergia250');
let precioMixEnergia500 = document.getElementById('precioMixEnergia500');
let precioMixEnergia1K = document.getElementById('precioMixEnergia1K');
let precioMixVigor250 = document.getElementById('precioMixVigor250');
let precioMixVigor500 = document.getElementById('precioMixVigor500');
let precioMixVigor1K = document.getElementById('precioMixVigor1K');
let precioMixVigorSinPasas500 = document.getElementById('precioMixVigorSinPasas500');
let precioGranolaMuesli250 = document.getElementById('precioGranolaMuesli250');
let precioGranolita250 = document.getElementById('precioGranolita250');
let precioDesayunoConPasas = document.getElementById('precioDesayunoConPasas');
let precioDesayunoSinPasas = document.getElementById('precioDesayunoSinPasas');
let precioComboJuntada = document.getElementById('precioComboJuntada')
let precioComboMixeado = document.getElementById('precioComboMixeado')

//Leer precios de GoogleSheets
fetch("https://docs.google.com/spreadsheets/d/1f52ckngd5jih40fI8CLB_ox5jAL4xdP2MnZmvJQO0Lk/gviz/tq?")
  .then(res => res.text())
  .then(data => {
    const temp = data.substring(47).slice(0,-2);
    const json = JSON.parse(temp)
    console.log(json.table.rows)
    mostrarPrecios(json);
  })
  .catch((error) => {
    console.error(error);
  });

// mostrar precios en cada producto 
// Solo cambiar el indice de rows para cada producto (json.table.rows[0].c[2].f)

const mostrarPrecios = (json) => {
  precioMixCervecero750.innerHTML = "$ " + json.table.rows[8].c[2].f;
  precioMixCervecero350.innerHTML = "$ " + json.table.rows[7].c[2].f;
  precioManiSalado500.innerHTML = "$ " + json.table.rows[9].c[2].f;
  precioMixEnergia250.innerHTML = "$ " + json.table.rows[4].c[2].f;
  precioMixEnergia500.innerHTML = "$ " + json.table.rows[5].c[2].f;
  precioMixEnergia1K.innerHTML = "$ " + json.table.rows[6].c[2].f;
  precioMixVigor250.innerHTML = "$ " + json.table.rows[0].c[2].f;
  precioMixVigor500.innerHTML = "$ " + json.table.rows[1].c[2].f;
  precioMixVigor1K.innerHTML = "$ " + json.table.rows[2].c[2].f;
  precioMixVigorSinPasas500.innerHTML = "$ " + json.table.rows[3].c[2].f;
  precioGranolaMuesli250.innerHTML = "$ " + json.table.rows[10].c[2].f;
  precioGranolita250.innerHTML = "$ " + json.table.rows[11].c[2].f;
  precioDesayunoConPasas.innerHTML = "$ " + json.table.rows[12].c[2].f;
  precioDesayunoSinPasas.innerHTML = "$ " + json.table.rows[13].c[2].f;
  precioComboJuntada.innerHTML = "$ " + json.table.rows[14].c[2].f;
  precioComboMixeado.innerHTML = "$ " + json.table.rows[15].c[2].f;
}

function menuActive() {
  hamburguerMenu.classList.toggle("active");
}
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
