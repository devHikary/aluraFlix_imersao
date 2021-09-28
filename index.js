function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var nomeFilme = document.getElementById("nome").value;

  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito, nomeFilme);
  } else{
    console.error("Endereço de filme inválido")
  }
  document.getElementById("filme").value = "";
  document.getElementById("nome").value = "";
}

function listarFilmesNaTela(filmeFavorito, nomeFilme){
  var elementoFilme = "<img src=" + filmeFavorito + ">";
  var elementoLista = document.getElementById("listaFilmes");

  let imgItem = document.createElement("div")
  elementoLista.appendChild(imgItem)
  imgItem.classList.add("img-item")

  imgItem.innerHTML = imgItem.innerHTML + elementoFilme

  let p = document.createElement("p")
  p.innerText = nomeFilme
  imgItem.appendChild(p)
}


// https://upload.wikimedia.org/wikipedia/pt/9/92/Rise_of_the_Guardians_poster.jpg