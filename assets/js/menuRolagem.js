
export default function initMenuRolagem() {
  const header = document.querySelector(".menu-navbar");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
  });
}
