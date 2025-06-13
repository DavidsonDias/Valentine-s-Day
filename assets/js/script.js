const reasons = [
  "Porque você me completa.",
  "Porque seu sorriso ilumina meu dia.",
  "Porque nossa família de quatro patas é o nosso lar.",
  "Porque com você, tudo faz sentido.",
  "Porque eu te amo infinitamente."
];

let index = 0;
function writeReasons() {
  if (index < reasons.length) {
    const li = document.createElement("li");
    li.textContent = reasons[index];
    document.getElementById("reasons").appendChild(li);
    index++;
    setTimeout(writeReasons, 2000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Parte 1: Bem-vindo, música e corações
  const welcomeScreen = document.getElementById('welcome-screen');
  const enterBtn = document.getElementById('enter-site');
  const music = document.getElementById('bg-music');
  const toggleMusic = document.getElementById('toggle-music');

  enterBtn.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
    music.play().then(() => {
      toggleMusic.innerHTML = 'Pausar Música <span class="music-icon">🔇</span>';
    }).catch(() => {
      toggleMusic.innerHTML = 'Tocar Música <span class="music-icon">❤️</span>';
    });

    writeReasons();

    // Corações flutuantes
    setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.textContent = '♥';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (3 + Math.random() * 3) + 's';
      document.querySelector('.hearts').appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, 500);
  });

  // Mover para fora do botão de entrada
  toggleMusic.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      toggleMusic.innerHTML = 'Pausar Música <span class="music-icon">🔇</span>';
    } else {
      music.pause();
      toggleMusic.innerHTML = 'Tocar Música <span class="music-icon">❤️</span>';
    }
  });

    

  // Parte 2: Texto da carta com assinatura digitada
  const textoCompleto = `Minha amada Roane,

Hoje é Dia dos Namorados... mas, sinceramente, todo dia ao seu lado já é um presente do amor. Desde que você chegou na minha vida, tudo ficou mais leve, mais bonito, mais cheio de sentido.

Você é minha paz depois de um dia difícil, meu riso nos momentos simples, meu abrigo quando o mundo parece desabar. É no seu olhar que eu encontro o lar mais verdadeiro, e no seu abraço, o lugar onde tudo faz sentido.

*Roane, te amar é a parte mais bonita de ser eu. É com você que aprendi que o amor mora nos detalhes — no cuidado, nas conversas na madrugada, nos silêncios confortáveis e até naquelas pequenas manias que só a gente entende.*

A vida ao seu lado é poesia escrita com gestos, sorrisos e afeto. Não preciso de grandes acontecimentos para ser feliz... basta saber que você está comigo, dividindo essa jornada com o coração aberto, com essa alma linda que me inspira todos os dias.

*Se eu pudesse escrever o mundo ideal, ele começaria com o som da sua risada e terminaria com você dormindo ao meu lado. Tudo entre esses dois momentos seria só uma extensão do quanto eu te amo.*

Essa carta é só uma forma de dizer o que transborda aqui dentro: obrigado por ser quem você é, por escolher caminhar comigo, por ser minha namorada, minha parceira, minha melhor amiga.

Hoje, mais do que nunca, quero que saiba que te amo com todo meu ser. E que, não importa o que aconteça, vou continuar escolhendo te amar, dia após dia, vida após vida.

Feliz Dia dos Namorados, meu amor.

Com todo o meu amor,
Davidson Dias`;

  const textoComHTML = textoCompleto
    .replace(/\*(.*?)\*/gs, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');

  const cartaElemento = document.getElementById("cartaTexto");
  let index = 0;

  function escreverTexto() {
    cartaElemento.innerHTML = textoComHTML.substring(0, index);
    if (index < textoComHTML.length) {
      index++;
      setTimeout(escreverTexto, 40);
    } else {
      escreverAssinatura();
    }
  }

  const assinaturaTexto = "— Com amor, Davidson 💌";
  let i = 0;
  function escreverAssinatura() {
    const el = document.getElementById("assinatura");
    if (i < assinaturaTexto.length) {
      el.textContent += assinaturaTexto.charAt(i);
      i++;
      setTimeout(escreverAssinatura, 50);
    }
  }

  escreverTexto(); // Inicia tudo
});


function initHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '♥';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 3) + 's';
    document.querySelector('.hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 500);
}
