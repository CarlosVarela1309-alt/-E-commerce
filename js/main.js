// CONTENEDOR DE PRODUCTOS
const contenedorProductos = document.querySelector("#contenedor-productos");

// BOTONES DE CATEGORÍAS
const botonesCategorias = document.querySelectorAll(".boton-categoria");

// NÚMERO DEL CARRITO
const numero = document.querySelector("#numero");


// ARRAY DE PRODUCTOS
const productos = [
    {
        id: 1,
        titulo: "Abrigo 01",
        precio: 1000,
        categoria: "abrigos",
        imagen: "../img/abrigos/01.jpg"
    },

    {
        id: 2,
        titulo: "Abrigo 02",
        precio: 1200,
        categoria: "abrigos",
        imagen: "../img/abrigos/02.jpg"
    },

    {
        id: 3,
        titulo: "Camisa Negra",
        precio: 800,
        categoria: "camisas",
        imagen: "../img/camisas/01.jpg"
    },

    {
        id: 4,
        titulo: "Pantalón Azul",
        precio: 900,
        categoria: "pantalones",
        imagen: "../img/pantalones/01.jpg"
    }
];


// FUNCIÓN PARA CARGAR PRODUCTOS
function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");

        div.classList.add("producto");

        div.innerHTML = `
        
            <img class="producto-imagen"
            src="${producto.imagen}"
            alt="${producto.titulo}">

            <div class="producto-detalles">

                <h3 class="producto-titulo">
                    ${producto.titulo}
                </h3>

                <p class="producto-precio">
                    $${producto.precio}
                </p>

                <button class="boton-agregar" id="${producto.id}">
                    Agregar al carrito
                </button>

            </div>
        
        `;

        contenedorProductos.append(div);

    });

    actualizarBotonesAgregar();

}


// CARGAR TODOS LOS PRODUCTOS AL INICIO
cargarProductos(productos);


// FILTRAR PRODUCTOS
botonesCategorias.forEach(boton => {

    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => {
            boton.classList.remove("active");
        });

        e.currentTarget.classList.add("active");

        const id = e.currentTarget.id;

        if(id === "todos") {

            cargarProductos(productos);

        } else {

            const productosFiltrados = productos.filter(producto => 
                producto.categoria === id
            );

            cargarProductos(productosFiltrados);

        }

    });

});


// CARRITO
let carrito = [];


// BOTONES AGREGAR
function actualizarBotonesAgregar() {

    const botonesAgregar = document.querySelectorAll(".boton-agregar");

    botonesAgregar.forEach(boton => {

        boton.addEventListener("click", agregarAlCarrito);

    });

}


// AGREGAR AL CARRITO
function agregarAlCarrito(e) {

    const idBoton = parseInt(e.currentTarget.id);

    const productoAgregado = productos.find(producto => 
        producto.id === idBoton
    );

    carrito.push(productoAgregado);

    actualizarNumero();

    console.log(carrito);

}


// ACTUALIZAR NÚMERO DEL CARRITO
function actualizarNumero() {

    numero.innerText = carrito.length;

}