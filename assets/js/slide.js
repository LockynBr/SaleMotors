import debounce from './debounce.js'; // Assuming debounce.js is correctly linked

export class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = { finalPosition: 0, startX: 0, movement: 0 };
    this.activeClass = 'active';
    this.changeEvent = new Event('changeEvent'); // Still useful for external listeners if needed
    this.transitioning = false; // Add a flag to prevent rapid slide changes
  }

  transition(active) {
    this.slide.style.transition = active ? 'transform .3s ease-in-out' : 'none'; // Added ease-in-out
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
    if (this.transitioning) return; // Prevent start if transitioning
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
    this.stopAutoSlide(); // Stop auto-slide when user interacts
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
    this.autoSlide(3000); // Restart auto-slide after user interaction
  }

  changeSlideOnEnd() {
    if (this.dist.movement > 120) { // Increased threshold slightly for better control
      this.activeNextSlide();
    } else if (this.dist.movement < -120) { // Increased threshold slightly
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
    this.dist.movement = 0; // Reset movement after slide change
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }

  // --- Infinite Slide Logic Start ---
  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slidesConfig() {
    // Clone first and last slides for infinite effect
    // We do this here so the slideArray includes the clones
    const originalChildren = [...this.slide.children]; // Get original slides before cloning
    if (originalChildren.length > 0) {
      const firstClone = originalChildren[0].cloneNode(true);
      const lastClone = originalChildren[originalChildren.length - 1].cloneNode(true);

      // Add clones to the DOM
      this.slide.appendChild(firstClone);
      this.slide.prepend(lastClone);
    }

    // Recalculate slideArray with clones
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return { position, element };
    });

    // Adjust slide width calculation on resize if needed (though flex-shrink handles much of it)
    // For initial position, we need to know the width of the cloned elements as well
  }

  slidesIndexNav(index) {
    // The actual active slides are from 1 to this.slideArray.length - 2
    // Index 0 is lastClone, last index is firstClone
    const lastOriginal = this.slideArray.length - 2; // Index of the last *original* slide
    this.index = {
      prev: index === 0 ? undefined : index - 1, // Will handle jump in changeSlide
      active: index,
      next: index === lastOriginal + 1 ? undefined : index + 1, // Will handle jump in changeSlide
      originalLength: lastOriginal // Store original length for reference
    };
  }

  changeSlide(index) {
    this.stopAutoSlide(); // Stop auto-slide temporarily
    this.transitioning = true; // Set flag to true

    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.dist.finalPosition = activeSlide.position;
    this.changeActiveClass();
    this.wrapper.dispatchEvent(this.changeEvent);

    // After transition ends, handle the jump for infinite loop
    this.slide.addEventListener('transitionend', () => {
      this.transitioning = false; // Allow interaction again
      this.autoSlide(3000); // Restart auto-slide

      // If moved to the first clone, jump to actual first slide
      if (this.index.active === this.slideArray.length - 1) {
        this.transition(false); // No transition for the jump
        this.changeSlide(1); // Jump to the actual first slide (index 1)
        this.dist.finalPosition = this.slideArray[1].position; // Update final position
      }
      // If moved to the last clone, jump to actual last slide
      else if (this.index.active === 0) {
        this.transition(false); // No transition for the jump
        this.changeSlide(this.slideArray.length - 2); // Jump to actual last slide (index length - 2)
        this.dist.finalPosition = this.slideArray[this.slideArray.length - 2].position; // Update final position
      }
    }, { once: true }); // Ensure this listener runs only once per transition
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
    setTimeout(() => {
      this.slidesConfig(); 
      const originalIndex = this.index.active > 0 && this.index.active < this.slideArray.length - 1
        ? this.index.active : 1;

      this.changeSlide(originalIndex);
    }, 1000);
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
      if (this.index.active < this.slideArray.length - 1) {
        this.activeNextSlide();
      } else {
        this.changeSlide(1);
      }
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