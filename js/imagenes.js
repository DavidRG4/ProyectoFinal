let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
import { interact } from "./interacciones";

export function showAllImages() {
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
  xhr.open("GET", "http://127.0.0.1:2327/images/json");
  xhr.send();
}
function procesar_imagenes(imagenes) {
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
  th.innerHTML = "Id";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Interacciones";
  tr.appendChild(th);
  th = document.createElement("th");
  let spanReload = document.createElement("span");
  let reload = document.createElement("i");
  reload.setAttribute("class", "fa-solid fa-rotate");
  spanReload.setAttribute("title", "Actualizar");
  spanReload.appendChild(reload);
  th.appendChild(spanReload);
  tr.appendChild(th);
  thead.appendChild(tr);
  spanReload.addEventListener("click", showAllImages);
  for (let imagen of imagenes) {
    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = imagen.RepoTags[0];
    tr.appendChild(td);
    td = document.createElement("td");
    td.setAttribute("data-toggle", "tooltip");
    td.setAttribute("data-placement", "top");
    td.setAttribute("title", imagen.Id);
    let textId = imagen.Id;
    textId = textId.substr(textId.length - 13, textId.length);
    td.innerHTML = textId;
    tr.appendChild(td);
    td = document.createElement("td");
    let spanEliminate = document.createElement("span");
    let eliminate = document.createElement("i");
    eliminate.setAttribute("class", "fa-solid fa-trash-arrow-up");
    eliminate.setAttribute("id", imagen.Id);
    spanEliminate.appendChild(eliminate);
    spanEliminate.setAttribute("class", "eliminateImagen");
    spanEliminate.addEventListener("click", interact);
    td.appendChild(spanEliminate);
    tr.appendChild(td);
    td = document.createElement("td");
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  table.appendChild(thead);
  table.appendChild(tbody);
  document.getElementById("result").appendChild(table);
}

//Especificos
export function InspectImagen() {
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
  table.setAttribute("class", "table table-stripped table-hover");
  let tbody = document.createElement("tbody");
  let thead = document.createElement("thead");
  thead.setAttribute("class", "table-primary");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = "Nombre";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Id";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Interacciones";
  tr.appendChild(th);
  th = document.createElement("th");
  let spanReload = document.createElement("span");
  let reload = document.createElement("i");
  reload.setAttribute("class", "fa-solid fa-rotate");
  spanReload.setAttribute("title", "Actualizar");

  spanReload.appendChild(reload);
  th.appendChild(spanReload);
  tr.appendChild(th);
  thead.appendChild(tr);
  spanReload.addEventListener("click", showAllImages);

  tr = document.createElement("tr");
  let td = document.createElement("td");
  td.innerHTML = imagen.RepoTags[0];
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerHTML = imagen.Id;
  tr.appendChild(td);
  td = document.createElement("td");
  let spanEliminate = document.createElement("span");
  let eliminate = document.createElement("i");
  eliminate.setAttribute("class", "fa-solid fa-trash-arrow-up");
  eliminate.setAttribute("id", imagen.Id);
  spanEliminate.appendChild(eliminate);
  spanEliminate.setAttribute("class", "eliminate");
  td.appendChild(spanEliminate);
  tr.appendChild(td);
  table.appendChild(thead);
  tbody.appendChild(tr);
  spanEliminate.addEventListener("click", interact);
  table.appendChild(tbody);
  document.getElementById("result").appendChild(table);
}
