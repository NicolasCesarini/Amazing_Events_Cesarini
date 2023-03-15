const homeEvents = document.getElementById('home_cards')
const search = document.getElementById('search-box');
const categoryEvents = document.getElementById('categories')
const button = document.querySelector('button')




function mostrarCards(eventos) {
    let tarjetas = ''
    if(eventos.length == 0){
        tarjetas = `<h2 class="display-1 fw-bolder">No hay coincidencias</h2>`
    }
    for (card of eventos) {
        tarjetas += `
    <div class="card" style="width: 18rem;">
      <img src=${card.image} class="card-img-top img" alt="cinema">
      <div class="card-body d-flex flex-column justify-content-between">
            <div>
                <p class="card-text">${card.date}</p>
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text">${card.description}</p>
            </div>
            <div class="d-flex flex-column justify-content-between align-items-center">
                <p class="card-text">Price: ${card.price} U$D</p>
                <a href="./details.html?id=${card._id}" class="btn btn-primary">Details</a>
            </div>
      </div>
    </div>`
    }
    homeEvents.innerHTML = tarjetas
}

function filtrarCategorias(eventos){
    let categorias = eventos.map((event) => event.category)
    return categorias
}

function eliminarDuplicados(array){
    arrayCategories=array.filter((element,index) => array.indexOf(element) == index)
    return arrayCategories
};

/* function filtrarEventosPasados(eventos, fechaActual){
    let eventosPasados=[]
    for (i =0; i< eventos.length; i++ ){
        if (eventos[i].date<fechaActual){
            eventosPasados.push(data[i])
        }
    }
    return eventosPasados
} */

/* homeEvents.innerHTML = mostrarCards(data.events) */

function searchBar(eventos){
    let eventFilter = eventos.filter((event) => event.name.toLowerCase().includes(search.value));
        return eventFilter
}

function mostrarCategorias(categorias) {
    let categories = ``
    for (categoria of categorias) {/* for each */
        categories += `
        <div class="form-check mx-2">
        <input class="form-check-input" type="checkbox" id="${categoria}" value="${categoria}" id="flexCheckDefault">
        <label class="form-check-label" for="${categoria}">
        ${categoria}
        </label>
      </div>`
    }
    categoryEvents.innerHTML = categories
}

/* arrayChecks.forEach(country => {
    checkboxes += `<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="${country}" value="${country}">
    <label class="form-check-label" for="${country}">${country}</label>
  </div>`
}) */




/* function filtrarNumeros(array){
    let radios = Array.from(document.querySelectorAll("input[type='radio']"))
    console.log(radios)
    let radioCheckeado = radios.filter(radio => radio.checked)[0]
    console.log(radioCheckeado.value)
    let elementosFiltrados = array.filter(elemento => elemento%2 == radioCheckeado.value || radioCheckeado.value == 'todos')
    console.log(elementosFiltrados);
    return elementosFiltrados
} */


/* const ul = document.querySelector('ul')
let selected = [];

ul.addEventListener('change', event => {
  if (event.target.type === 'checkbox') {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked')    selected = Array.from(checked).map(x => x.value)  }
}) */

/* function checkboxesCategorias (){
    let checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    return checked
}
console.log(checkboxesCategorias()) */




function filtrarPorCategoria(eventos){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    console.log(checkboxes);
    let arrayChecks = Array.from(checkboxes)
    let arrayChecksChecked = arrayChecks.filter(check => check.checked)
    console.log(arrayChecksChecked);
    let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
    console.log(arrayChecksCheckedValues);
    let eventosFiltrado = eventos.filter(evento => arrayChecksCheckedValues.includes(evento.category))
    console.log(eventosFiltrado);
    if(arrayChecksChecked.length > 0){
        return eventosFiltrado
    }
    return eventos
}

function superFiltro(){
    let primerFiltro = searchBar(data.events)
    let segundoFiltro = filtrarPorCategoria(primerFiltro)
    mostrarCards(segundoFiltro)
}




/* let searchValue="" */
/* homeEvents.innerHTML = mostrarCards(searchBar(data.events));
search.addEventListener('keyup',()=>{
    homeEvents.innerHTML = mostrarCards(searchBar(data.events));
}) */
mostrarCards(data.events)
mostrarCategorias(eliminarDuplicados(filtrarCategorias(data.events)))
search.addEventListener('input',superFiltro)

categoryEvents.addEventListener('change',superFiltro)


/* console.log((eliminarDuplicados(filtrarCategorias(data.events))))
console.log(mostrarCategorias(eliminarDuplicados(filtrarCategorias(data.events)))) */
