export default function initFunil() {
  const data = [
    {
      img: 'assets/images/icones/funil-sm.png',
      text: 'Desenvolvemos estratégias de tráfego personalizadas para posicionar sua marca nas principais plataformas digitais. Trabalhamos com campanhas inteligentes, focadas em atrair o público certo, no momento certo, utilizando dados e análises de mercado para otimizar resultados. Nosso objetivo é gerar mais cliques, conversões e vendas, sempre respeitando o seu orçamento e metas de negócio.',
    },
    {
      img: 'assets/images/icones/funil-sm.png',
      text: 'Prestamos serviços especializados nas maiores plataformas do mercado, como Google Ads, Meta Ads (Facebook/Instagram), TikTok, LinkedIn e marketplaces como Amazon e Mercado Livre. Desde a criação e otimização de campanhas até a gestão de produtos e análise de performance, garantimos que sua presença online seja profissional, eficiente e orientada para resultados concretos.',
    },
    {
      img: 'assets/images/icones/funil-sm.png',
      text: 'Fazemos um acompanhamento contínuo de todas as ações implementadas nas suas plataformas. Isso inclui análise de métricas, identificação de gargalos, oportunidades de crescimento e ajustes estratégicos em tempo real. Nossa monitoria garante que você tenha total controle do que está funcionando — e o que precisa ser melhorado — para manter o desempenho sempre em alta.',
    },
    {
      img: 'assets/images/icones/funil-sm.png',
      text: 'Nossa equipe é composta por profissionais certificados pelas principais plataformas do mercado digital. Isso significa que estamos sempre atualizados com as melhores práticas, ferramentas e estratégias do setor. Trabalhamos com comprometimento, conhecimento técnico e foco em resultados, oferecendo um atendimento consultivo e soluções personalizadas para cada etapa do seu funil de vendas.',
    },
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.box');
    const img = document.querySelector('#result-img');
    const text = document.querySelector('#result-text');

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        img.src = data[index].img;
        text.textContent = data[index].text;
      });
    });
  });
}
