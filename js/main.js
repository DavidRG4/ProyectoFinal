import { login, loginPhone } from "/js/login.js";
import {
  imagenPhonechecker,
  containerPhonechecker,
  showAllContainersImagenes,
  searchImagenContainer,
} from "/js/interactTelefono.js";
import {
  showAllContainers,
  inspecContainer,
  createFormContainer,
  createContainer,
} from "/js/containers.js";
import {
  showAllImages,
  searchImagen,
  createFormImagen,
  createImagen,
} from "/js/imagenes.js";

window.onload = () => {
  document.getElementById("imagenPhone").addEventListener("click", imagenPhonechecker);
  document.getElementById("containerPhone").addEventListener("click", containerPhonechecker);

  document.getElementById("startSession").addEventListener("click", login);
  document.getElementById("startSessionPhone").addEventListener("click", loginPhone);

  document.getElementById("AllContainers").addEventListener("click", showAllContainers);
  document.getElementById("AllImages").addEventListener("click", showAllImages);
  document.getElementById("showAllImagenContainer").addEventListener("click", showAllContainersImagenes);

  document.getElementById("searchImagen").addEventListener("click", searchImagen);
  document.getElementById("searchContainer").addEventListener("click", inspecContainer);
  document.getElementById("searchImagenContainer").addEventListener("click", searchImagenContainer);

  document.getElementById("navBarSearcherPhone").style.visibility = "hidden"
  document.getElementById("addImagen").addEventListener("click", createFormImagen);
  document.getElementById("addContainer").addEventListener("click", createFormContainer);
  document.getElementById("confirmCreateImagen").addEventListener("click", createImagen);
  document.getElementById("confirmCreateContainer").addEventListener("click", createContainer);
};
