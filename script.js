// afficher le modale
function openModal() {
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".modal").style.display = "block";
}
// fermer le modale
function closeModal() {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".modal").style.display = "none";
}
// changer l'image
// let file = document.getElementById("InImg");
// let imge = document.getElementById("coverLivre");
// file.addEventListener("change", (e) => {
//   imge.src = URL.createObjectURL(e.target.files[0]);
// });

const inputs = document.getElementsByClassName("inputs");
const container = document.querySelector(".container");

function Save() {
  const titre = inputs[0].value;
  const auto = inputs[1].value;
  const categori = inputs[2].value;
  const id = new Date().getTime();
  const read = false;
  //  recuperation des donners du localstorage
  const donner = JSON.parse(localStorage.getItem("Livres")) || [];

  // Sauvegarde de mes données dans mon localstorage
  const data = {
    id: id,
    titre: titre,
    auto: auto,
    categori: categori,
    read: read,
  };
  donner.push(data);

  localStorage.setItem("Livres", JSON.stringify(donner));












  
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const h2 = document.createElement("h2");
  h2.textContent = titre;

  const h3 = document.createElement("h3");
  h3.textContent = auto;

  const p = document.createElement("p");
  p.textContent = categori;

  const divButton = document.createElement("div");
  divButton.classList.add("divButton");

  const button1 = document.createElement("button");
  button1.textContent = "Achiver";
  button1.classList.add("button1");

  const button2 = document.createElement("button");
  button2.textContent = "Supprimer";
  button2.classList.add("button2");

  const button3 = document.createElement("button");
  button3.textContent = "See Id";
  button3.classList.add("button3");

  divCard.appendChild(h2);
  divCard.appendChild(p);
  divCard.appendChild(h3);
  divCard.appendChild(divButton);
  divButton.appendChild(button1);
  divButton.appendChild(button2);
  divButton.appendChild(button3);
  container.appendChild(divCard);

  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";

  button2.addEventListener("click", function () {
    const filteredDonner = donner.filter((item) => item.id !== id);
    localStorage.setItem("Livres", JSON.stringify(filteredDonner));
    divCard.remove();
  });

  // marquer comme lu

  if (read == false) {
    button1.addEventListener("click", function () {
      h2.style.textDecoration = "line-through";
      p.style.textDecoration = "line-through";
      h3.style.textDecoration = "line-through";
    });
  }else{
    h2.style.textDecoration = "underline";
    p.style.textDecoration = "underline";
    h3.style.textDecoration = "underline";
  }
  // voir l'id sous forme d'alerte
  button3.addEventListener("click", function () {
    alert("ID: " + id);
  });

  // fermeture du modale
  closeModal();
}
