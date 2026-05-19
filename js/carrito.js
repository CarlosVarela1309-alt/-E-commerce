// Array de productos

const productosArray = [
    {
        id: 1,
        titulo: "Abrigo 01",
        imagen: "../img/abrigos/01.jpg",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000,
    },
    {
        id: 2,
        titulo: "Abrigo 02",
        imagen: "../img/abrigos/02.jpg",
        precio: 1000,
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        }
    },
    {
        id: 3,
        titulo: "Abrigo 03",
        imagen: "../img/abrigos/03.jpg",
        precio: 1000,
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        }
    },
    {
        id: 4,
        titulo: "Abrigo 04",
        imagen: "../img/abrigos/04.jpg",
        precio: 1000,
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        }
    }
];

const contenedorProoductos = document.querySelector("#contendor-productos");

function cargarProductos () {

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = 
            `<img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="boton-agregar" id="${producto.id}">Agregar al carrito</button>
            </div>`;
        contenedorProoductos.append(div);
    })

}

