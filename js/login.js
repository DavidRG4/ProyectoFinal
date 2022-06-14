import {showAllContainers} from "./containers.js"
//Login normal
export function login() {
    let user = document.getElementById("usernameLogin").value;
    let password = document.getElementById("passwordLogin").value;
    if (user ===password) {
      console.log("todo bien")
      showAllContainers();
      document.getElementById("formLogin").style.display ="none" ;
      document.getElementById("navBarSearcher").style.visibility="visible";
      document.getElementById("creatorButtons").style.visibility="visible";
      document.getElementById("navBarSearcherPhone").style.visibility = "visible"

    }
  }

//login Telefono

  export function loginPhone() {
    let user = document.getElementById("usernameLogin").value;
    let password = document.getElementById("passwordLogin").value;
    if (user ===password) {
      console.log("todo bien")
      showAllContainers();
      document.getElementById("formLogin").style.display ="none" ;
      document.getElementById("creatorButtons").style.visibility="visible";
      document.getElementById("navBarSearcherPhone").style.visibility = "visible"

    }
  }
