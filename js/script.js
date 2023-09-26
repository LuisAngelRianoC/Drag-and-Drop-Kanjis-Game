let elements = document.getElementsByClassName('element');
let rightBox = document.getElementById('container-elemets');
let leftBox = document.getElementById('left-section');
let resultadoDiv = document.getElementById('resultado');
let combinar = document.getElementById('btnCombinar');

new Sortable(leftBox, {
    group: 'shared',
    animation: 150,
    chosenClass: "seleccionado",
    ghostClass: "fantasma",
    dragClass: "drag"
});

new Sortable(rightBox, {
    group: 'shared',
    animation: 150,
    chosenClass: "seleccionado",
    ghostClass: "fantasma",
    dragClass: "drag",
});

function obtenerOrden() {
    const elementosEnRightBox = rightBox.getElementsByClassName('element');
    const ordenElementos = Array.from(elementosEnRightBox).map(elemento => elemento.getAttribute('data-valor'));

    // Define un objeto que asocie las combinaciones con nombres e imágenes
    const combinacionesInfo = {
        '1,2': { nombre: 'Kazan', imagen: '/img/kazan.jpg' },
        '3,1': { nombre: 'Hanabi', imagen: '/img/hanabi.jpg' },
        '1,2,4': { nombre: 'Kazanbai', imagen: '/img/kazanbai.jpg' },
    };

    let coincidenciaEncontrada = false; // Inicialmente no se ha encontrado ninguna coincidencia
    let combinacionInfo = null; // Almacenará la información de la combinación encontrada

    // Convierte la combinación de elementos en una cadena para buscarla en combinacionesInfo
    const ordenComoCadena = ordenElementos.join(',');

    // Busca si la combinación existe en combinacionesInfo
    if (combinacionesInfo.hasOwnProperty(ordenComoCadena)) {
        combinacionInfo = combinacionesInfo[ordenComoCadena];
        coincidenciaEncontrada = true;
    }

    if (coincidenciaEncontrada) {
        Swal.fire({
            title: combinacionInfo.nombre,
            imageUrl: combinacionInfo.imagen,
        });
    } else {
        // No se encontraron coincidencias
        Swal.fire({
            title: 'Combinación Inválida',
            icon: 'error',
        });
    }
}



combinar.addEventListener('click', obtenerOrden);
