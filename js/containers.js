import { InspectSelectFormImagen } from "./imagenes.js";

let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;

//Generales
export function showAllContainers() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
      let data = JSON.parse(xhr.responseText);
      procesar_container(data);
    }
  };
  xhr.withCredentials = true;
  xhr.open("GET", "http://127.0.0.1:2327/containers/json?all=true");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

  xhr.send();
}
function procesar_container(containers) {
  document.getElementById("result").innerHTML = "";
  document.getElementById("resultText").innerHTML =
    "Mostrando Todos los Contenedores";
  document.getElementById("creatorContainer").style.display = "none";
  document.getElementById("creatorImagen").style.display = "none";
  let table = document.createElement("table");
  table.setAttribute("class", "table table-striped table-hover");
  let tbody = document.createElement("tbody");
  let thead = document.createElement("thead");
  thead.setAttribute("class", "table-primary");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = "Nombre";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Imagen";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Estado";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Puerto";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Interacciones";
  tr.appendChild(th);
  th = document.createElement("th");
  let spanReload = document.createElement("span");
  let reload = document.createElement("i");
  reload.setAttribute("class", "fa-solid fa-rotate");
  spanReload.setAttribute("title", "Actualizar");
  spanReload.setAttribute("class", "btn p-0");
  spanReload.appendChild(reload);
  th.appendChild(spanReload);
  tr.appendChild(th);
  thead.appendChild(tr);
  spanReload.addEventListener("click", showAllContainers);
  for (let container of containers) {
    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = container.Names[0];
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = container.Image;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = container.State;
    tr.appendChild(td);

    td = document.createElement("td");
    if (container.Ports.length > 0) {
      let puerto = container.Ports[0].PublicPort;
      td.innerHTML = "Port: " + puerto;
      tr.appendChild(td);
    } else {
      td.innerHTML = "Port: none";
      tr.appendChild(td);
    }
    td = document.createElement("td");

    let spanStart = document.createElement("span");
    let start = document.createElement("i");
    start.setAttribute("class", "fa-solid fa-play");
    start.setAttribute("id", container.Id);
    spanStart.appendChild(start);
    spanStart.setAttribute("class", "start");
    let spanStop = document.createElement("span");
    let stop = document.createElement("i");
    stop.setAttribute("class", "fa-solid fa-circle-stop");
    stop.setAttribute("id", container.Id);
    spanStop.appendChild(stop);
    spanStop.setAttribute("class", "stop");
    let spanEliminate = document.createElement("span");
    let eliminate = document.createElement("i");
    eliminate.setAttribute("class", "fa-solid fa-trash-arrow-up");
    eliminate.setAttribute("id", container.Id);
    spanEliminate.appendChild(eliminate);
    spanEliminate.setAttribute("class", "eliminate");

    td.appendChild(spanStart);
    td.appendChild(spanStop);
    td.appendChild(spanEliminate);
    tr.appendChild(td);
    td = document.createElement("td");
    tr.appendChild(td);
    tbody.appendChild(tr);
    spanStart.addEventListener("click", interact);
    spanStop.addEventListener("click", interact);
    spanEliminate.addEventListener("click", interact);
  }
  table.appendChild(thead);
  table.appendChild(tbody);
  document.getElementById("result").appendChild(table);
}

//Especificos
export function inspecContainer() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
      let data = JSON.parse(xhr.responseText);
      procesarContenedor(data);
    }
  };
  let nameOrId = document.getElementById("searcherContainer").value;
  let url = "http://127.0.0.1:2327/containers/" + nameOrId + "/json";
  xhr.open("GET", url);

  xhr.send();
}
export function inspecContainerPhone() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
      let data = JSON.parse(xhr.responseText);
      procesarContenedorPhone(data);
    }
  };
  let nameOrId = document.getElementById("searcherImagenContainer").value;
  let url = "http://127.0.0.1:2327/containers/" + nameOrId + "/json";
  xhr.open("GET", url);

  xhr.send();
}
function procesarContenedor(container) {
  document.getElementById("result").innerHTML = "";
  document.getElementById("resultText").innerHTML =
    "Mostrando el Contenedor: " + container.Name;
  document.getElementById("creatorContainer").style.display = "none";
  document.getElementById("creatorImagen").style.display = "none";
  let table = document.createElement("table");
  table.setAttribute("class", "table table-stripped table-hover");
  let tbody = document.createElement("tbody");
  let thead = document.createElement("thead");
  thead.setAttribute("class", "table-primary");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = "Nombre";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Imagen";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Estado";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Puerto";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Interacciones";
  tr.appendChild(th);
  th = document.createElement("th");
  let spanReload = document.createElement("span");
  let reload = document.createElement("i");
  reload.setAttribute("class", "fa-solid fa-rotate");
  spanReload.setAttribute("title", "Actualizar");
  spanReload.setAttribute("class", "btn p-0");
  spanReload.appendChild(reload);
  th.appendChild(spanReload);
  tr.appendChild(th);
  thead.appendChild(tr);
  spanReload.addEventListener("click", inspecContainer);

  tr = document.createElement("tr");
  let td = document.createElement("td");
  td.innerHTML = container.Name;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerHTML = container.Config.Image;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerHTML = container.State.Status;
  tr.appendChild(td);
  td = document.createElement("td");
  console.log(container.Config.ExposedPorts);
  let puerto;
  let a = " ";
  for (const x in container.Config.ExposedPorts) {
    a = a + x + ",";
    let puertos = a;
    console.log(a);
    puerto = "Puertos: " + puertos;
    console.log(x);
    td.innerHTML = puerto;
  }
  tr.appendChild(td);
  td = document.createElement("td");
  let spanStart = document.createElement("span");
  let start = document.createElement("i");
  start.setAttribute("class", "fa-solid fa-play");
  start.setAttribute("id", container.Id);
  spanStart.appendChild(start);
  spanStart.setAttribute("class", "start");
  let spanStop = document.createElement("span");
  let stop = document.createElement("i");
  stop.setAttribute("class", "fa-solid fa-circle-stop");
  stop.setAttribute("id", container.Id);
  spanStop.appendChild(stop);
  spanStop.setAttribute("class", "stop");
  let spanEliminate = document.createElement("span");
  let eliminate = document.createElement("i");
  eliminate.setAttribute("class", "fa-solid fa-trash-arrow-up");
  eliminate.setAttribute("id", container.Id);
  spanEliminate.appendChild(eliminate);
  spanEliminate.setAttribute("class", "eliminate");

  td.appendChild(spanStart);
  td.appendChild(spanStop);
  td.appendChild(spanEliminate);
  tr.appendChild(td);
  td = document.createElement("td");
  tr.appendChild(td);
  tbody.appendChild(tr);
  spanStart.addEventListener("click", interact);
  spanStop.addEventListener("click", interact);
  spanEliminate.addEventListener("click", interact);
  tr.appendChild(td);
  tbody.appendChild(tr);
  table.appendChild(thead);
  table.appendChild(tbody);
  document.getElementById("result").appendChild(table);
}
function procesarContenedorPhone(container) {
  document.getElementById("result").innerHTML = "";
  document.getElementById("resultText").innerHTML =
    "Mostrando el Contenedor: " + container.Name;
  document.getElementById("creatorContainer").style.display = "none";
  document.getElementById("creatorImagen").style.display = "none";
  let table = document.createElement("table");
  table.setAttribute("class", "table table-stripped table-hover");
  let tbody = document.createElement("tbody");
  let thead = document.createElement("thead");
  thead.setAttribute("class", "table-primary");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = "Nombre";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Imagen";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Estado";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Puerto";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Interacciones";
  tr.appendChild(th);
  th = document.createElement("th");
  let spanReload = document.createElement("span");
  let reload = document.createElement("i");
  reload.setAttribute("class", "fa-solid fa-rotate");
  spanReload.setAttribute("title", "Actualizar");
  spanReload.setAttribute("class", "btn p-0");
  spanReload.appendChild(reload);
  th.appendChild(spanReload);
  tr.appendChild(th);
  thead.appendChild(tr);
  spanReload.addEventListener("click", inspecContainerPhone);

  tr = document.createElement("tr");
  let td = document.createElement("td");
  td.innerHTML = container.Name;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerHTML = container.Config.Image;
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerHTML = container.State.Status;
  tr.appendChild(td);
  td = document.createElement("td");
  console.log(container.Config.ExposedPorts);
  let puerto;
  let a = " ";
  for (const x in container.Config.ExposedPorts) {
    a = a + x + ",";
    let puertos = a;
    console.log(a);
    puerto = "Puertos: " + puertos;
    console.log(x);
    td.innerHTML = puerto;
  }
  tr.appendChild(td);
  td = document.createElement("td");
  let spanStart = document.createElement("span");
  let start = document.createElement("i");
  start.setAttribute("class", "fa-solid fa-play");
  start.setAttribute("id", container.Id);
  spanStart.appendChild(start);
  spanStart.setAttribute("class", "start");
  let spanStop = document.createElement("span");
  let stop = document.createElement("i");
  stop.setAttribute("class", "fa-solid fa-circle-stop");
  stop.setAttribute("id", container.Id);
  spanStop.appendChild(stop);
  spanStop.setAttribute("class", "stop");
  let spanEliminate = document.createElement("span");
  let eliminate = document.createElement("i");
  eliminate.setAttribute("class", "fa-solid fa-trash-arrow-up");
  eliminate.setAttribute("id", container.Id);
  spanEliminate.appendChild(eliminate);
  spanEliminate.setAttribute("class", "eliminate");

  td.appendChild(spanStart);
  td.appendChild(spanStop);
  td.appendChild(spanEliminate);
  tr.appendChild(td);
  td = document.createElement("td");
  tr.appendChild(td);
  tbody.appendChild(tr);
  spanStart.addEventListener("click", interact);
  spanStop.addEventListener("click", interact);
  spanEliminate.addEventListener("click", interact);
  tr.appendChild(td);
  tbody.appendChild(tr);
  table.appendChild(thead);
  table.appendChild(tbody);
  document.getElementById("result").appendChild(table);
}
//Crear Contenedor
export function createFormContainer() {
  InspectSelectFormImagen();
  document.getElementById("creatorContainer").style.display = "inherit";
  document.getElementById("creatorImagen").style.display = "none";
}
export function createContainer() {
  let Json = createJSON();

  let nombre = document.getElementById("inputContainerName").value;
  console.log(Json);
  console.log(nombre);
  let xhr = new XMLHttpRequest();
  let url = "http://127.0.0.1:2327/containers/create?name=" + nombre;
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  document.getElementById("resultText").innerHTML =
    "Se ha creado el contenedor correctamente, si no se ha creado todavia recarge los contenedores";

  xhr.send(JSON.stringify(Json));
}
function createJSON() {
  let variablesEntornoString =
    document.getElementById("inputVarContainer").value;
  let puertosString = document.getElementById("inputPuertoContainer").value;
  let imagen = document.getElementById("inputImagenContainer").value;
  let variablesEntornoArray = variablesEntornoString.split(",");
  let puertosArray = puertosString.split(",");
  console.log(variablesEntornoString);
  console.log(variablesEntornoArray);
  console.log(puertosString);
  console.log(puertosArray);
  console.log(imagen);
  let ports = new Map();
  let Hostconfig = new Map();
  let PortBindings = new Map();
  for (let i = 0; i < puertosArray.length; i++) {
    PortBindings.clear();
    let Empty = new Object();
    let PortBindingsArray = [];
    let portelements = puertosArray[i].split(":");
    let HostPorts = new Map();
    let HostIp = new Map();
    HostPorts.set("HostPort", portelements[1]);
    HostIp.set("HostIp", "");

    PortBindingsArray.push(HostPorts);
    PortBindingsArray.push(HostIp);
    ports.set(portelements[0], Empty);
    PortBindings.set(portelements[0], PortBindingsArray);
    Hostconfig.set("PortBindings", PortBindings);
  }
  console.log(ports);
  console.log("PortBindings");
  console.log(PortBindings);
  console.log(Hostconfig);
  let Json = {
    ExposedPorts: ports,
    Env: variablesEntornoArray,
    Image: imagen,
    HostConfig: Hostconfig,
  };
  console.log(Json);
  return Json;
}

//Interacciones con los contenedores
function interact(action) {
  let id = action.target.id;
  let interactType = action.currentTarget.className;
  console.log(interactType);
  if (interactType === "start") {
    startContainer(id);
  } else if (interactType === "stop") {
    stopContainer(id);
  } else if (interactType === "eliminate") {
    if (
      confirm(
        "¿Seguro que quieres borrar este Contenedor aun que pueda estar en funcionamiento?"
      )
    ) {
      deleteContainer(id);
    }
  }
}
//Eliminar containers
function deleteContainer(id) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
    }
  };
  let url = "http://127.0.0.1:2327/containers/" + id + "?force=true";
  xhr.open("Delete", url);
  document.getElementById("resultText").innerHTML =
    "Se ha eliminado el contenedor correctamente, si no se ha eliminado todavia recarge los contenedores";
  xhr.send();
}

//Iniciar Containers
function startContainer(id) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
    }
  };
  let url = "http://127.0.0.1:2327/containers/" + id + "/start";
  xhr.open("Post", url);
  document.getElementById("resultText").innerHTML =
    "Se ha iniciado el contenedor correctamente, si no se ha iniciado todavia recarge los contenedores";
  xhr.send();
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
  let url = "http://127.0.0.1:2327/containers/" + id + "/stop";
  xhr.open("Post", url);
  document.getElementById("resultText").innerHTML =
    "Se ha parado el contenedor correctamente, si no se ha parado todavia recarge los contenedores";

  xhr.send();
}
