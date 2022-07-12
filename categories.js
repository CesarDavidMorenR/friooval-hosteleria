let maquSelector = document.querySelector(".maquinaria-selector");
let mobiSelector = document.querySelector(".mobilario-selector");
let repuSelector = document.querySelector(".repuestos-selector");

let aparecerMaqu = () => {
  let maquinaria = document.querySelector(".maquinaria");
  let mobilario = document.querySelector(".mobilario");
  let repuestos = document.querySelector(".repuestos");

  maquinaria.classList.toggle("mostrar");
  mobilario.classList.remove("mostrar");
  repuestos.classList.remove("mostrar");
};

let aparecerMobi = () => {
  let mobilario = document.querySelector(".mobilario");
  let maquinaria = document.querySelector(".maquinaria");
  let repuestos = document.querySelector(".repuestos");

  mobilario.classList.toggle("mostrar");
  repuestos.classList.remove("mostrar");
  maquinaria.classList.remove("mostrar");
};

let aparecerRepu = () => {
  let repuestos = document.querySelector(".repuestos");
  let mobilario = document.querySelector(".mobilario");
  let maquinaria = document.querySelector(".maquinaria");

  repuestos.classList.toggle("mostrar");
  mobilario.classList.remove("mostrar");
  maquinaria.classList.remove("mostrar");
};

maquSelector.addEventListener("click", aparecerMaqu);

mobiSelector.addEventListener("click", aparecerMobi);

repuSelector.addEventListener("click", aparecerRepu);
