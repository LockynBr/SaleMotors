<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="assets/css/style.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Sale Motors">
  <meta property="og:title" content="Sale Motors">
  <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon">
  <meta name="description" content="A Sale Motors esta focada em aumentar vendas através da analise de campanhas no Google ADS e interação com seu site com o Google Analytics">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">


  <title>Sale Motors</title>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>
<noscript>
  <p class="aviso-js">Por favor, ative o JavaScript para uma melhor experiência.</p>
</noscript>

<body class="home">
  <!-- Vídeo Principal -->
  <section class="hero-section">
    <img src="assets/images/deco/pic-branco.svg" alt="decoração" class="icon-decor decor1">
    <img src="assets/images/deco/pic-branco.svg" alt="decoração" class="icon-decor decor2">
    <video preload="metadata" poster="assets/images/icones/logo.svg" autoplay muted loop class="hero-video">
      <source src="assets/video/intro-sm.mp4" type="video/mp4">
    </video>
    <div class="hero-overlay">
      <h1 class="videomain-title">S<span id="span-tittle">A</span>LE MOTORS</h1>

      <p class="videomain-text">
        A Sale Motors é uma empresa de referência nacional em tráfego pago, pois esta presente em mais de 22 estados do território nacional. Especialista em Meta Ads, Google Ads, LinkedIn Ads e TikTok Ads, entrega resultados reais com foco em performance e escala. Em expansão, oferece soluções completas para marcas que buscam presença digital sólida e crescimento consistente.
      </p>

      <div class="videomain-footer">
        <p>
          Empresa certificada
          <a class="videomain-highlight" href="https://www.google.com/partners/agency?id=8905629692" target="_blank">Google Partner Premier</a>
        </p>
      </div>
  </section>

  <!-- Menu -->
  <header class="menu-navbar">
    <div class="menu-container">
      <div class="menu-logo">
        <a href="./">
          <img id="menu-imagem-logo" src="assets/images/icones/motor-branco.svg" alt="Logo Sale Motors" />
        </a>
      </div>
      <nav>
        <button data-menu="button" class="menu-button" aria-expanded="false" aria-controls="menu">Menu</button>
        <ul data-menu="list" id="menu" class="menu-list">
          <img id="menu-img-mb" src="assets/images/icones/logo-sm.svg" alt="Logo Sale Motors" />
          <li><a href="./">Home</a></li>
          <li><a href="sobre.php">Sobre</a></li>
          <li data-dropdown class="menu-no-hover">
            <a href="#">Serviços</a>
            <ul class="menu-dropdown">
              <li><a href="campanhas-google.php">Campanhas de Google</a></li>
              <li><a href="campanhas-meta.php">Campanhas de Meta</a></li>
              <li><a href="tiktok-linkedin.php">LinkedIn e TikTok</a></li>
              <li><a href="monitoria.php">Monitoria</a></li>
            </ul>
          </li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Sobre Nós -->

  <section class="sobre-nos-bg">
    <div class="sobre-nos-container container">
      <div class="sobre-nos-content">
        <div class="sobre-nos-text">
          <h2 class="title">SOBRE NÓS</h2>
          <img src="assets/images/icones/mini-icon.svg" alt="Ícone decorativo" class="sobre-nos-icon-right">
          <p>No cenário atual, investir no digital não é mais uma opção — é uma necessidade. A Sale Motors nasceu de uma ideia simples, mas original: olhar para a estratégia digital como um todo, sem perder o foco em resultados concretos.
            Sabemos que a fragmentação das plataformas e ferramentas pode dificultar a visão clara do que realmente está funcionando. Por isso, oferecemos uma curadoria completa em tráfego pago, capaz de alinhar performance, análise e desenvolvimento estratégico contínuo.
            Acompanhamos de perto a jornada do seu time e da sua marca, agregando valor de forma duradoura. O impacto é rápido e perceptível: mais leads qualificados, maior taxa de conversão e crescimento com eficiência.
            Entre em contato e saiba como impulsionar sua performance.
          </p>
          <a href="#" class="sobre-nos-btn">SAIBA MAIS</a>
          <img src="assets/images/icones/mini-icon.svg" alt="Ícone decorativo" class="sobre-nos-icon-left">
        </div>
        <div class="sobre-nos-image">
          <img src="assets/images/icones/engine-icon.png" alt="Ícone de Motor">
        </div>
      </div>
    </div>
  </section>

  <!-- Carrossel de Marcas -->
  <div class="carousel-container" id="carousel-container">
    <div class="carousel-track" id="carousel-track"></div>
  </div>

  <!-- Carrossel de Imagens -->
  <div class="slide-wrapper">
    <ul class="slide">
      <li>
        <a href="./campanhas-google.html">
          <img src="assets/images/icones/campanhasdegoogle.png" alt="">
        </a>
      </li>
      <li>
        <a href="./campanhas-meta.html">
          <img src="assets/images/icones/campanhasdemeta.png" alt="">
        </a>
      </li>
      <li>
        <a href="./tiktok-linkedin.html">
          <img src="assets/images/icones/linkedinetiktok.png" alt="">
        </a>
      </li>
      <li>
        <a href="./monitoria.html">
          <img src="assets/images/icones/Monitoria.png" alt="">
        </a>
      </li>
    </ul>
  </div>
  <div class="arrow-nav">
    <button class="prev"></button>
    <button class="next"></button>
  </div>

  <!-- Faixa do Google Partner -->
  <section class="faixa-google-partner">
    <div class="hover-partner">
      <div class="faixa-principal-box">
        <div class="container-faixa-google container">
          <div class="google-partner-selo">
            <a href="https://www.google.com/partners/agency?id=8905629692" target="_blank">
              <img src="https://www.gstatic.com/partners/badge/images/2025/PremierBadgeClickable.svg" alt="Google Partner Premier" />
            </a>
          </div>
          <h3 class="titulo-faixa-google">Somos Google Partner Premier</h3>
        </div>
      </div>
      <div class="google-partner-result">
        <p>Recebemos o selo Partner Premier do Google, que reconhece as agências com melhor desempenho no uso do Google Ads. Fazemos parte do seleto grupo dos 3% melhores parceiros do país, com destaque na conquista e crescimento de clientes. Além disso, fazemos parte do Diretório oficial do Google e temos acesso a benefícios exclusivos para potencializar os resultados dos nossos clientes.</p>
      </div>
    </div>
  </section>


  <!-- Funil -->
  <section class="container-funil">
    <div class="container-content container">
      <img class="icon-funil" src="assets/images/deco/pictograma-ctt.svg" alt="Pictograma">
      <h2>TEMOS O QUE VOCÊ PRECISA PARA IMPULSIONAR O SEU NEGÓCIO</h2>
      <div class="box-group">
        <button class="box" data-icon-default="assets/images/icones/pecas-xadrez.svg" data-icon-ativo="assets/images/icones/pecas-xadrez-branco.svg" data-bg="#10133B">
          <div class="box-itens">
            <img src="assets/images/icones/pecas-xadrez.svg" alt="">
            <p>Planejamento Estratégico de Tráfego</p>
          </div>
        </button>

        <button class="box" data-icon-default="assets/images/icones/ferramentas.svg" data-icon-ativo="assets/images/icones/ferramentas-branco.svg" data-bg="#2D3D64">
          <div class="box-itens">
            <img src="assets/images/icones/ferramentas.svg" alt="">
            <p>Execução e Otimização em Plataformas</p>
          </div>
        </button>

        <button class="box" data-icon-default="assets/images/icones/engrenagem.svg" data-icon-ativo="assets/images/icones/engrenagem-branco.svg" data-bg="#49678D">
          <div class="box-itens">
            <img src="assets/images/icones/engrenagem.svg" alt="">
            <p>Monitoria</p>
          </div>
        </button>

        <button class="box" data-icon-default="assets/images/icones/medalha.svg" data-icon-ativo="assets/images/icones/medalha-branco.svg" data-bg="#7598C4">
          <div class="box-itens">
            <img src="assets/images/icones/medalha.svg" alt="">
            <p>Equipe certificada</p>
          </div>
        </button>

      </div>

      <div class="result-content">
        <img id="result-img" src="assets/images/icones/funil-sm-centro.png" alt="">
        <p id="result-text"></p>
      </div>
      <img class="icon-funil1" src="assets/images/deco/pictograma-ctt.svg" alt="Pictograma">
    </div>

  </section>

  <!-- Faixa de Números -->
  <section class="counter-section">
    <div class="counter-box">
      <div class="counter" data-target="6" data-format="default">+0</div>
      <div class="description">anos de experiência</div>
    </div>
    <div class="counter-box">
      <div class="counter" data-target="23000000" data-format="million">
        +0
      </div>
      <div class="description">de reais em anúncios</div>
    </div>
    <div class="counter-box">
      <div class="counter" data-target="125" data-format="default">+0</div>
      <div class="description">clientes satisfeitos</div>
    </div>
  </section>

  <!-- Mapa -->
  <section class="mapa-container">
    <div class="container-conteudo container">
      <h2 class="title">ESTADOS QUE ATUAMOS</h2>
      <div class="mapa-conteudo">
        <div class="coluna-esquerda">
          <div class="regiao">
            <h3>Região Norte</h3>
            <ul>
              <li>Acre</li>
              <li>Amazonas</li>
              <li>Pará</li>
              <li>Roraima</li>
              <li>Tocantins</li>
            </ul>
          </div>
          <div class="regiao">
            <h3>Região Centro-Oeste</h3>
            <ul>
              <li>Goiás</li>
              <li>Mato Grosso do Sul</li>
            </ul>
          </div>
          <div class="regiao">
            <h3>Região Sul</h3>
            <ul>
              <li>Paraná</li>
              <li>Rio Grande do Sul</li>
            </ul>
            <img class="icon-mapa" src="assets/images/deco/pictograma-ctt.svg" alt="Pictograma">
          </div>
        </div>
        <img src="assets/images/icones/mapa-brasil-sm.png" alt="Mapa do Brasil" class="mapa-img" />
        <div class="coluna-direita">
          <div class="regiao">
            <h3>Região Nordeste</h3>
            <ul>
              <li>Alagoas</li>
              <img class="icon2" src="assets/images/deco/pictograma-ctt.svg" alt="Pictograma">
              <li>Bahia</li>
              <li>Ceará</li>
              <li>Maranhão</li>
              <li>Paraíba</li>
              <li>Pernambuco</li>
              <li>Piauí</li>
              <li>Rio Grande do Norte</li>
              <li>Sergipe</li>
            </ul>
          </div>
          <div class="regiao">
            <h3>Região Sudeste</h3>
            <ul>
              <li>Minas Gerais</li>
              <li>Rio de Janeiro</li>
              <li>São Paulo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contato -->
  <div id="contato" class="contato-container">
    <div class="contato-box">

      <section id="contato-dados" class="contato-dados" aria-label="Endereço">
        <h2>Contato - Sale Motors</h2>
        <div class="contato-endereco">
          <p> R. Agenor Lopes, 277 - Sala 1101 e 1102 - Boa Viagem, Recife - PE, 51021-110</p>
        </div>
        <address class="contato-meios">
          <a href="mailto:contato@salemotors.com">contato@salemotors.com</a>
          <a href="tel:+5581992537492">(81) 99253-7492</a>
        </address>
        <div class="contato-horario">
          <img class="icon-contato" src="assets/images/deco/pictograma-ctt.svg" alt="">
          <p>Seg - Sex: 9:00 - 18:00</p>
          <p>Sáb: 10:00 - 14:00</p>
          <p>Dom: fechado</p>
        </div>
        <div class="contato-redes">
          <a href="./">
            <img class="ig-ctt" src="assets/images/redes/instagram.svg" alt="Instagram">
          </a>
          <a href="./">
            <img class="ig-ctt" src="assets/images/redes/facebook.svg" alt="Facebook">
          </a>
        </div>
      </section>
      <section class="contato-formulario" aria-label="Formulário">
        <form class="form" action="lib/enviar.php" method="post">
          <div>
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Seu nome">
          </div>
          <div>
            <label for="telefone">Telefone</label>
            <input type="text" id="telefone" name="telefone" placeholder="(99) 99999-9999">
          </div>
          <div class="col-2">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="contato@email.com">
          </div>
          <div class="col-2">
            <label for="mensagem">Mensagem</label>
            <textarea rows="5" id="mensagem" name="mensagem" placeholder="O que você precisa?"></textarea>
          </div>
          <div class="g-recaptcha" data-sitekey="6LeusdErAAAAAOWJCf5Zt--v5OxlKLodAXDkPTbe"></div>
          <button type="submit" name="enviar" class="botao col-2">Enviar Mensagem</button>
        </form>
        <?php if (isset($_GET['status'])): ?>
          <?php if ($_GET['status'] === 'sucesso'): ?>
            <div class="mensagem sucesso">
              ✅ E-mail enviado com sucesso!
            </div>
          <?php elseif ($_GET['status'] === 'erro'): ?>
            <div class="mensagem erro">
              ❌ Ocorreu um erro ao enviar o e-mail. Tente novamente.
            </div>
          <?php endif; ?>
        <?php endif; ?>
      </section>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <div class="logo">
      <img src="assets/images/icones/logo.svg" alt="Sale Motors" />
      <div class="google-partner">
        <a href="https://www.google.com/partners/agency?id=8905629692" target="_blank">
          <img src="https://www.gstatic.com/partners/badge/images/2025/PremierBadgeClickable.svg" />
        </a>
      </div>
    </div>

    <div class="contact">
      <h3>CONTATO</h3>
      <p class="numero">+55 (81) 99253-7492</p>
      <div class="divider"></div>
      <p>R. Agenor Lopes, 277 - Sala 1101 e</p>
      <p>1102 - Boa Viagem, Recife - PE,</p>
      <p>51021-110</p>
      <div class="divider"></div>
      <div class="social-icons">
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-facebook"></i></a>
      </div>
    </div>

    <div class="links services">
      <h3>SERVIÇOS</h3>
      <ul>
        <nav>
          <li><a href="./campanhas-google.html">Campanhas de Google</a></li>
          <li><a href="./campanhas-meta.html">Campanhas de Meta</a></li>
          <li><a href="./tiktok-linkedin.html">Linkedin e TikTok</a></li>
          <li><a href="./monitoria.html">Monitoria</a></li>
        </nav>
      </ul>
    </div>

    <div class="links info">
      <h3>INFORMAÇÕES</h3>
      <ul>
        <nav>
          <li><a href="./">Home</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><a href="./sobre.html">Sobre</a></li>
        </nav>
      </ul>
    </div>

    <div class="copyright">
      <p>Sale Motors © Todos direitos reservados.</p>
    </div>
  </footer>

  <!-- Whatsapp Flutuante -->
  <a class="whatsapp-position" href="https://wa.me/5581992537492?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20como%20vocês%20podem%20me%20ajudar%20com%20estratégias%20digitais%20para%20meu%20negócio.">
    <img class="whatsapp-flutuante" src="assets/images/icones/icon-wpp.svg" alt="Whatsapp" width="200" height="200">
  </a>

  <script type="module" src="assets/js/script.js"></script>
  <script>
    setTimeout(() => {
      const msg = document.querySelector('.mensagem');
      if (msg) {
        msg.classList.add('ocultar');
        setTimeout(() => msg.remove(), 500);
      }
    }, 5000);
  </script>

</body>

</html>