
import {login} from "./login"
import {showAllContainers,inspecContainer,createForm } from "./containers"
import {showAllImages,InspectImagen} from "./imagenes"


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