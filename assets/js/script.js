import SlideNav from './slide.js';
import initMenuMobile from './menuMobile.js';
import initDropdownMenu from './menu.js';
import initCarrosselMarcas from './carrosselmarcas.js';
import initNumeroFaixa from './numero-faixa.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');
initMenuMobile()
initDropdownMenu()
initCarrosselMarcas()
initNumeroFaixa()