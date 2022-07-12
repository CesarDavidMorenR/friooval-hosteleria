let servicioTecnico = document.querySelector(".servicio-tecnico-tittle");

let mostrarTexto = () => {
  let textoServicio = document.querySelector(".text-servicioTecnico");

  textoServicio.classList.toggle("mostrar");
}


servicioTecnico.addEventListener('click', mostrarTexto);

