
/*
const operations = document.getElementById('operations');
*/

const select = document.getElementById('select')
const calculate = document.getElementById('calculate')
const addd = document.getElementById('addd')

function mostrar() {
    const pregunta = document.getElementById('npregunta').value
    const flotante1 = document.getElementById('flotante1');
    const flotante2 = document.getElementById('flotante2');
    const flotante3 = document.getElementById('flotante3');
    const flotante4 = document.getElementById('flotante4');
    const sub_flotante1 = document.getElementById('sub_flotante1');
    const sub_flotante2 = document.getElementById('sub_flotante2');
    const sub_flotante3 = document.getElementById('sub_flotante3');
    const sub_flotante5 = document.getElementById('sub_flotante5');
    let etiqueta1 = document.getElementById('etiqueta1');
    let etiqueta2 = document.getElementById('etiqueta2');
    let etiqueta3 = document.getElementById('etiqueta3');
    let etiqueta4 = document.getElementById('etiqueta4');
    let sub_etiqueta1 = document.getElementById('sub_etiqueta1');
    let sub_etiqueta2 = document.getElementById('sub_etiqueta2');
    let sub_etiqueta3 = document.getElementById('sub_etiqueta3');

    let title = document.getElementById('title');

    switch (pregunta) {
        case '1':
            flotante1.style.display = 'block';
            flotante2.style.display = 'block';
            flotante3.style.display = 'none';
            flotante4.style.display = 'none';
            sub_flotante1.style.display = 'none';
            sub_flotante3.style.display = 'none';
            etiqueta1.innerHTML = '1° argumento:'
            etiqueta2.innerHTML = '2° argumento:'

            break;
        case '2':
            flotante1.style.display = 'block';
            flotante2.style.display = 'block';
            flotante3.style.display = 'block';
            flotante4.style.display = 'block';
            sub_flotante1.style.display = 'none';
            sub_flotante3.style.display = 'none';
            sub_flotante5.style.display = 'none';
            etiqueta1.innerHTML = '1° examen:'
            etiqueta2.innerHTML = '2° examen:'
            etiqueta3.innerHTML = '3° examen:'
            etiqueta4.innerHTML = '4° examen:'

            break;
        case '3':
            flotante1.style.display = 'block';
            flotante2.style.display = 'block';
            flotante3.style.display = 'none';
            flotante4.style.display = 'none';
            sub_flotante1.style.display = 'none';
            sub_flotante3.style.display = 'none';
            etiqueta1.innerHTML = 'Largo:'
            etiqueta2.innerHTML = 'Ancho:'

            break;
        case '4':
            flotante1.style.display = 'block';
            flotante2.style.display = 'block';
            flotante3.style.display = 'none';
            flotante4.style.display = 'none';
            etiqueta1.innerHTML = 'Base:'
            etiqueta2.innerHTML = 'Altura:'

            break;
        case '5':
            flotante1.style.display = 'block';
            flotante2.style.display = 'none';
            flotante3.style.display = 'none';
            flotante4.style.display = 'none';
            etiqueta1.innerHTML = 'Radio:'

            break;
        case '6':
            flotante1.style.display = 'block';
            flotante2.style.display = 'block';
            flotante3.style.display = 'none';
            flotante4.style.display = 'none';
            etiqueta1.innerHTML = 'Horas trabajadas:'
            etiqueta2.innerHTML = 'Salario de hora:'

            break;
        case '7':
            flotante1.style.display = 'block';
            flotante2.style.display = 'none';
            flotante3.style.display = 'none';
            flotante4.style.display = 'none';
            etiqueta1.innerHTML = 'Metros requeridos:'

            break;
        case '8':
            flotante1.style.display = 'block';
            flotante2.style.display = 'none';
            flotante3.style.display = 'none';
            flotante4.style.display = 'none';
            etiqueta1.innerHTML = 'Cantidad de dinero:'

            break;
        case '9':
            flotante1.style.display = 'block';
            flotante2.style.display = 'none';
            flotante3.style.display = 'none';
            flotante4.style.display = 'none';
            etiqueta1.innerHTML = 'Año de nacimiento:'

            break;
        case '10':
            flotante1.style.display = 'block';
            flotante2.style.display = 'block';
            flotante3.style.display = 'block';
            flotante4.style.display = 'none';
            sub_flotante1.style.display = 'block'
            sub_flotante2.style.display = 'block'
            sub_flotante3.style.display = 'block'
            sub_etiqueta1.innerHTML = 'Nombre 1° persona:'
            etiqueta1.innerHTML = 'Edad 1° persona:'
            sub_etiqueta2.innerHTML = 'Nombre 2° persona:'
            etiqueta2.innerHTML = 'Edad 2° persona:'
            sub_etiqueta3.innerHTML = 'Nombre 3° persona:'
            etiqueta3.innerHTML = 'Edad 3° persona:'

            break;
        case '11':
            flotante1.style.display = 'block';
            flotante2.style.display = 'none';
            flotante3.style.display = 'none';
            flotante4.style.display = 'none';
            sub_flotante1.style.display = 'none'
            etiqueta1.innerHTML = 'Años de trabajo:'

            break;
        case '12':
            flotante1.style.display = 'block';
            flotante2.style.display = 'block';
            flotante3.style.display = 'none';
            flotante4.style.display = 'none';
            sub_flotante1.style.display = 'none'
            sub_flotante3.style.display = 'none'
            etiqueta1.innerHTML = 'Salario Inicial:'
            etiqueta2.innerHTML = '% de incremento:'

            break;
        case '13':
            flotante1.style.display = 'block';
            flotante2.style.display = 'none';
            flotante3.style.display = 'none';
            flotante4.style.display = 'none';
            sub_flotante1.style.display = 'none'
            sub_flotante3.style.display = 'none'
            etiqueta1.innerHTML = 'Número de alumnos:'

            break;
        default:
            break;
    }

}

select.onclick = mostrar
/*
function agregar() {

    const pregunta = document.getElementById('npregunta').value
    const text1 = parseInt(document.getElementById('text1')).value
    const flotante1 = document.getElementById('flotante1');


    const div = document.createElement('div')
    div.id = 'sub_div'
    
    const sub_div = document.getElementById('sub_div')
    flotante1.insertBefore(div, flotante1.children[0])

    
    const label = document.createElement('label')
    label.id = 'sub_label'
    const textlabel = document.createTextNode('Escribiendo... :')
    label.appendChild(textlabel)
    const sub_label = document.getElementById('sub_label')
    flotante1.insertBefore(label, flotante1.children[0])
    

    let input = document.createElement("input")
    input.id='sub_input';
    input.className = 'txt'
    input.type = 'number'
    const textinput = document.createTextNode('escribiendo...')
    input.appendChild(textinput)
    const sub_input =  document.getElementById('sub_input')
    flotante1.insertBefore(input, flotante1.children[1])
    

}
console.log(agregar())
*/
//addd.onclick = agregar

function calcular() {
    const pregunta = document.getElementById('npregunta').value

    const text1 = parseInt(document.getElementById('text1').value)
    const text2 = parseInt(document.getElementById('text2').value)
    const text3 = parseInt(document.getElementById('text3').value)
    const text4 = parseInt(document.getElementById('text4').value)
    const sub_text1 = document.getElementById('sub_text1').value
    const sub_text2 = document.getElementById('sub_text2').value
    const sub_text3 = document.getElementById('sub_text3').value
    const result = document.getElementById('result')
    const result1 = document.getElementById('result1')


    switch (pregunta) {
        case '1':
            title.innerHTML = 'La suma es..'
            result.innerHTML = text1 + text2

            break;
        case '2':
            title.innerHTML = 'El promedio es..'
            result.innerHTML = (text1 + text2 + text3 + text4) / 4

            break;
        case '3':
            title.innerHTML = 'El área del rectángulo es..'
            result.innerHTML = text1 * text2

            break;
        case '4':
            title.innerHTML = 'El área del Triángulo es..'
            result.innerHTML = text1 * text2

            break;
        case '5':
            title.innerHTML = 'El área de la circunferencia es..'
            result.innerHTML = (Math.PI * Math.pow(text1, 2)).toFixed(2)

            break;
        case '6':
            title.innerHTML = 'El sueldo semanal es..'
            result.innerHTML = '$ ' + (text1 * text2).toFixed(2)

            break;
        case '7':
            title.innerHTML = 'Ud. debe pedir...'
            result.innerHTML = (text1 / (0.0254)).toFixed(3) + ' pulgadas de tela'

            break;
        case '8':
            title.innerHTML = 'Ud. puede adquirir...'
            result.innerHTML = (text1 / (3.99)).toFixed(3) + ' dólares'

            break;
        case '9':
            title.innerHTML = 'Ud. tiene...'
            const fecha = new Date();
            const fecha_actual = fecha.getFullYear()
            result.innerHTML = (fecha_actual - text1) + ' años'

            break;
        case '10':
            if (sub_text1 < text2 && text1 < text3) {
                title.innerHTML = sub_text1 + ' tiene ' + text1 + ' años'
                result.innerHTML = '...es el menor de todos'

            } else if (text2 < text1 && text2 < text3) {
                title.innerHTML = sub_text2 + ' tiene ' + text2 + ' años'
                result.innerHTML = '...es el menor de todos'

            } else if (text3 < text1 && text3 < text2) {
                title.innerHTML = sub_text3 + ' tiene ' + text3 + ' años'
                result.innerHTML = '...es el menor de todos'
            }
            break;
        case '11':
            title.innerHTML = 'Ud. tiene. un beneficio..'
            switch (text1) {
                case 1:
                    result.innerHTML = 'recibirá $100 de bonificación'

                    break;
                case 2:
                    result.innerHTML = 'recibirá $200 de bonificación'

                    break;
                case 3:
                    result.innerHTML = 'recibirá $300 de bonificación'

                    break;
                case 4:
                    result.innerHTML = 'recibirá $400 de bonificación'

                    break;
                case 5:
                    result.innerHTML = 'recibirá $500 de bonificación'

                    break;
                default:
                    result.innerHTML = 'recibirá $1000 de bonificación'
                    break;
            }

            break;
        case '12':
            let j = text1
            let suma = 0

            result.innerHTML = 'Salario recibido.. \r\n'
            for (let i = 1; i <= 6; i++) {
                j = (j + (j * (text2 / 100)))
                suma = suma + j
                result.innerHTML += '\r\n Año ' + i + ': $' + j.toFixed(2) + '<br>';
                console.log(i + ": " + j)
            }
            title.innerHTML = 'Su salario acumulado de es... $' + suma

            break;
        case '13':
            title.innerHTML = 'Ud. tiene. un beneficio..'





            break;
        default:
            break;
    }

}

calculate.onclick = calcular
