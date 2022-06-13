let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;

export function showAllImages() {
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
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
  spanReload.setAttribute("class", "btn p-0");
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
    spanEliminate.setAttribute("class", "eliminate");
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
export function searchImagen() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
      let data = JSON.parse(xhr.responseText);
      procesar_ListImagens(data);
    }
  };
  let nameOrId = document.getElementById("searcherImages").value;
  let url = "http://172.17.0.1:2327/images/search?term=" + nameOrId;
  xhr.open("GET", url);

  xhr.send();
}
export function searchImagenPhone() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
      let data = JSON.parse(xhr.responseText);
      procesar_ListImagens(data);
    }
  };
  let nameOrId = document.getElementById("searcherImagenContainer").value;
  let url = "http://172.17.0.1:2327/images/search?term=" + nameOrId;
  xhr.open("GET", url);

  xhr.send();
}
function procesar_ListImagens(imagenes) {
  document.getElementById("result").innerHTML = "";
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
  th.innerHTML = "Estrellas";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Ofical";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Automatica";
  tr.appendChild(th);
  thead.appendChild(tr);
  for (let imagen of imagenes) {
    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = imagen.name;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = imagen.star_count;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = imagen.is_official;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = imagen.is_automated;
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  table.appendChild(thead);
  table.appendChild(tbody);
  document.getElementById("result").appendChild(table);
}

//Crear imagenes
export function createFormImagen() {
  document.getElementById("creatorContainer").style.display = "none";
  document.getElementById("creatorImagen").style.display = "inherit";
}
export function createImagen() {
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
      let data = JSON.parse(xhr.responseText);
      procesar_imagenes(data);
    }
  };
  let imagenName = document.getElementById("inputImagenName").value;
  let version = document.getElementById("inputImagenTag").value;
  if (version === "") {
    version = "latest";
  }
  xhr.open(
    "POST",
    "http://172.17.0.1:2327/images/create?fromImage=" +
      imagenName +
      "&tag=" +
      version
  );
  xhr.send();
  document.getElementById("result").innerHTML = "";
  showAllImages();
}
//interact
export function interact(action) {
  let id = action.target.id;
  let interactType = action.currentTarget.className;
  if (interactType === "eliminate") {
    console.log("va bien");
    if (confirm("¿Seguro que quieres borrar esta Imagen?")) {
      deleteImagen(id);
    }
  }
}
//borrar imagen
function deleteImagen(id) {
  console.log("eliminado");
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
    }
  };
  let url = "http://127.0.0.1:2327/images/" + id;
  xhr.open("Delete", url);

  xhr.send();
  showAllImages();
}

export function InspectSelectFormImagen() {
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.onreadystatechange = function () {
    if (
      xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK
    ) {
      let data = JSON.parse(xhr.responseText);
      createImagenSelect(data);
    }
  };
  xhr.open("GET", "http://127.0.0.1:2327/images/json");

  xhr.send();
}

function createImagenSelect(imagenes) {
  document.getElementById("inputImagenContainer").innerHTML = "";
  let select = document.getElementById("inputImagenContainer");

  for (let imagen of imagenes) {
    let option = document.createElement("option");
    option.setAttribute("value", imagen.RepoTags[0]);
    option.setAttribute("text", imagen.RepoTags[0]);
    option.innerHTML = imagen.RepoTags[0];
    select.appendChild(option);
  }
}
