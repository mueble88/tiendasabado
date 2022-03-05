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


//creo la referencia al componente padre
//creo una variable para almacenar la base
//sobre la cual voy a pintar
let fila=document.getElementById("fila");

// recorriendo un arreglo
// buscar/seleccionar/esculcar
productos.forEach(function(producto) { //function anonima
    console.log(producto.nombre)

    //receta para pintar js

    //1. comience a crear una estructura que necesite

    //creo la columna
    let columna=document.createElement("div")
    columna.classList.add("col")

    //creo la tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //creo la imagen
    let imagen=document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.src=producto.foto 

    //2. ordenar la estructura
    tarjeta.appendChild(imagen)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
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



