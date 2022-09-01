const requestAPI = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
requestAPI.then(
  carregarQuizes
)
requestAPI.cath(
  falhaAoCarregarQuizes
)

function carregarQuizes(resposta){

  const element_todos_quizes = document.querySelector(".todos-quizz")
  for(i=0; i < 6; i++){
    element_todos_quizes.innerHTML += `
    <div class="quiz">
      <h2>${resposta.data[i].title}<h2>
      <img src="${resposta.data[i].image}">
    <div>
    `
  }
}

function falhaAoCarregarQuizes(resposta){

}