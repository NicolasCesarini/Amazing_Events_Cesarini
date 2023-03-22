const tabla_max_min = document.getElementById('tabla_max_min')
const tabla_pasado = document.getElementById('tabla_pasado')
const tabla_futuro = document.getElementById('tabla_futuro')



async function obtenerEventos() {
    data = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then(data => {

            return data;
        })
    return data
}


async function obtenerArray() {
    let arrayEventos = await obtenerEventos()


    porcentajeAsistencia(arrayEventos.events)

    let eventosPasados = filtrarEventosPasados(arrayEventos.events, arrayEventos.currentDate)
    let eventosFuturos = filtrarEventosFuturos(arrayEventos.events, arrayEventos.currentDate)
    let tabla1 = {
        'mayorCapacidad': eventosPasados.sort(function (a, b) { return b.capacity - a.capacity })[0],
        'mayorPorcentaje': eventosPasados.sort(function (a, b) { return b.porcentaje - a.porcentaje })[0],
        'menorPorcentaje': eventosPasados.sort(function (a, b) { return a.porcentaje - b.porcentaje })[0]
    }



    tabla_max_min.innerHTML = ` 

    <tr>
        <td class="eventosTabla">${tabla1.mayorPorcentaje.name}: ${tabla1.mayorPorcentaje.porcentaje}%</td>
        <td class="eventosTabla">${tabla1.menorPorcentaje.name}: ${tabla1.menorPorcentaje.porcentaje}%</td>
        <td class="eventosTabla">${tabla1.mayorCapacidad.name}: (${tabla1.mayorCapacidad.capacity})</td>
    </tr>
    `

    let categoriasPasadas = eliminarDuplicados(filtrarCategorias(eventosPasados))
    let categoriasFuturas = eliminarDuplicados(filtrarCategorias(eventosFuturos))

    let tablaPasado = tablaCategorias(categoriasPasadas, eventosPasados)
    console.log(tablaPasado)
    let tablaFuturo = tablaCategorias(categoriasFuturas, eventosFuturos)



    imprimirTablas(tablaPasado, tabla_pasado)

    imprimirTablas(tablaFuturo, tabla_futuro)

}

obtenerArray()




function porcentajeAsistencia(eventos) {

    eventos.forEach(evento => {
        if (isNaN(evento.assistance)) {

            evento["porcentaje"] = parseFloat(((evento.estimate / evento.capacity) * 100).toFixed(2))
        } else {
            evento["porcentaje"] = parseFloat(((evento.assistance / evento.capacity) * 100).toFixed(2))

        }
    });

}



function filtrarEventosPasados(eventos, fechaActual) {
    let eventosPasados = eventos.filter((event) => event.date < fechaActual)
    return eventosPasados
}

function filtrarEventosFuturos(eventos, fechaActual) {
    let eventosFuturos = eventos.filter((event) => event.date > fechaActual)
    return eventosFuturos
}

function filtrarCategorias(eventos) {
    let categorias = eventos.map((event) => event.category)
    return categorias
}
function eliminarDuplicados(array) {
    arrayCategories = array.filter((element, index) => array.indexOf(element) == index)
    return arrayCategories
};

function tablaCategorias(arrayCategorias, eventos) {
    let tabla = []
    for (let i = 0; i < arrayCategorias.length; i++) {
        tabla.push([])
        for (const evento of eventos) {
            if (arrayCategorias[i] == evento.category) {
                tabla[i].push(evento)
            }
        }
    }
    return tabla
}

function imprimirTablas(array, tabla) {
    let tablaHTML = ``
    for (let i = 0; i < array.length; i++) {

        let revenue = 0
        let porcentajeTabla = 0
        let categoria
        for (const evento of array[i]) {
            categoria = evento.category
            revenue += evento.price * (isNaN(evento.assistance) ? evento.estimate : evento.assistance)
            porcentajeTabla += evento.porcentaje
        }
        porcentajeTablaPromedio = porcentajeTabla / (array[i].length)
        tablaHTML += `
    <tr>
        <td class="eventosTabla">${categoria}</td>
        <td>${revenue} U$D</td>
        <td>${parseFloat(porcentajeTablaPromedio.toFixed(2))}%</td>
    </tr>`
        tabla.innerHTML = tablaHTML
    }
}