export default function initFunil() {
  const resultados = [
    {
      img: 'assets/images/icones/funil-sm.png',
      texto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, itaque sint. Doloribus tenetur nihil molestiae odio eveniet commodi tempore maxime ab, aliquam repudiandae vitae, ullam magni vero officia quasi ratione? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi error fuga numquam aliquam laboriosam quis necessitatibus assumenda, asperiores adipisci ipsa maiores et, excepturi quasi ipsam mollitia, odio quae ut obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia quod quae vitae nesciunt id quasi at nemo fugiat soluta cumque ipsam enim voluptatibus consequuntur ab, beatae delectus? Provident, debitis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere nesciunt eos nostrum tenetur quae harum ipsa commodi magnam natus. Provident ut necessitatibus quasi nihil quo, iusto temporibus sequi officia fugit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias libero sint quos, explicabo quia enim ex autem tempora officiis magni, voluptatum doloremque sequi impedit. Perspiciatis cum quaerat quas praesentium aut? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis repellendus doloremque beatae velit ratione maiores totam ducimus, labore eos vero similique tempora blanditiis ipsam error perspiciatis animi sapiente veniam iste.',
    },
    {
      img: 'assets/images/icones/funil-sm.png',
      texto:
        'Prestamos serviços especializados nas maiores plataformas do mercado, como Google Ads, Meta Ads (Facebook/Instagram), TikTok, LinkedIn e marketplaces como Amazon e Mercado Livre. Desde a criação e otimização de campanhas até a gestão de produtos e análise de performance, garantimos que sua presença online seja profissional, eficiente e orientada para resultados concretos.',
    },
    {
      img: 'assets/images/icones/funil-sm.png',
      texto:
        'Fazemos um acompanhamento contínuo de todas as ações implementadas nas suas plataformas. Isso inclui análise de métricas, identificação de gargalos, oportunidades de crescimento e ajustes estratégicos em tempo real. Nossa monitoria garante que você tenha total controle do que está funcionando — e o que precisa ser melhorado — para manter o desempenho sempre em alta.',
    },
    {
      img: 'assets/images/icones/funil-sm.png',
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
      resultText.textContent = resultados[index].texto;
    }

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => ativarBotao(index));
    });

    ativarBotao(0);
  });
}
