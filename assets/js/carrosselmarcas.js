export default function initCarrosselMarcas(){
  const logos = [
    'LOGO-AUDI.png',
    'LOGO-BAJAJ.png',
    'LOGO-BMW-MOTORRAD.png',
    'LOGO-BMW.png',
    'LOGO-BYD.png',
    'LOGO-CAOA-CHERY.png',
    'LOGO-CHEVROLET.png',
    'LOGO-CITROEN.png',
    'LOGO-DODGE-RAM.png',
    'LOGO-FIAT.png',
    'LOGO-FORD.png',
    'LOGO-GWM.png',
    'LOGO-HONDA.png',
    'LOGO-HYUNDAI.png',
    'LOGO-JAGUAR.png',
    'LOGO-JEEP.png',
    'LOGO-KIA.png',
    'LOGO-LAND-ROVER.png',
    'LOGO-MERCEDES.png',
    'LOGO-MINI.png',
    'LOGO-MITSUBISHI.png',
    'LOGO-NISSAN.png',
    'LOGO-PEUGEOT.png',
    'LOGO-RENAULT.png',
    'LOGO-TOYOTA.png',
    'LOGO-VOLVO.png',
    'LOGO-WOLKSWAGEN.png',
  ];
  
  const logoPath = './assets/images/marcas/';
  const track = document.getElementById('carousel-track');
  
  function renderLogos() {
    for (let i = 0; i < 2; i++) {
      logos.forEach((logo) => {
        const img = document.createElement('img');
        img.src = `${logoPath}${logo}`;
        img.alt = `Logo ${logo.split('-')[1]?.replace('.png', '') || ''}`;
        img.draggable = false;
        img.style.userSelect = 'none';
        track.appendChild(img);
      });
    }
  }
  
  renderLogos();
  
  const container = document.getElementById('carousel-container');
  
  let isDragging = false;
  let startX;
  let scrollLeft;
  let autoScroll;
  
  function startAutoScroll() {
    stopAutoScroll();
    autoScroll = setInterval(() => {
      container.scrollLeft += 2; // ← VELOCIDADE DO CARROSSEL
  
      if (container.scrollLeft >= track.scrollWidth / 2) {
        container.scrollLeft = container.scrollLeft - track.scrollWidth / 2;
      }
  
      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollLeft + track.scrollWidth / 2;
      }
    }, 20); // ← INTERVALO 
  }
  
  function stopAutoScroll() {
    clearInterval(autoScroll);
  }
  
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.classList.add('dragging');
    stopAutoScroll();
    e.preventDefault();
  });
  
  container.addEventListener('mouseup', () => {
    isDragging = false;
    container.classList.remove('dragging');
    startAutoScroll();
  });
  
  container.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      container.classList.remove('dragging');
      startAutoScroll();
    }
  });
  
  container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  
    if (container.scrollLeft >= track.scrollWidth / 2) {
      container.scrollLeft = container.scrollLeft - track.scrollWidth / 2;
    }
    if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollLeft + track.scrollWidth / 2;
    }
  
    e.preventDefault();
  });
  
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    stopAutoScroll();
    e.preventDefault();
  });
  
  container.addEventListener('touchend', () => {
    isDragging = false;
    startAutoScroll();
  });
  
  container.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  
    if (container.scrollLeft >= track.scrollWidth / 2) {
      container.scrollLeft = container.scrollLeft - track.scrollWidth / 2;
    }
    if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollLeft + track.scrollWidth / 2;
    }
  
    e.preventDefault();
  });
  
  startAutoScroll();
  
}

