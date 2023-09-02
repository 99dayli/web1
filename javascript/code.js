// Función para obtener el nombre del día de la semana 
function getDiaSemana(diaSemana) {
    const nombresDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return nombresDias[diaSemana];
}

// Función para obtener el nombre del mes 
function getNombreMes(mes) {
    const nombresMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    return nombresMeses[mes];
}

// Obtener la fecha actual
const fecha = new Date();
const diaSemana = getDiaSemana(fecha.getDay());
const dia = fecha.getDate();
const mes = getNombreMes(fecha.getMonth());
const año = fecha.getFullYear();

// Crear el string de la fecha formateada
const fechaFormateada = `${diaSemana} ${dia} de ${mes} ${año}`;

// Mostrar la fecha en el div con id "fechaActual"
const divFecha = document.getElementById("fechaActual");
divFecha.textContent = fechaFormateada;


// Mostrar en alert los datos del formulario
function mostrarAlerta() {
  var formulario = document.getElementById('miFormulario');
  var nombre = formulario.nombre.value;
  var apellido = formulario.apellido.value;
  var telefono = formulario.telefono.value;
  var email = formulario.email.value;
  var mensaje = formulario.mensaje.value;

 
  // Mostrar alert con los valores del formulario
  var mensajeAlerta = "Información del formulario:\n";
  mensajeAlerta += "Nombre: " + nombre + "\n";
  mensajeAlerta += "Apellido: " + apellido + "\n";
  mensajeAlerta += "Telefono: " + telefono + "\n";
  mensajeAlerta += "Email: " + email + "\n";
  mensajeAlerta += "Mensaje: " + mensaje + "\n";
  alert(mensajeAlerta);

  // Borrar los campos del formulario
  formulario.reset();
}
