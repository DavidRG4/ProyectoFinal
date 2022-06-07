import {login} from "/js/login.js"
import {showAllContainers,inspecContainer,createFormContainer,createContainer } from "/js/containers.js"
import {showAllImages,InspectImagen,createFormImagen,createImagen } from "/js/imagenes.js"


window.onload = () => {
  showAllImages()
  document.getElementById("startSession").addEventListener("click", login);
  document.getElementById("AllContainers").addEventListener("click", showAllContainers);
  document.getElementById("AllImages").addEventListener("click", showAllImages);
  document
    .getElementById("searchImagen")
    .addEventListener("click", InspectImagen);
  document.getElementById("searchContainer").addEventListener("click", inspecContainer);
};