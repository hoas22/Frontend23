
const iniciosesion = document.querySelector('#login')
const registrate = document.querySelector('#signup')

iniciosesion.onclick = function (event) {
    event.preventDefaul ();

    const inputs = document.querySelectorAll('input')

    inputs.forEach((input)=>{
        localStorage.setItem(input.name, input.value)

    })
login()
}


const email = localStorage.getItem('email')
const password = localStorage.getItem('password')

function login() {
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')
    secctionForm.style.display = 'none'
    logueado.style.display = 'block'
    tagEmail.innerHTML = email

}

const secctionForm = document.querySelector('#secctionform')
const tagEmail = document.querySelector('#email')

const btnCerrarSesion = document.querySelector('#closesesion')
const logueado = document.querySelector('#logueado')

if (email != null && password != null) {
    //    
} else {
    logueado.style.display = 'none'
}

btnCerrarSesion.onclick = function () {
    localStorage.clear()

    secctionForm.display = 'block'
    logueado.style.display = 'none'
}








/*
 */





