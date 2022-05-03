let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;

window.onload = () => {
  document
    .getElementById("AllContainers")
    .addEventListener("click", showAllContainers);
  document.getElementById("AllImages").addEventListener("click", showAllImages);
  document
    .getElementById("searchImagen")
    .addEventListener("click", InspectImagen);
  document
    .getElementById("searchContainer")
    .addEventListener("click", inspecContainer);
};

function showAllContainers() {
  document.getElementById("result").innerHTML = "hola";
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
function showAllImages() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
      let data = JSON.parse(xhr.responseText);
      procesar_imagenes(data);
    }
  };
  xhr.open("GET", "http://172.17.0.1:2327/images/json");
  xhr.send();
}
function procesar_container(containers) {
  document.getElementById("result").innerHTML = "";
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
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
  tbody.appendChild(tr);
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
    let puerto = container.Ports[0].PublicPort;
    td.innerHTML = "Port: " + puerto;
    tr.appendChild(td);
    td = document.createElement("td");
    let start = document.createElement("i");
    start.setAttribute("class", "fa-solid fa-play");
    start.setAttribute("value", container.Id);
    let stop = document.createElement("i");
    stop.setAttribute("class", "fa-solid fa-circle-stop");
    stop.setAttribute("value", container.Id);
    stop.setAttribute("id");
    let eliminate = document.createElement("i");
    eliminate.setAttribute("class", "fa-solid fa-trash-arrow-up");
    eliminate.setAttribute("value", container.Id);

    td.appendChild(start);
    td.appendChild(stop);
    td.appendChild(eliminate);
    tr.appendChild(td);

    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  document.getElementById("result").appendChild(table);
}
function procesar_imagenes(imagenes) {
  document.getElementById("result").innerHTML = "";
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = "Nombre";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Id";
  tr.appendChild(th);
  tbody.appendChild(tr);
  for (let imagen of imagenes) {
    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = imagen.RepoTags[0];
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = imagen.Id;
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  document.getElementById("result").appendChild(table);
}

function InspectImagen() {
  document.getElementById("result").innerHTML = "hola";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
      let data = JSON.parse(xhr.responseText);
      procesar_imagen(data);
    }
  };
  nameOrId = document.getElementById("searcherImages").value;
  url = "http://172.17.0.1:2327/images/" + nameOrId + "/json";
  xhr.open("GET", url);
  xhr.send();
}
function procesar_imagen(imagen) {
  document.getElementById("result").innerHTML = "";
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = "Nombre";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Id";
  tr.appendChild(th);
  tbody.appendChild(tr);
  tr = document.createElement("tr");
  let td = document.createElement("td");
  td.innerHTML = imagen.RepoTags[0];
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerHTML = imagen.Id;
  tr.appendChild(td);
  tbody.appendChild(tr);
  table.appendChild(tbody);
  document.getElementById("result").appendChild(table);
}

function inspecContainer() {
  document.getElementById("result").innerHTML = "hola";
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
  nameOrId = document.getElementById("searcherContainer").value;
  url = "http://172.17.0.1:2327/containers/" + nameOrId + "/json";
  xhr.open("GET", url);
  xhr.send();
}
function procesar_contenedor(container) {
  document.getElementById("result").innerHTML = "";
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
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
  tbody.appendChild(tr);
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
  let puerto = container.Ports[0].PublicPort;
  td.innerHTML = "Port: " + puerto;
  tr.appendChild(td);
  td = document.createElement("td");
  let start = document.createElement("i");
  start.setAttribute("class", "fa-solid fa-play");
  start.setAttribute("value", container.Id);
  let stop = document.createElement("i");
  stop.setAttribute("class", "fa-solid fa-circle-stop");
  stop.setAttribute("value", container.Id);
  stop.setAttribute("id");
  let eliminate = document.createElement("i");
  eliminate.setAttribute("class", "fa-solid fa-trash-arrow-up");
  eliminate.setAttribute("value", container.Id);

  td.appendChild(start);
  td.appendChild(stop);
  td.appendChild(eliminate);
  tr.appendChild(td);

  tbody.appendChild(tr);
  table.appendChild(tbody);
  document.getElementById("result").appendChild(table);
}
