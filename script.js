const requestAPI = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
requestAPI.then(
  carregarQuizes
)

// let titulo = document.getElementById("titulo").value
// let url = document.getElementById("url").value
// let qtsPergunta = parseInt(document.getElementById("qtsPergunta").value)
// let qtsDeNivel = parseInt(document.getElementById("qtsDeNivel").value)


function carregarQuizes(resposta){

  const element_todos_quizes = document.querySelector(".todos-quizz")
  for(i=0; i < 6; i++){
    element_todos_quizes.innerHTML += `
    <div class="quiz">
      <div class="gradient-Vertical"></div>
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
  let div1 = document.querySelector('.criar-quizz')
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
  // let div3 = document.querySelector('.principal2')
  // div3.classList.add('hidden')
  // let div4 = document.querySelector('.principal3')
  // div4.classList.remove('hidden')
  // let div5 = document.querySelector('.principal4');

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

    if (qtsPergunta >= 3){
      let div3 = document.querySelector('.principal2')
      div3.classList.add('hidden')
      let div4 = document.querySelector('.principal3')
      div4.classList.remove('hidden')
      for (let i=3; i < qtsPergunta; i++) {
        // Sem terminar
        div4.innerHTML += `<button onclick="selecionarPergunta(this)" class="não-selecionado">
        <h2 class="mostrar">Pergunta ${i+1}</h2>
        <input class="pergunta" placeholder="Texto da pergunta">
        <input class="pergunta" placeholder="Cor de fundo da pergunta">
        <h2>Resposta correta</h2>
        <input class="correta" placeholder="Resposta correta">
        <input class="correta" placeholder="URL da imagem">
        <h2>Respostas incorretas</h2>
        <input class="incorreta-1" placeholder="Resposta incorreta 1">
        <input class="incorreta-1 margem" placeholder="URL da imagem 1">
        <input class="incorreta-2" placeholder="Resposta incorreta 2">
        <input class="incorreta-2 margem" placeholder="URL da imagem 2">
        <input class="incorreta-3" placeholder="Resposta incorreta 3">
        <input class="incorreta-3 margem" placeholder="URL da imagem 3">
      </button>`
      }
      let botao = document.querySelector('.principal3');
      botao.innerHTML += `<button class="botao-nivel" onclick="criarNiveis()">Prosseguir para criar níveis</button>`     
    }else{
      alert("O número não pode ser menor que 3")
    }
  }else{
    alert("Quantidades de perguntas não pode estar vazia e nem ser uma letra utilize apenas números")
    return
  }
     
  // Condicional da Quantidade de Nivel
  if(isNaN(qtsDeNivel) == false && qtsDeNivel >= 2){
    let div5 = document.querySelector('.principal4');
    for (let i=2; i < qtsDeNivel; i++) {
      // Sem terminar
      div5.innerHTML += `<button onclick="selecionarNivel(this)" class="não-selecionado">
      <h2>Nível ${i+1}</h2>
      <input placeholder="Título do nível">
      <input placeholder="% de acerto mínima">
      <input placeholder="URL da imagem do nível">
      <input placeholder="Descrição do nível">
    </button>`
    }
  
    let botao2 = document.querySelector('.principal4');
    botao2.innerHTML += `<button class="fim-quiz" onclick="finalizarQuiz()">Finalizar Quizz</button>` 
  }else{
    alert("Quantidade de nivel não pode ser um alfabeto e devem ser utilizados números maiores ou igual a 2.")
    let div3 = document.querySelector('.principal2')
      div3.classList.remove('hidden')
      let div4 = document.querySelector('.principal3')
      div4.classList.add('hidden')
  }

}

function selecionarPergunta(botao) {
  let botoes = document.querySelectorAll('.principal3>button');
  for (let i=0; i<botoes.length; i++) {
    botoes[i].classList.add('não-selecionado');
  }
  botao.classList.remove('não-selecionado');
  // botao.classList.add('selecionado')
  
  
  // remover.classList.remove('selecionado')
}

function criarNiveis() {
  let div4 = document.querySelector('.principal3');
  div4.classList.add('hidden');
  let div5 = document.querySelector('.principal4');
  div5.classList.remove('hidden')

  

  // if(isNaN(qtsDeNivel) == false && qtsDeNivel >= 2 && qtsDeNivel <= 4){

  //   let div4 = document.querySelector('.principal3');
  //   div4.classList.add('hidden');
  //   let div5 = document.querySelector('.principal4');
  //   div5.classList.remove('hidden')

  //   for (let i=2; i < qtsDeNivel; i++) {
  //     // Sem terminar
  //     div5.innerHTML += `<button onclick="selecionarNivel(this)" class="não-selecionado">
  //     <h2>Nível 2</h2>
  //     <input placeholder="Título do nível">
  //     <input placeholder="% de acerto mínima">
  //     <input placeholder="URL da imagem do nível">
  //     <input placeholder="Descrição do nível">
  //   </button>`
  //   }
  
  //   let botao2 = document.querySelector('.principal4');
  //   botao2.innerHTML += `<button class="fim-quiz" onclick="finalizarQuiz()">Finalizar Quizz</button>` 
  // }else{
  //   alert(" Quantidade de nivel não pode ser um alfabeto. Utilize apenas números entre 2 e 4.")
    
  // }

  
  // console.log(qtsDeNivel)
  // alert('Você irá para a criação dos níveis');
  // setTimeout(alert, 200, 'Você irá para a criação dos níveis')

//   if (qtsdeNivel >= 2){
//     for (let i=2; i < qtsdeNivel; i++) {
//       // Sem terminar
//       div5.innerHTML += `<button onclick="selecionarNível(this)" class="não-selecionado">
//       <h2>Nível 2</h2>
//       <input placeholder="Título do nível">
//       <input placeholder="% de acerto mínima">
//       <input placeholder="URL da imagem do nível">
//       <input placeholder="Descrição do nível">
//     </button>`
//     }
//     let botao = document.querySelector('.principal4');
//     botao.innerHTML += `<button class="botao-nivel" onclick="criarNiveis()">Prosseguir para criar níveis</button>` 
//   }
//   else{
//     alert("O número não pode ser menor que 2")
// }


}

function selecionarNivel(botao) {
  let botoes = document.querySelectorAll('.principal4>button');
  for (let i=0; i<botoes.length; i++) {
    botoes[i].classList.add('não-selecionado');
  }
  botao.classList.remove('não-selecionado');
  // botao.classList.add('selecionado')
  
  
  // remover.classList.remove('selecionado')
}

function finalizarQuiz() {
  let div5 = document.querySelector('.principal4');
  div5.classList.add('hidden');
  let div6 = document.querySelector('.principal5');
  div6.classList.remove('hidden');

}

function voltarHome() {

  location.reload(true)

}

function acessarQuiz () {
  
}
