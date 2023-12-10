const menuTlacitko = document.querySelector('#menu-tlacitko')
const menuPolozky = document.querySelector('#menu-polozky')
const ikonaMenu = document.querySelector('.fas');
const otevriMenu = () => {
  menuPolozky.classList.toggle('show')
  ikonaMenu.classList.toggle('fa-xmark')
  ikonaMenu.classList.toggle('fa-bars')
}

menuTlacitko.addEventListener('click', otevriMenu)