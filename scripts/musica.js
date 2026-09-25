const audio = document.querySelector("#audio-player");
const botaoOuvir = document.querySelector("#botao-ouvir");
const botaoPlay = document.querySelector("#botao-play");
const iconePlay = document.querySelector("#icone-play");
const botaoVoltar = document.querySelector("#botao-voltar");
const botaoAvancar = document.querySelector("#botao-avancar");
const botaoMudo = document.querySelector("#botao-mudo");
const iconeVolume = document.querySelector("#icone-volume");
const botaoRepetir = document.querySelector("#botao-repetir");
const progressoMusica = document.querySelector("#progresso-musica");
const tempoAtual = document.querySelector("#tempo-atual");
const tempoTotal = document.querySelector("#tempo-total");

function formatarTempo(segundos) {
  if (!Number.isFinite(segundos)) return "0:00";

  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = Math.floor(segundos % 60);
  return `${minutos}:${String(segundosRestantes).padStart(2, "0")}`;
}

function atualizarBotaoPlay() {
  const estaTocando = !audio.paused;
  iconePlay.classList.toggle("fa-play", !estaTocando);
  iconePlay.classList.toggle("fa-pause", estaTocando);
  botaoPlay.setAttribute("aria-label", estaTocando ? "Pausar música" : "Reproduzir música");
}

function alternarReproducao() {
  if (audio.paused) {
    audio.play().catch(function () {
      atualizarBotaoPlay();
    });
  } else {
    audio.pause();
  }
}

botaoPlay.addEventListener("click", alternarReproducao);
botaoOuvir.addEventListener("click", function (evento) {
  evento.preventDefault();
  alternarReproducao();
});

audio.addEventListener("play", atualizarBotaoPlay);
audio.addEventListener("pause", atualizarBotaoPlay);
audio.addEventListener("ended", atualizarBotaoPlay);

audio.addEventListener("loadedmetadata", function () {
  progressoMusica.max = audio.duration;
  tempoTotal.textContent = formatarTempo(audio.duration);
});

audio.addEventListener("timeupdate", function () {
  progressoMusica.value = audio.currentTime;
  tempoAtual.textContent = formatarTempo(audio.currentTime);
});

progressoMusica.addEventListener("input", function () {
  audio.currentTime = Number(progressoMusica.value);
});

botaoVoltar.addEventListener("click", function () {
  audio.currentTime = Math.max(0, audio.currentTime - 10);
});

botaoAvancar.addEventListener("click", function () {
  audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10);
});

botaoMudo.addEventListener("click", function () {
  audio.muted = !audio.muted;
  iconeVolume.classList.toggle("fa-volume-high", !audio.muted);
  iconeVolume.classList.toggle("fa-volume-xmark", audio.muted);
  botaoMudo.setAttribute("aria-pressed", String(audio.muted));
  botaoMudo.setAttribute("aria-label", audio.muted ? "Ativar som" : "Desativar som");
});

botaoRepetir.addEventListener("click", function () {
  audio.loop = !audio.loop;
  botaoRepetir.classList.toggle("text-[#38BDF8]", audio.loop);
  botaoRepetir.classList.toggle("text-[#94A3B8]", !audio.loop);
  botaoRepetir.setAttribute("aria-pressed", String(audio.loop));
});