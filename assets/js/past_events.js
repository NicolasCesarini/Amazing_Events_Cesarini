const pastEvents = document.getElementById('past_cards')
const search = document.getElementById('search-box');
const categoryEvents = document.getElementById('categories')






function mostrarCards(eventos) {
    let tarjetas = ''
    if (eventos.length == 0) {
        tarjetas = `<h2 class="display-1 fw-bolder">No hay coincidencias</h2>`
    }
    eventos.forEach(card => {
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
    });
    pastEvents.innerHTML = tarjetas
}

/* function filtrarEventosPasados(eventos, fechaActual){
    let eventosPasados=[]
    for (i =0; i< eventos.length; i++ ){
        if (eventos[i].date<fechaActual){
            eventosPasados.push(eventos[i])
        }
    }
    return eventosPasados
} */
function filtrarEventosPasados(eventos, fechaActual) {
    let eventosPasados = eventos.filter((event) => event.date < fechaActual)
    return eventosPasados
}

function filtrarCategorias(eventos) {
    let categorias = eventos.map((event) => event.category)
    return categorias
}

function eliminarDuplicados(array) {
    arrayCategories = array.filter((element, index) => array.indexOf(element) == index)
    return arrayCategories
};
console.log(eliminarDuplicados(filtrarCategorias(data.events)))




console.log(filtrarCategorias(data.events))


/* pastEvents.innerHTML = mostrarCards(filtrarEventosPasados(data.events, data.currentDate))
filtrarEventosPasados(data.events, data.currentDate) */
/* console.log(data.events) */
let filtro = filtrarEventosPasados(data.events, data.currentDate)
function searchBar(eventos) {
    let eventFilter = eventos.filter((event) => event.name.toLowerCase().includes(search.value));
    return eventFilter
}



function mostrarCategorias(categorias) {
    let categories = ``
    categorias.forEach(categoria => {
        categories += `
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="${categoria}" value="${categoria}" id="flexCheckDefault">
            <label class="form-check-label" for="${categoria}">
            ${categoria}
            </label>
          </div>`
    });
    categoryEvents.innerHTML = categories
    
    }


function filtrarPorCategoria(eventos) {
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    console.log(checkboxes);
    let arrayChecks = Array.from(checkboxes)
    let arrayChecksChecked = arrayChecks.filter(check => check.checked)
    console.log(arrayChecksChecked);
    let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
    console.log(arrayChecksCheckedValues);
    let eventosFiltrado = eventos.filter(evento => arrayChecksCheckedValues.includes(evento.category))
    console.log(eventosFiltrado);
    if (arrayChecksChecked.length > 0) {
        return eventosFiltrado
    }
    return eventos
}

function superFiltro() {
    let primerFiltro = searchBar(filtro)
    let segundoFiltro = filtrarPorCategoria(primerFiltro)
    mostrarCards(segundoFiltro)
}





mostrarCards(searchBar(filtro))
mostrarCategorias(eliminarDuplicados(filtrarCategorias(filtro)))
search.addEventListener('input', superFiltro)

categoryEvents.addEventListener('change', superFiltro)

/* pastEvents.innerHTML = mostrarCards(searchBar(filtro)) */





