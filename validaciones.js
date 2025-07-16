// 👉 Cambiar fondo al enfocar y desenfocar campos
function cambiarColorFondo(evento, color) {
  evento.target.style.backgroundColor = color;
}

// 👉 Convertir a mayúsculas al retirar el foco
function convertirMayusculas(evento) {
  evento.target.value = evento.target.value.toUpperCase();
  evento.target.style.backgroundColor = ""; // Resetear fondo
}

// 👉 Mostrar mensaje de confirmación al enviar
function confirmarDatos() {
  const nombre = document.querySelector("input[type='text']").value;
  const correo = document.querySelector("input[type='email']").value;
  alert(`¿Confirma el envío?\nNombre: ${nombre}\nCorreo: ${correo}`);
}

// 👉 Asignar eventos al cargar el DOM
window.addEventListener("DOMContentLoaded", () => {
  const campos = document.querySelectorAll("input[type='text'], input[type='email'], textarea");

  campos.forEach(campo => {
    campo.addEventListener("focus", e => cambiarColorFondo(e, "#262626"));
    campo.addEventListener("blur", e => {
      cambiarColorFondo(e, "");
      convertirMayusculas(e);
    });
  });

  const boton = document.querySelector("button[type='submit']");
  boton.addEventListener("click", e => {
    e.preventDefault(); // Evita el envío automático
    confirmarDatos();
  });
});

const fecha = new Date();
const ultimaMod = document.lastModified;
document.getElementById("fecha-info").textContent =
  `📅 Hoy es: ${fecha.toLocaleDateString()} | Última modificación: ${ultimaMod}`;
  
  const navegador = navigator.userAgent;
document.getElementById("navegador-info").textContent =
  `🌐 Navegador: ${navegador}`;


