import {login} from "/js/login.js"
import {imagenPhonechecker,containerPhonechecker,showAllContainersImagenes} from "/js/interactTelefono.js"
import {showAllContainers,inspecContainer,createFormContainer } from "/js/containers.js"
import {showAllImages, searchImagen,createFormImagen,createImagen } from "/js/imagenes.js"


window.onload = () => {
  document.getElementById("imagenPhone").addEventListener("click",imagenPhonechecker)
  document.getElementById("containerPhone").addEventListener("click",containerPhonechecker)
  document.getElementById("showAllImagenContainer").addEventListener("click",showAllContainersImagenes)

  document.getElementById("startSession").addEventListener("click", login);
  document.getElementById("AllContainers").addEventListener("click", showAllContainers);
  document.getElementById("AllImages").addEventListener("click", showAllImages);
  document.getElementById("searchImagen").addEventListener("click",  searchImagen);
  document.getElementById("searchContainer").addEventListener("click", inspecContainer);


  document.getElementById("addImagen").addEventListener("click",createFormImagen)
  document.getElementById("addContainer").addEventListener("click",createFormContainer)
  //document.getElementById("confirmCreateContainer").addEventListener("click",)
  document.getElementById("confirmCreateImagen").addEventListener("click",createImagen)

};