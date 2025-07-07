export default function initMenuRolagem() {
  const header = document.querySelector(".menu-navbar");
  const img = document.querySelector("#menu-imagem-logo");

  if (!header) return;

  const bodyClass = document.body.className;

  if (bodyClass === "internal") {
    header.classList.add("transparent");
    if (img) img.src = "assets/images/icones/motor-azul.svg";
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("transparent");
      if (img) img.src = "assets/images/icones/motor-azul.svg";
    } else {
      if (bodyClass === "home") {
        header.classList.remove("transparent");
        if (img) img.src = "assets/images/icones/motor-branco.svg";
      }
    }
  });
}
