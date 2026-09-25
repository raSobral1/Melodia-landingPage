// Animações de entrada e rolagem
const elementosAnimados = document.querySelectorAll("[data-reveal]");
const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

elementosAnimados.forEach(function (elemento) {
  elemento.style.setProperty("--reveal-delay", `${elemento.dataset.delay || 0}ms`);
});

if (movimentoReduzido || !("IntersectionObserver" in window)) {
  elementosAnimados.forEach(function (elemento) {
    elemento.classList.add("is-visible");
  });
} else {
  const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) return;
      entrada.target.classList.add("is-visible");
      observador.unobserve(entrada.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -40px" });

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      elementosAnimados.forEach(function (elemento) {
        observador.observe(elemento);
      });
    });
  });
}
