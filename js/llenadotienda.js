// arreglo de objetos

let productos = [
    {nombre:"Figura 2",            precio:75000, foto:"../img/proc1.jpg",descripcion:"figura de la serie demon slayer"},
    {nombre:"Figura 1",            precio:80000, foto:"../img/proc2.jpg",descripcion:"figura de la serie demon slayer"},
    {nombre:"Figura 3",            precio:90000, foto:"../img/proc3.jpg",descripcion:"figura de la serie naruto shippuden"},
    {nombre:"Figura 4",            precio:250000,foto:"../img/proc4.jpg",descripcion:"figuras de la serie naruto shippuden"},
    {nombre:"mug dragon ball z",   precio:20000, foto:"../img/proc5.jpg",descripcion:"El mug cuando calienta aparece otra imagen"},
    {nombre:"Figura 5",            precio:150000,foto:"../img/proc6.jpg",descripcion:"figura de la serie naruto shippuden"},
    {nombre:"Cojin 1 demon slayer",precio:20000, foto:"../img/proc7.jpg",descripcion:"Cojin decorativo"},
    {nombre:"Cojin 2 demon slayer",precio:20000, foto:"../img/proc8.jpg",descripcion:"Cojin decorativo"},
    {nombre:"Cojin 3 demon slayer",precio:20000, foto:"../img/proc9.jpg",descripcion:"Cojin decorativo"},
    {nombre:"Stickers",            precio:5000,  foto:"../img/proc10.jpg",descripcion:"Tenemos stickers de varias series de anime"}, 
]
// recorriendo un arreglo
// buscar/seleccionar/esculcar
productos.forEach(function(producto) {
    console.log("Hola !!!")
})

// Escuchando clic en el boton
let boton = document.getElementById("boton")

// Detectanto el primer evento
boton.addEventListener("click",cambiarFoto)

// creando una funcion
function cambiarFoto(){
    let foto = document.getElementById("fotoPrueba")
    foto.src="../img/img4.png"
}



