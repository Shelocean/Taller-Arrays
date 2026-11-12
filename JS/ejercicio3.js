let lista_productos=[];

function agregarProducto() {

    let producto = document.getElementById("producto").value;
    let precio =parseFloat(document.getElementById("precio").value);
    let cantidad =parseInt(document.getElementById("cantidad").value);


    if (producto==="" || isNaN(precio) || isNaN(cantidad)){
        alert("Por favor llene todos los campos");
    }else{
        lista_productos.push({
            item_producto: producto,
            item_precio: precio,
            item_cantidad: cantidad,
        });
        alert("Producto guarado exitosamente");
        // Llamar la funcion para mostrar el listado de productos
        mostrarProducto();
    }
}

function mostrarProducto(){
    let tabla =document.getElementById("tabla");
    tabla.innerText="";
    let total = 0;
    for(let i = 0; i<lista_productos.length; i++){
        
        total += lista_productos[i].item_precio * lista_productos[i].item_cantidad

        tabla.innerHTML += `
        <tr>
            <td>${lista_productos[i].item_producto}</td>
            <td>${lista_productos[i].item_precio}</td>
            <td>${lista_productos[i].item_cantidad}</td> 
            <td>
                ${lista_productos[i].item_precio * lista_productos[i].item_cantidad}
            </td>
        </tr>
        `;
        producto.value="";
        cantidad.value="";
        precio.value="";
    }
    document.getElementById("total").innerText=total;
}