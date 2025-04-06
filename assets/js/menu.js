import outsideClick from "./outsideClick.js"

// const links = document.querySelectorAll('.menu a');

// function ativarLink(link){
//     console.log(links)
//     const url = location.href;
//     const href = link.href;
    
//     if(url.includes(href)){
//         link.classList.add('ativo');
//     }
// }

// links.forEach(ativarLink);

export default function initDropdownMenu(){
    const dropdownMenus = document.querySelectorAll("[data-dropdown]")

    dropdownMenus.forEach(menu => {
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick)
        })
    })

    function handleClick(event){
        event.preventDefault()
        this.classList.add('active')
        outsideClick( this, ['touchstart', 'click'],() => {
            this.classList.remove('active')
        })
    }
}

initDropdownMenu()

export function initMenuMobile(){
    const menuButton = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="list"]')
    const img = document.querySelector('#imagem-logo')
    const eventos = ['click', 'touchstart']

    function openMenu(event){
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




initMenuMobile()



