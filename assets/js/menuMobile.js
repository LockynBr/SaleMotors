import outsideClick from './outsideClick.js'

export default function initMenuMobile(){
    const menuButton = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="list"]')
    const img = document.querySelector('#menu-imagem-logo')
    const eventos = ['click', 'touchstart']

    let touchStart = false
    function openMenu(event){
        if (event.type === 'touchstart') {
            event.preventDefault()
            touchStart = true;
          }
        
          if (event.type === 'click' && touchStart) {
            touchStart = false;
            return;
          }
        
          menuList.classList.add('active')
          menuButton.classList.add('active')
          img.classList.add('img-disable')
          
          outsideClick(menuList, eventos, () => {
            menuList.classList.remove('active')
            menuButton.classList.remove('active')
            img.classList.remove('img-disable')
          })
        }

    eventos.forEach((userEvent) => {
        menuButton.addEventListener(userEvent, openMenu)
    })
}