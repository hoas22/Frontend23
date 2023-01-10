const btnPrueba = document.querySelector('#btn-prueba')

btnPrueba.onclick = function (event) {
    console.log('Click desde el boton')
    console.log(event)
    Swal.fire('Hola mundo')
}

//nueva funcion para el sweet alert

function showAlert(icon, title, text) {
    Swal.fire({
        icon,
        title,
        text,
        footer: "<a href = 'https://google.com'> Link de footer"
    })
}


const btnPregunta = document.querySelector('#btn-pregunta')

btnPregunta.onclick = function () {
    showAlert('question', 'Hubo un error', 'email or password erroneos')    
}

const btnError = document.querySelector('#btn-error')

btnError.onclick = function () {
    showAlert('error', 'Hubo un error', 'email or password erroneos')    
}

const btnWarning = document.querySelector('#btn-warning')

btnWarning.onclick = function () {
    showAlert('warning', 'Hubo un error', 'email')
    
}

const btnSuccess = document.querySelector('#btn-success')

btnSuccess.onclick = function () {
    showAlert('success', 'Hubo un error', 'email')
    
}

const btnAlertBotones = document.querySelector('#btn-alert-botones')

btnAlertBotones.onclick = function () {
    Swal.fire({
        title: 'Alerta',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        showDenybuttonText: "Don't save",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved','','info')
        }
    })
}


