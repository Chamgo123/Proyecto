let cart = [];

// Cargar el carrito desde el almacenamiento local si existe
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCart();
}

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('carrito-lista');
    const carritoCount = document.getElementById('carrito-count');

    cartList.innerHTML = '';
    carritoCount.textContent = cart.length;

    // Guardar el carrito en el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(cart));

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}

function agregarProductoAlContenedor(producto) {
    const productoDiv = document.createElement('div');
    productoDiv.className = 'producto';

    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement('p');
    precio.className = 'precio';
    precio.textContent = producto.precio;

    const boton = document.createElement('button');
    boton.textContent = 'Añadir al carrito';
    boton.addEventListener('click', () => {
        addToCart(producto.nombre);
        alert('Producto agregado al carrito');
    });

    productoDiv.appendChild(imagen);
    productoDiv.appendChild(titulo);
    productoDiv.appendChild(descripcion);
    productoDiv.appendChild(precio);
    productoDiv.appendChild(boton);

    const productosContainer = document.getElementById('productos-container');
    productosContainer.appendChild(productoDiv);
}