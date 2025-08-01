export default function initFunil() {
  const resultados = [
    {
      img: 'assets/images/icones/funil-sm-centro.png',
      texto: '',
    },
    {
      img: 'assets/images/icones/execucaoeotimazacaoemplataformas-alt.png',
      texto:
        'Atuamos diretamente na criação, configuração e otimização das campanhas em Meta Ads, Google Ads, LinkedIn Ads, TikTok Ads e outras, garantindo que cada anúncio entregue o melhor desempenho possível.',
    },
    {
      img: 'assets/images/icones/monitoria-alt.png',
      texto:
        'Fazemos um acompanhamento contínuo de todas as ações implementadas nas suas plataformas. Isso inclui análise de métricas, identificação de gargalos, oportunidades de crescimento e ajustes estratégicos em tempo real. Nossa monitoria garante que você tenha total controle do que está funcionando e o que precisa ser melhorado para manter o desempenho sempre em alta.',
    },
    {
      img: 'assets/images/icones/equipecertificada-alt.png',
      texto:
        'Nossa equipe é composta por profissionais certificados pelas principais plataformas do mercado digital. Isso significa que estamos sempre atualizados com as melhores práticas, ferramentas e estratégias do setor. Trabalhamos com comprometimento, conhecimento técnico e foco em resultados, oferecendo um atendimento consultivo e soluções personalizadas para cada etapa do seu funil de vendas.',
    },
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.box');
    const resultImg = document.querySelector('#result-img');
    const resultText = document.querySelector('#result-text');

    function ativarBotao(index) {
      buttons.forEach((btn) => {
        btn.classList.remove('ativo');
        btn.style.backgroundColor = '#E6E7E8';
        btn.style.removeProperty('--bg-cor');
        const img = btn.querySelector('img');
        img.src = btn.dataset.iconDefault;
      });

      const button = buttons[index];
      button.classList.add('ativo');
      button.querySelector('img').src = button.dataset.iconAtivo;
      button.style.backgroundColor = button.dataset.bg;
      button.style.setProperty('--bg-cor', button.dataset.bg);

      resultImg.src = resultados[index].img;
      resultText.innerHTML = resultados[index].texto;

      resultImg.classList.remove('primeira-imagem');
      if (index === 0) {
        resultImg.classList.add('primeira-imagem');
      }

      resultText.style.display = index === 0 ? 'none' : 'block';
    }

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => ativarBotao(index));
    });

    ativarBotao(0);
  });
}
