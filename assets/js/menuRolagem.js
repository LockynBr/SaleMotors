
export default function initMenuRolagem() {
  const header = document.querySelector(".menu-navbar");
  const img = document.querySelector("#menu-imagem-logo")
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("transparent");
      img.src = "assets/images/icones/motor-azul.svg"
    } else {
      header.classList.remove("transparent");
      img.src = "assets/images/icones/motor-branco.svg"
    }
  });
}
