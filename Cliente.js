class Cliente extends Persona{
    nombre;
    apellido;
    numeroTel;
    numeroNota;
    tiempoTrans;
    contactoEme;
    constructor(contacto,cita,lapso,emergencia,apodo,lastname,){
        super(apodo,lastname)
        this.numeroTel = contacto;
        this.numeroNota = cita;
        this.tiempoTrans = lapso;
        this.contactoEme = emergencia;
        this.nombre = apodo; 
        this.apellido= lastname;
    }
}