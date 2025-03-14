const botaoMenu = document.querySelector(".botao-menu");
const navegacao = document.querySelector(".navegacao");

botaoMenu.addEventListener("click", () => {
  navegacao.classList.toggle("ativa");
});
