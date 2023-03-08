const homeEvents = document.getElementById('home_cards')

let tarjetas = ''

function mostrarCards(eventos) {
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
                <a href="./details.html" class="btn btn-primary">Details</a>
            </div>
      </div>
    </div>`
    }
    return tarjetas
}

function filtrarEventosPasados(eventos, fechaActual){
    let eventosPasados=[]
    for (i =0; i< eventos.length; i++ ){
        if (eventos[i].date<fechaActual){
            eventosPasados.push(data[i])
        }
    }
    return eventosPasados
}

homeEvents.innerHTML = mostrarCards(data.events)