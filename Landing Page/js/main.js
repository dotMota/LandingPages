// Função que carrega uma seção via fetch e insere no seletor alvo
async function loadSection(section, target) {
    try {
      const response = await fetch(`sections/${section}.html`);
      if (!response.ok) throw new Error(`Erro ao carregar ${section}: ${response.statusText}`);
      const html = await response.text();
      document.querySelector(target).innerHTML += html;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Quando o DOM estiver carregado, cria os containers e inclui as seções.
  document.addEventListener("DOMContentLoaded", async () => {
    const app = document.getElementById("app");
    // Cria um container para cada seção (a ordem pode ser ajustada conforme necessário)
    app.innerHTML = `
        <div id="header"></div>
        <div id="destaques"></div>
        <div id="sobre"></div>
        <div id="unidades"></div>
        <div id="equipe"></div>
        <div id="lazer"></div>
        <div id="terreno"></div>
        <div id="mapa"></div>
        <div id="corretores"></div>
        <div id="cta-flutuante"></div>
    `;
    
    // Carrega as seções (os nomes dos arquivos devem corresponder à pasta sections)
    await loadSection("header", "#header");
    await loadSection("destaques", "#destaques");
    await loadSection("sobre", "#sobre");
    await loadSection("unidades", "#unidades");
    await loadSection("equipe", "#equipe");
    await loadSection("lazer", "#lazer");
    await loadSection("terreno", "#terreno");
    await loadSection("mapa", "#mapa");
    await loadSection("corretores", "#corretores");
    await loadSection("cta-flutuante", "#cta-flutuante");
    
    // Inicializa o carrossel do cabeçalho, se existir
    const carouselTop = document.getElementById("carouselTop");
    if (carouselTop) {
      new bootstrap.Carousel(carouselTop, {
        interval: 5000,
        pause: "hover",
      });
    }
    
    // Inicializa o carrossel da equipe, se presente
    const carouselEquipe = document.getElementById("carouselEquipe");
    if (carouselEquipe) {
      new bootstrap.Carousel(carouselEquipe, {
        interval: 5000,
        pause: "hover",
      });
    }
    
    // Inicializa o carrossel dos corretores, se presente
    const carouselCorretores = document.getElementById("carouselCorretores");
    if (carouselCorretores) {
      new bootstrap.Carousel(carouselCorretores, {
        interval: 5000,
        pause: "hover",
      });
    }
    
    // Inicializa o lightbox para as imagens de plantas e lazer
    new SimpleLightbox('.planta-container a, .lazer-carrossel a', {
      captionsData: "alt",
      captionDelay: 200,
      animationSpeed: 300,
      fadeSpeed: 300,
    });
  });
  