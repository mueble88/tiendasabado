// IMPORTANDO MODULOS

import { pintarTienda } from "./llenadotienda.js";
import{ampliarInformacion} from "./ampliarInfo.js";

// crear un objeto vacio
let producto = {}

// llamando el modulo de pintar
pintarTienda()

// llamando al modulo ampliarInfo
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){
    let modalinfoproducto = new bootstrap.Modal(document.getElementById('infoproducto'))
    producto=ampliarInformacion(event)
    modalinfoproducto.show()

})  

// dectetar la accion de añadir al carrito


// carrito es un arreglo de producto (arreglo de objetos)
let carrito=[]


let boton = document.getElementById("anyadir")
boton.addEventListener('click',function(evento){
    
    // 1. capturar la cantidad del producto
    let cantidad = document.getElementById("cantidadProducto").value

    // 2. agrego la cantidad al objeto producto
    producto.cantidad=cantidad

    //agregar el producto al carrito
    carrito.push(producto)


    // calcular la sumatoria de cantidad
    let suma=0
    
    carrito.forEach(function(producto){

        suma = suma + Number(producto.cantidad)
  
    })
    let capsula=document.getElementById("capsula")
    capsula.textContent=suma

    capsula.classList.remove("invisible")
   
})