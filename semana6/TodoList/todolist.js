const formulario = document.getElementById("formulario");
const input = document.getElementById("input");
const tareaList = document.getElementById("lista-tareas")
const template = document.getElementById("template").content;
const fragmento = document.createDocumentFragment();

let tareas = {};

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    setTareas()
})

const setTareas=()=>{
    if(input.value.trim()===''){
        return //al pner return hacemos que al ingresas al if se de se de producir toda la funcion
    };
    const tarea = {
        id:Date.now(),
        text:input.value,
        estado: false
    };
 
    tareas[tarea.id]= tarea; // puish objeto identificador a la lsta de objetos lo cual va ser igual al objeto  principal
    formulario.reset();
    input.focus();
    pintarTareas()
}

const pintarTareas=()=>{
 tareaList.innerHTML ='';
 Object.values(tareas).forEach(tarea =>{
    const clone = template.cloneNode(true);
    clone.querySelector('p').textContent = tarea.texto;
    if(tarea.estado){
        clone.querySelector('.alert').classList.replace('alert-success','alert-primary');
        clone.querySelector('.fas').classList.replace('fa-check-circle','fa-undo-alt');
        clone.querySelector('p').style.textDecoration="line-through";
          }

        clone.querySelectorAll('.fas')[0].dataset.id = tareas.id;
        clone.querySelectorAll('.fas')[1].dataset.id = tareas.id;
        fragmento.appendChild(clone);
        tareaList.appendChild(fragmento);

 });
}

tareaList.addEventListener('click',(e)=>{//El e es pra sederle la accio a acada elemento hijo del contenedor que tiene eventlistener
    action(e)
})

const action = e =>{
    if(e.target.classList.contains('fa-check-circle')){
        tareas[e.target.dataset.id].estado = true;
        pintarTareas()
    }else if(e.target.classList.contains('fa-minus-circle')){
        delete tareas[e.target.dataset.id];
        pintarTareas()
    };
    if(e.target.classList.contains('fa-undo-alt')){
        tareas[e.target.Date.id].estado = false
        pintarTareas();
    };

    e.stopPropagation;

}


