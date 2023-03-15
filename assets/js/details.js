/* const personajesJugables = personajes.data.filter( personaje => personaje.isPlayableCharacter ) //Filtro los personajes jugables de un conjunto de datos utilizando el método filter() y los almaceno en una variable llamada personajesJugables
//console.log(personajesJugables)

const personajesNuevo = personajesJugables.map( personaje => { //Utilizo el método map() para crear un nuevo objeto para cada personaje jugable, seleccionando solo algunas propiedades relevantes y renombrándolas. Los nuevos objetos se almacenan en una variable llamada personajesNuevo
    let aux = {}
    aux.image = personaje.bustPortrait
    aux.name = personaje.displayName
    aux.description = personaje.description
    aux.role = personaje.role.displayName
    aux._id = personaje.uuid
    return aux
}) */

//console.log(personajesNuevo)

const querySearch = document.location.search  //obtengo la cadena de consulta de la URL actual de la página y la almaceno en una variable llamada querySearch. La cadena de consulta es todo lo que aparece después del signo "?" en la URL.

const id = new URLSearchParams(querySearch).get("id") //Obtengo el valor del parámetro "id" de la URL utilizando URLSearchParams() y lo almaceno en una variable llamada id

//console.log(id);

const detalles = data.events.find(evento => evento._id == id) //Utilizo el método find() para buscar el objeto de personaje correspondiente al "id" en la variable personajesNuevo, y lo almaceno en una variable llamada personaje.
//console.log(personaje)
console.log(detalles)
const containerCards = document.getElementById("details") //Selecciono un elemento HTML del DOM utilizando document.getElementById() y lo almaceno en una variable llamada containerCards
//console.log(containerCards)
console.log(containerCards)

//Actualizo el contenido HTML del elemento containerCards utilizando la propiedad innerHTML para mostrar información sobre el personaje seleccionado en una tarjeta.
containerCards.innerHTML = ` 

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
    <p>Price: $${detalles.price}</p>
</article>

`

/* "image":"https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      "name":"Collectivities Party",
      "date":"2021-12-12",
      "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      "category":"Food Fair",
      "place":"Room A",
      "capacity":45000,
      "assistance":42756,
      "price":5 */

//En resumen, este código filtra y transforma datos de personajes de un conjunto de datos y los muestra en una tarjeta HTML, en función del parámetro "id" proporcionado en la URL.


