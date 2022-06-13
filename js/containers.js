let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;

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
  xhr.open("GET", "http://172.17.0.1:2327/containers/json?all=true");
  xhr.send();
}
function procesar_container(containers) {
  document.getElementById("result").innerHTML = "";
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
  th.innerHTML = "Stado";
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
      td.innerHTML = "Port: 8080";
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
export function inspecContainer() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
      let data = JSON.parse(xhr.responseText);
      procesar_contenedor(data);
    }
  };
  let nameOrId = document.getElementById("searcherContainer").value;
  let url = "http://172.17.0.1:2327/containers/" + nameOrId + "/json";
  xhr.open("GET", url);
  xhr.send();
}
function procesar_contenedor(container) {
  document.getElementById("result").innerHTML = "";
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
  spanReload.addEventListener("click", showAllContainers);

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
  let puertos;
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
  document.getElementById("creatorContainer").style.display = "inherit";
}
export function createContainer() {}
//
function interact(action) {
  let id = action.target.id;
  let interactType = action.currentTarget.className;
  console.log(interactType);
  if (interactType === "start") {
    startContainer(id);
  } else if (interactType === "stop") {
    stopContainer(id);
  } else if (interactType === "eliminate") {
    if (confirm("¿Seguro que quieres borrar este Contenedor?")) {
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
  let url = "http://127.0.0.1:2327/containers/" + id;
  xhr.open("Delete", url);
  xhr.send();
  showAllContainers();
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
  let url = "http://127.0.0.1:2327/containers/" + id + "/stop";
  xhr.open("Post", url);
  xhr.send();
  showAllContainers();
}
