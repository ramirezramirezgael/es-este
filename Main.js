var clientes = [];
var trabajadores = [];
var consultas = [];
function crearCliente(){
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('apellido').value;
    let numeroTel = document.getElementById('contacto').value;
    let numeroNota = document.getElementById('cita').value;
    let tiempoTrans = document.getElementById('lapso').value;
    let contactoEme = document.getElementById('emergencia').value;
    let Cliente = clientes[numeroTel,numeroNota,tiempoTrans,contactoEme,nombre,apellido];
    let c1 = Cliente;
    clientes.push(c1);
    alert("Se Registro Clente");
    document.getElementById('contacto').value = ''
}

function creartrabajador(){
  
    let nombre = document.getElementById('apodo');
    let apellido = document.getElementById('lastname');
    let horario = document.getElementById('tiempo');
    let reparacion_realizada = document.getElementById('arreglado');
    let experiencia_Lab = document.getElementById('habilidad');
    let estudios = document.getElementById('formacion');
    let t1 =  new Trabajador[horario.value,reparacion_realizada.value,experiencia_Lab.value,estudios.value,nombre.value,apellido.value];
    trabajadores.push(t1);
    localStorage.setItem(trabajadores, JSON.stringify(trabajadores));
    alert("Se Registro Trabajador");
    nombre.value = "";
    apellido.value = "";
    horario.value = "";
    reparacion_realizada.value = "";
    experiencia_Lab.value = "";
    estudios.value = "";
 
}

function GenerarConsulta(){
    let motivo = document.getElementById('causa').value;
    let hora_entrada = document.getElementById('hora_ingreso').value;
    let modelo = document.getElementById('tipo').value;
    let fecha = document.getElementById('date').value;
    let comentario = document.getElementById('anotacion').value;
    let Consulta = consultas [motivo,modelo,hora_entrada,comentario,fecha];
    let con1 = new Consulta;
   consultas.push(con1);
    alert ("Tu consulta se a sido registrada");

}
function updateOptionSelect(){
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select =  document.getElementById('trabajador');
    select.innerHTML = '';
    for(let i = 0; i<trabajadores.length; i++){
        options += `<option value="${i}">${trabajadores[i].Nombre}</option>`;
    }
    select.innerHTML = options;
}