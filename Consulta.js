class Consulta extends Cliente {
    motivo;
    hora_entrada;
    modelo;
    fecha;
    comentario;
    constructor(causa,hora_ingreso,tipo,date,anotacion){
        this.motivo = causa;
        this.hora_entrada = hora_ingreso;
        this.modelo = tipo;
        this.fecha = date;
        this.comentario = anotacion;
    }

 RevisarMotivo = function(){
    return causa;
}
RevisarModelo = function()
{
    return tipo;
}
LeerComentario = function(){
    return anotacion;
}
}