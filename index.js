function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;

  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else{
    console.error("Endereço de filme inválido")
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filmeFavorito){
  var elementoFilme = "<img src=" + filmeFavorito + ">";
  var elementoLista = document.getElementById("listaFilmes");
  elementoLista.innerHTML = elementoLista.innerHTML + elementoFilme;
}

// https://upload.wikimedia.org/wikipedia/pt/9/92/Rise_of_the_Guardians_poster.jpg