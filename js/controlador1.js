// IMPORTANDO MODULOS

import { pintarTienda } from "./llenadotienda.js";
import{ampliarInformacion} from "./ampliarInfo.js"

// llamando el modulo de pintar
pintarTienda()

// llamando al modulo ampliarInfo
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){
    let modalinfoproducto = new bootstrap.Modal(document.getElementById('infoproducto'))
    ampliarInformacion(event)
    modalinfoproducto.show()

})