import {showAllContainers,inspecContainer } from "/js/containers.js"
import {showAllImages,InspectImagen } from "/js/imagenes.js"

export function imagenPhonechecker() {
  document.getElementById("imagenPhone").checked = true;
  document.createElement("containerPhone").checked = false;
}
export function containerPhonechecker() {
  document.getElementById("imagenPhone").checked = false;
  document.createElement("containerPhone").checked = true;
}

export function showAllContainersImagenes() {
  let imgcheck = document.getElementById("imagenPhone").checked;
  let contcheck = document.createElement("containerPhone").checked;
  if (imgcheck == true) {
    showAllImages;
  } else if (contcheck == true) {
    showAllContainers;
  }
}
