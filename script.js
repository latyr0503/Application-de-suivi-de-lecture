function openModal() {
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".modal").style.display = "block";
  //   document.querySelector(".modal").add("modal--open");
}
function closeModal() {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".modal").style.display = "none";
  //   document.querySelector(".modal").classList.remove("modal--open");
}

// change image
let file = document.getElementById("InImg");
let imge = document.getElementById("coverLivre");
file.addEventListener("change", (e) => {
  imge.src = URL.createObjectURL(e.target.files[0]);
});

const inputs = document.getElementsByClassName("inputs");
const button = document.getElementById("modal__button");
// const image = document.createElement("img");
// const categori = document.createElement("h5");
// const titre = document.createElement("h2");
// const auto = document.createElement("p");
// const description = document.createElement("p");
const card = document.createElement("div");



button.addEventListener("click", function () {
  for (let i = 0; i < inputs.length; i++) {
    image = inputs[0].value;
    titre = inputs[1].value;
    auto = inputs[2].value;
    categori = inputs[3].value;
    description = inputs[4].value;

    card.innerHTML = "<h5>" + categori + "</h5>";

  }
  closeModal();
});
