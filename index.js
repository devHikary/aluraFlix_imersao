function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;

  if (filmeFavorito.endsWith(".jpg")) {
    var elementoFilme = "<img src=" + filmeFavorito + ">";
    var elementoLista = document.getElementById("listaFilmes");

    elementoLista.innerHTML = elementoLista.innerHTML + elementoFilme;
  } else{
    console.error("Endereço de filme inválido")
  }
  document.getElementById("filme").value = "";

}