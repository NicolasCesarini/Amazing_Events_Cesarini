const querySearch = document.location.search
const id = new URLSearchParams(querySearch).get("id")





async function obtenerEventos() {
    data = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then(data => {
            
            return data;
        })
    return data
}


async function obtenerArray(){
    let arrayEventos = await obtenerEventos()
    console.log(arrayEventos)
    
    const detalles = data.events.find(evento => evento._id == id)
    const details = document.getElementById("details")


    details.innerHTML = ` 

        <figure class="details-figure">
            <img src="${detalles.image}" class="details-img" alt="details-img">
        </figure>
        <article class="details-info">
            <h2>${detalles.name}</h2>
            <p>${detalles.date}</p>
            <p>Description: ${detalles.description}</p>
            <p>Category: ${detalles.category}</p>
            <p>Capacity: ${detalles.capacity}</p>
            <p>${detalles.assistance !== undefined ? "Assistance: " : "Assistance Estimate: "}${detalles.assistance !== undefined ? detalles.assistance : detalles.estimate}</p>
            <p>Price: ${detalles.price}U$D</p>
        </article>
    `

}

obtenerArray()

    
