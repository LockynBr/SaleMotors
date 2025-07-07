import debounce from './debounce.js';

export class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = { finalPosition: 0, startX: 0, movement: 0 };
    this.activeClass = 'active';
    this.changeEvent = new Event('changeEvent');
    this.transitioning = false;
  }

  transition(active) {
    this.slide.style.transition = active ? 'transform .3s ease-in-out' : 'none';
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(event) {
    if (this.transitioning) return;
    let movetype;
    if (event.type === 'mousedown') {
      event.preventDefault();
      this.dist.startX = event.clientX;
      movetype = 'mousemove';
    } else {
      this.dist.startX = event.changedTouches[0].clientX;
      movetype = 'touchmove';
    }
    this.wrapper.addEventListener(movetype, this.onMove);
    this.transition(false);
    this.stopAutoSlide();
  }

  onMove(event) {
    const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(event) {
    const movetype = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';
    this.wrapper.removeEventListener(movetype, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
    this.transition(true);
    this.changeSlideOnEnd();
    this.autoSlide(3000);
  }

  changeSlideOnEnd() {
    if (this.dist.movement > 120) {
      this.activeNextSlide();
    } else if (this.dist.movement < -120) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
    this.dist.movement = 0;
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }

  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slidesConfig() {
    // Remover clones antigos
    const clonedSlides = this.slide.querySelectorAll('.clone');
    clonedSlides.forEach((clone) => clone.remove());

    const originalChildren = [...this.slide.children];
    if (originalChildren.length > 0) {
      const firstClone = originalChildren[0].cloneNode(true);
      const lastClone = originalChildren[originalChildren.length - 1].cloneNode(true);

      firstClone.classList.add('clone');
      lastClone.classList.add('clone');

      this.slide.appendChild(firstClone);
      this.slide.prepend(lastClone);
    }

    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return { position, element };
    });
  }

  slidesIndexNav(index) {
    const lastOriginal = this.slideArray.length - 2;
    this.index = {
      prev: index === 0 ? undefined : index - 1,
      active: index,
      next: index === lastOriginal + 1 ? undefined : index + 1,
      originalLength: lastOriginal
    };
  }

  changeSlide(index) {
    this.stopAutoSlide();
    this.transitioning = true;
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.dist.finalPosition = activeSlide.position;
    this.changeActiveClass();
    this.wrapper.dispatchEvent(this.changeEvent);

    this.slide.addEventListener('transitionend', () => {
      this.transitioning = false;
      this.autoSlide(3000);
      if (this.index.active === this.slideArray.length - 1) {
        this.transition(false);
        this.changeSlide(1);
        this.dist.finalPosition = this.slideArray[1].position;
      } else if (this.index.active === 0) {
        this.transition(false);
        this.changeSlide(this.slideArray.length - 2);
        this.dist.finalPosition = this.slideArray[this.slideArray.length - 2].position;
      }
    }, { once: true });
  }

  changeActiveClass() {
    this.slideArray.forEach((item, idx) => {
      if (idx > 0 && idx < this.slideArray.length - 1) {
        item.element.classList.remove(this.activeClass);
      }
    });
    if (this.index.active > 0 && this.index.active < this.slideArray.length - 1) {
      this.slideArray[this.index.active].element.classList.add(this.activeClass);
    }
  }

  activePrevSlide() {
    if (this.transitioning) return;
    this.changeSlide(this.index.active - 1);
  }

  activeNextSlide() {
    if (this.transitioning) return;
    this.changeSlide(this.index.active + 1);
  }

  onResize() {
    this.slidesConfig();
    const originalIndex = this.index.active > 0 && this.index.active < this.slideArray.length - 1
      ? this.index.active : 1;
    this.changeSlide(originalIndex);
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  handleVisibilityChange() {
    if (document.hidden) {
      this.stopAutoSlide();
    } else {
      this.autoSlide(3000);
    }
  }

  addVisibilityEvent() {
    document.addEventListener("visibilitychange", this.handleVisibilityChange.bind(this));
  }

  init() {
    this.bindEvents();
    this.transition(true);
    this.addSlideEvents();
    this.slidesConfig();
    this.addResizeEvent();
    this.addVisibilityEvent();
    this.changeSlide(1);
    this.autoSlide(3000);
    return this;
  }
}

export default class SlideNav extends Slide {
  constructor(slide, wrapper) {
    super(slide, wrapper);
  }

  autoSlide(interval = 3000) {
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      this.activeNextSlide();
    }, interval);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);
    this.addArrowEvent();
  }

  addArrowEvent() {
    this.prevElement.addEventListener('click', this.activePrevSlide);
    this.nextElement.addEventListener('click', this.activeNextSlide);
  }
}
