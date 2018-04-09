class CadenaOriginal{

    constructor(){}

    setAcceso(acceso){
        this.acceso=acceso;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    setRfc(rfc){
        this.rfc=rfc;
    }

    setCiudad(ciudad){
        this.ciudad=ciudad;
    }

    setTramite(tramite){
        this.tramite=tramite;
    }

    setFecha(){
        let date = new Date();
        let dia = date.getDate().toString();
        this.fecha = (dia.length>1?dia:"0"+dia)+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
    }

    generarCadena(){
        return `|${this.acceso}|${this.nombre}|${this.rfc}|${this.tramite}|${this.ciudad}|${this.fecha}|`;
    }
}

export {CadenaOriginal};