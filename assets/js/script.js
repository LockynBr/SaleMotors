// script.js
import SlideNav from './slide.js';
import initMenuMobile from './menuMobile.js';
import initDropdownMenu from './menu.js';
import initCarrosselMarcas from './carrosselmarcas.js';
import initNumeroFaixa from './numero-faixa.js'; // Importar o script
import initContato from './contato.js';
import initMenuRolagem from './menuRolagem.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inicializações do SlideNav
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
        const customControls = document.querySelector('.custom-controls');
        if (customControls) {
            slide.addControl('.custom-controls');
        } else {
            slide.addControl(); 
        }
    }

    // Inicialização do Carrossel de Marcas
    const carouselTrack = document.getElementById('carousel-track');
    const carouselContainer = document.getElementById('carousel-container');
    if (carouselTrack && carouselContainer) { 
        initCarrosselMarcas();
    }

    // Inicialização do Contador de Números (Numero Faixa)
    // Você precisa saber o seletor exato que 'initNumeroFaixa' usa.
    // Se for '.counter-section', por exemplo:
    const counterSection = document.querySelector('.counter-section');
    if (counterSection) {
        initNumeroFaixa();
    }
    // Se 'initNumeroFaixa' usa múltiplos seletores, você deve verificar todos.

    // Inicializações que provavelmente existem em todas as páginas:
    initMenuMobile();
    initDropdownMenu();
    initContato(); 
    initMenuRolagem(); // Seu menu-navbar existe em campanhas-google.html, então esta deve funcionar.
});