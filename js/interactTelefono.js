import {showAllContainers,inspecContainerPhone } from "/js/containers.js"
import {showAllImages,searchImagenPhone } from "/js/imagenes.js"

export function imagenPhonechecker() {
  document.getElementById("imagenPhone").checked = true;
  document.getElementById("imagenPhoneBtn").setAttribute("class","btn btn-primary  btn-outline-primary btn-sm active")
  document.createElement("containerPhone").checked = false;
  document.getElementById("containerPhoneBtn").setAttribute("class","btn btn-primary  btn-outline-primary btn-sm")
}
export function containerPhonechecker() {
  document.getElementById("imagenPhone").checked = false;
  document.getElementById("imagenPhoneBtn").setAttribute("class","btn btn-primary  btn-outline-primary btn-sm")
  document.createElement("containerPhone").checked = true;
  document.getElementById("containerPhoneBtn").setAttribute("class","btn btn-primary  btn-outline-primary btn-sm active")

}

export function showAllContainersImagenes() {
  let imgcheck = document.getElementById("imagenPhone").checked;
  let contcheck = document.getElementById("containerPhone").checked;
  if (imgcheck == true && contcheck==false) {
    showAllImages();
  } else if (imgcheck == false && contcheck==true) {
    showAllContainers();
  }
}
export function searchImagenContainer(){
  let imgcheck = document.getElementById("imagenPhone").checked;
  let contcheck = document.getElementById("containerPhone").checked;
  if (imgcheck == true && contcheck==false) {
    searchImagenPhone();
  } else if (imgcheck == false && contcheck==true) {
    inspecContainerPhone();
  }
}