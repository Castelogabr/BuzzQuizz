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

// falta colocar a API pra funcionar na função criarQuiz
function criarQuiz() {
  let div1 = document.querySelector('.cabeçalho')
  div1.classList.add('hidden')
  let div2 = document.querySelector('.principal')
  div2.classList.add('hidden')
  let div3 = document.querySelector('.principal2')
  div3.classList.remove('hidden')
}

function criarPerguntas() {
  alert('Você irá para a página de criação de perguntas')
}