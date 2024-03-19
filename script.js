// Datos de productos
const products = [
    { id: 1, name: 'Televisor 60"', price: 3599 },
    { id: 2, name: 'Refrigeradora 511L SBS Inox ', price: 2099 },
    { id: 3, name: 'Dormitorio Nappy 1.5 Plazas', price: 529 },
    { id: 4, name: 'Smartphone Moto G84 8GB', price:  999 },
    { id: 5, name: 'Mochila Bradbury Black', price: 159.20 }
  ];
  
  let lista_producto;
  // Función para mostrar productos (Función)
  function listaProductos() {
    console.log("Lista de productos disponibles:");
    let productoInfo = "";
    products.forEach(product => {
      console.log(`ID: ${product.id} - Nombre: ${product.name} - Precio: $${product.price}`);
      productoInfo += `ID: ${product.id} - Nombre: ${product.name} - Precio: $${product.price}\n`;

    });
    return productoInfo
  }
  
// Función para agregar producto al carrito (Función)
  function addCart(productId, quantity, cart) {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
      cart.push({ ...selectedProduct, quantity });
      console.log(`Producto "${selectedProduct.name}" (Cantidad: ${quantity}) agregado al carrito.`);
    } else {
      console.error('Producto no encontrado.');
    }
  }
  
// Función para calcular el total de la compra (Función, Ciclos)
  function calculateTotal(cart) {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  }
  
// Función para calcular el IGV (Función)
  function calcularIGV(total, igvPorcentage) {
    // Calcula el impuesto (IGV) sobre el total de la compra (Variables, Función)
    return total * igvPorcentage / 100;
  }
  
// Función para realizar la compra (Función, Ciclos)
  function purchase() {
    const cart = [];
    let continuarcomprando = true;
   

    while (continuarcomprando) {
      const productList = listaProductos();
      const productId = parseInt(prompt(`${productList}\nIngrese el ID del producto que desea comprar:`));
      const quantity = parseInt(prompt("Ingrese la cantidad:"));
      addCart(productId, quantity, cart);
      continuarcomprando = confirm("¿Desea seguir comprando?");
    }
  
    const subtotal = calculateTotal(cart);
    const igvPercentage = 18; // Porcentaje de IGV (puedes ajustarlo según tu país)
    const igv = calcularIGV(subtotal, igvPercentage);
    const total = subtotal + igv;
  
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(`IGV (${igvPercentage}%): $${igv.toFixed(2)}`);
    console.log(`Total a pagar: $${total.toFixed(2)}`);

    let compraResultado = "";
    compraResultado += `Subtotal: $${subtotal.toFixed(2)}\n`;
    compraResultado += `IGV (${igvPercentage}%): $${igv.toFixed(2)}\n`;
    compraResultado += `Total a pagar: $${total.toFixed(2)}`;
    // Muestra el resultado de la compra en un prompt
    prompt(compraResultado);
  }
  

  purchase();