import {CadenaOriginal} from './clases.js'

let btn = document.getElementById("btnProcesar");
let btnOrdenar = document.getElementById("btnOrdenar");
btn.addEventListener("click",()=>{
    let nombre = document.getElementById("nombre").value;
    let rfc = document.getElementById("rfc").value;
    let tramite = document.getElementById("tramite").value;
    let ciudad = document.getElementById("ciudad").value;
    let cadena = new CadenaOriginal();
    cadena.setAcceso("Portal");
    cadena.setNombre(nombre);
    cadena.setRfc(rfc);
    cadena.setTramite(tramite);
    cadena.setCiudad(ciudad);
    cadena.setFecha();
    document.getElementById("cadena").innerHTML=cadena.generarCadena();
});

btnOrdenar.addEventListener("click",()=>{
    let cadNumeros = document.getElementById("txtIn").value;
    let arrNumeros = cadNumeros.split(",");
    arrNumeros = arrNumeros.sort((a,b)=>{return a-b});
    document.getElementById("txtOut").value=arrNumeros.join(",");
});

