RenderizarMsg();

function RenderizarMsg() {
    let Renderizar = document.querySelector(".criar-quizz");
    Renderizar.innerHTML = "";
    Renderizar.innerHTML = `
    <div class="header">BuzzQuizz</div>
    <div class="main">
      <div class="caixa-criar-quizz">
        <div class="meuQuizz">
          <p>Você não criou nenhum quizz ainda :(</p>
          <div class="criarQuizz" onclick="criarQuizz()">Criar Quizz</div>
        </div>
      </div>
      <div class="caixa-meus-projetos">
        <div class="title hidden">
          <h1>Seus Quizzes</h1>
          <ion-icon name="add-circle-sharp" onclick="criarQuizz()"></ion-icon>
        </div>
      </div>
      <div class="caixasQuizz">
        <h1>Todos os Quizzes</h1>
        <div class="TodosQuizz"></div>
      </div>
    </div>
    `;
  }
