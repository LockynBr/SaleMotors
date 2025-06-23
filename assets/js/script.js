import SlideNav from './slide.js';
import initMenuMobile from './menuMobile.js';
import initDropdownMenu from './menu.js';
import initCarrosselMarcas from './carrosselmarcas.js';
import initNumeroFaixa from './numero-faixa.js';
import initContato from './contato.js';
import initMenuRolagem from './menuRolagem.js';
import initFunil from './funil.js';

document.addEventListener('DOMContentLoaded', () => {
  const slideElement = document.querySelector('.slide');
  const slideWrapperElement = document.querySelector('.slide-wrapper');
  if (slideElement && slideWrapperElement) {
    const slide = new SlideNav('.slide', '.slide-wrapper');
    slide.init();
    const prevArrow = document.querySelector('.prev');
    const nextArrow = document.querySelector('.next');
    if (prevArrow && nextArrow) {
      slide.addArrow('.prev', '.next');
    }
  }

  const carouselTrack = document.getElementById('carousel-track');
  const carouselContainer = document.getElementById('carousel-container');
  if (carouselTrack && carouselContainer) {
    initCarrosselMarcas();
  }

  initMenuMobile();
  initDropdownMenu();
  initContato();
  initMenuRolagem();
});

initFunil();
initNumeroFaixa();
