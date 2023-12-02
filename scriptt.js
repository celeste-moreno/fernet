const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const elementos2 = document.getElementById('lista-2');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritobtn = document.getElementById('vaciar-carrito');

cargarEventListeners();
function cargarEventListeners(){
    elementos1.addEventListener('click', comparElemento);
    elementos2.addEventListener('click', comparElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritobtn.addEventListener('click', vaciarCarrito);
}

function comparElemento(e){
    e.preventDefault();
    if(e.target.classList.containt('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemeto(elemento);
    }
}

function leerDatosElemeto(elemento){
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textcontent,
        precio: elemento.querySelector('.precio').textcontent,
        id: elemento.querySelector('#').getAtribute('data-id')
    }
    insertarCarrito(infoElemento);
}
function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
    <img src="${elemento.imagen}" width=100> 
    </td>
    <td>
       ${elemento.titulo}
    </td>
    <td>
       ${elemento.precio}
    </td>
    <td>
       <a href="#" class="borrar" data-id="${elemento.id}">x</a>
    </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.containt('borrar')){
        e.target.parentElement.parentElement.ramove();
        elemento = e,target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAtribute('data-id');
    }
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
    return false;
}

