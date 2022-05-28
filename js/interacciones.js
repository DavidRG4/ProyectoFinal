//Interacciones
import { showAllContainers } from "./containers";
import { showAllImages } from "./imagenes";
let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;

export function interact(action) {
  id = action.target.id;
  interactType = action.currentTarget.className;
  console.log(interactType);
  if (interactType === "start") {
    startContainer(id);
  } else if (interactType === "stop") {
    stopContainer(id);
  } else if (interactType === "eliminateContainer") {
    deleteContainer(id);
  } else {
    deleteImagen(id);
  }
}
//Eliminar
function deleteContainer(id) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
    }
  };
  url = "http://127.0.0.1:2327/containers/" + id;
  xhr.open("Delete", url);
  xhr.send();
  showAllContainers();
}
function deleteImagen(id) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
    }
  };
  url = "http://127.0.0.1:2327/images/" + id;
  xhr.open("Delete", url);
  xhr.send();
  showAllImages();
}
//Iniciar
function startContainer(id) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
    }
  };
  url = "http://127.0.0.1:2327/containers/" + id + "/start";
  xhr.open("Post", url);
  xhr.send();

  showAllContainers();
}
//Parar
function stopContainer(id) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
    }
  };
  url = "http://127.0.0.1:2327/containers/" + id + "/stop";
  xhr.open("Post", url);
  xhr.send();
  showAllContainers();
}
