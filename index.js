var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/9/92/Rise_of_the_Guardians_poster.jpg","https://upload.wikimedia.org/wikipedia/pt/9/97/BackFuturePoster.jpg"]

for (let i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">")
}