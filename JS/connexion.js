//Algo pour les inputs de connexion
const login = document.querySelector("#login");
//Paramètre de sécurité à injecter dans la condition ?
login.addEventListener("input", (e) => {
  if (
    login.value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
});
//Condition si identifiant === MDP
//Alors affiche les inputs en vert
password.addEventListener("input", () => {
  if (login.value === password.value) {
    login.style.border = "2px solid #00CB14";
    password.style.border = "2px solid #00CB14";
    btnConnexion.style.color = "#FFFFFF";
    btnConnexion.style.backgroundColor = "#688B68";
    btnConnexion.disabled = false;
  } else {
    login.style.border = "2px solid #FC0606";
    password.style.border = "2px solid #FC0606";
  }
});
