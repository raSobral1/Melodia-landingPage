const botaoMenu = document.querySelector("#botao-menu");
const menuMobile = document.querySelector("#menu-mobile");
const iconeMenu = document.querySelector("#icone-menu");
const linksMobile = document.querySelectorAll(".link-mobile");

function fecharMenu() {
    menuMobile.classList.add("hidden");

    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");

    iconeMenu.classList.remove("fa-xmark");
    iconeMenu.classList.add("fa-bars");
        }

botaoMenu.addEventListener("click", function () {
    const menuEstaFechado = menuMobile.classList.contains("hidden");

    if (menuEstaFechado) {
        menuMobile.classList.remove("hidden");

        botaoMenu.setAttribute("aria-expanded", "true");
        botaoMenu.setAttribute("aria-label", "Fechar menu");

        iconeMenu.classList.remove("fa-bars");
        iconeMenu.classList.add("fa-xmark");
      } else {
        fecharMenu();
      }
    });

linksMobile.forEach(function (link) {
    link.addEventListener("click", fecharMenu);
    });


// Remover hidden quando o botão for pressionado.
// Adicionar hidden quando o menu for fechado.
// Trocar o ícone de barras pelo ícone de X.
// Atualizar os atributos de acessibilidade.
// A classe md:hidden garante que esse menu nunca apareça no computador.