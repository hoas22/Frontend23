const burger = document.querySelector('.burger');
const enlaces = document.querySelector('.ul_nav');
const barras = document.querySelectorAll('.burger span');

burger.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    burger.classList.toggle('girar');
});