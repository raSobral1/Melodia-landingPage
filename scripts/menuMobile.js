
// MENU PARA VERSAO MOBILE

const botaoMenu = document.querySelector("#botao-menu");
const menuMobile = document.querySelector("#menu-mobile");
const iconeMenu = document.querySelector("#icone-menu");
const linksMobile = document.querySelectorAll(".link-mobile");

function fecharMenu() {
  menuMobile.classList.add("hidden");
  botaoMenu.setAttribute("aria-expanded", "false");
  botaoMenu.setAttribute("aria-label", "Abrir menu");
  iconeMenu.classList.replace("fa-xmark", "fa-bars");
}

botaoMenu.addEventListener("click", function () {
  const menuEstaFechado = menuMobile.classList.contains("hidden");

  if (menuEstaFechado) {
    menuMobile.classList.remove("hidden");
    botaoMenu.setAttribute("aria-expanded", "true");
    botaoMenu.setAttribute("aria-label", "Fechar menu");
    iconeMenu.classList.replace("fa-bars", "fa-xmark");
  } else {
    fecharMenu();
  }
});

linksMobile.forEach(function (link) {
  link.addEventListener("click", fecharMenu);
});
