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

}

function falhaAoCarregarQuizes(resposta){

}

// falta colocar a API pra funcionar na função criarQuiz

function criarQuiz() {
  // Aqui vai esconder elementos
  let div1 = document.querySelector('.cabeçalho')
  div1.classList.add('hidden')
  let div2 = document.querySelector('.principal')
  div2.classList.add('hidden')
  let div3 = document.querySelector('.principal2')
  div3.classList.remove('hidden')
  
}

// Aqui é vai ser a parte funcional da principal 2
const objectApiSend = {
  title: "",
  image: "",
  questions: [{
    title: "",
    color: "",
    answers: [{
      text: "",
      image: "",
      isCorrectAnswer: true
    }, {
      text: "",
      image: "",
      isCorrectAnswer: false
    }]
  },{
    title: "",
    color: "",
    answers: [{
      text: "",
      image: "",
      isCorrectAnswer: true
    }, {
      text: "",
      image: "",
      isCorrectAnswer: false
    }]
  }, {
    title: "",
    color: "",
    answers: [{
      text: "",
      image: "",
      isCorrectAnswer: true
    }, {
      text: "",
      image: "",
      isCorrectAnswer: false
    }]
  }]
}

//Aqui nessas váriaveis vão estar os valores doos inputs dentro de principal2
function criarPerguntas() {
  // alert('Você irá para a página de criação de perguntas')
  let div3 = document.querySelector('.principal2')
  div3.classList.add('hidden')
  let div4 = document.querySelector('.principal3')
  div4.classList.remove('hidden')

  let titulo = document.getElementById("titulo").value
  let url = document.getElementById("url").value
  let qtsPergunta = parseInt(document.getElementById("qtsPergunta").value)
  let qtsDeNivel = parseInt(document.getElementById("qtsDeNivel").value)

  // Condicional da URL e Titulo
  if( titulo != "" && url != "" ){
    objectApiSend.title = titulo
    objectApiSend.image = url

  }else{
    alert("Dentro das caixa não pode estár vazia")

  }
  
  // Condicional da Quantidade de Pergunta
  if( isNaN(qtsPergunta) == false){

    if( qtsPergunta >= 3 && !qtsPergunta == 0){
      for(i=0; i < (qtsPergunta - 3); i++){
        // Sem terminar
      }
      
    }else{
      alert("O número não pode ser maior que 3 e nem pode ser 0")
    }
  }else{
    alert("Quantidades de perguntas não pode estar vazia e nem ser uma letra utilize apenas números")
  }
     
  // Condicional da Quantidade de Nivel
  if(isNaN(qtsDeNivel) == false && qtsDeNivel >= 2 && qtsDeNivel <= 4){
    
  }else{
    alert(" quantidade de nivel não pode ser um alfabeto utilize apenas números e o número tem que ser entre 2 e 4 niveis ")
  }

}




