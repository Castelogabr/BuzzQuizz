const requestAPI = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
requestAPI.then(
  carregarQuizes
)


function carregarQuizes(resposta){

  const element_todos_quizes = document.querySelector(".todos-quizz")
  for(i=0; i < 6; i++){
    element_todos_quizes.innerHTML += `
    <div class="quiz">
      <h2>${resposta.data[i].title}</h2>
      <img src="${resposta.data[i].image}">
    <div>
    `
  }
  const quiz_elements = document.querySelectorAll("div .quiz")
  quiz_elements.forEach(array => {
    array.addEventListener("click", () => alert("click"))
  })
  console.log(quiz_elements)
}

function falhaAoCarregarQuizes(resposta){

}