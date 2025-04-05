let animated = false;

function animateCounters() {
  if (animated) return;
  const counters = document.querySelectorAll(".counter");
  const duration = 2000; // duração total da animação (em ms)

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const format = counter.getAttribute("data-format");
    let count = 0;
    const startTime = performance.now();

    function updateCount(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // de 0 até 1
      const current = Math.floor(progress * target);

      if (format === "million") {
        counter.innerText = `+${Math.floor(current / 1000000)}M`;
      } else {
        counter.innerText = `+${current.toLocaleString("pt-BR")}`;
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        // Garante o valor final
        if (format === "million") {
          counter.innerText = `+${Math.floor(target / 1000000)}M`;
        } else {
          counter.innerText = `+${target.toLocaleString("pt-BR")}`;
        }
      }
    }

    requestAnimationFrame(updateCount);
  });

  animated = true;
}

function handleScroll() {
  const section = document.querySelector(".counter-section");
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    animateCounters();
    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);
document.addEventListener("DOMContentLoaded", handleScroll);
