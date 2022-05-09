const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .flex .navbar');
const body = document.querySelector('body')

const toggleLight = document.getElementById('buttonLight')
const toggleDark = document.getElementById('buttonDark')
const toggleMode = document.querySelector('.main__controller-theme')


toggleMode.addEventListener('click', () => {
   body.classList.toggle('dark')
})

menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
}


toggleLight.addEventListener("click", () => {
   toggleDark.classList.toggle('d-none')
})

toggleDark.addEventListener("click", () => {
   toggleDark.classList.toggle('d-none')
})