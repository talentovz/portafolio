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

window.addEventListener("DOMContentLoaded", () => {
  // 🗓 Fecha actual + modificación
  const fecha = new Date().toLocaleDateString();
  const modif = document.lastModified;
  document.getElementById("fecha-info").textContent =
    `📅 Hoy es: ${fecha} | Última modificación: ${modif}`;

  // 🌐 Info del navegador
  document.getElementById("navegador-info").textContent =
    `🌐 Navegador: ${navigator.userAgent}`;
});

function confirmarDatos() {
  const nombre = document.querySelector("input[type='text']").value;
  const correo = document.querySelector("input[type='email']").value;

  alert(`✅ ¿Confirma el envío?\n\nNombre: ${nombre}\nCorreo: ${correo}`);
}

window.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector("button[type='submit']");
  boton.addEventListener("click", e => {
    e.preventDefault(); // Evita que se envíe el formulario automáticamente
    confirmarDatos();
  });
});
function confirmarDatos() {
  const nombre = document.querySelector("input[type='text']").value;
  const correo = document.querySelector("input[type='email']").value;

  const mensaje = `Nombre: ${nombre}<br>Correo: ${correo}`;
  document.getElementById("modalMensaje").innerHTML = mensaje;
  document.getElementById("confirmModal").style.display = "flex";
}

window.addEventListener("DOMContentLoaded", () => {
  const campos = document.querySelectorAll("input[type='text'], input[type='email'], textarea");

  campos.forEach(campo => {
    campo.addEventListener("focus", e => cambiarColorFondo(e, "#262626"));
    campo.addEventListener("blur", e => {
      cambiarColorFondo(e, "");
      convertirMayusculas(e);
    });
  });

  document.querySelector("button[type='submit']").addEventListener("click", e => {
    e.preventDefault();
    confirmarDatos();
  });

  // Cierra el modal al presionar X
  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("confirmModal").style.display = "none";
  });

  // Acepta y cierra el modal
  document.getElementById("modalAceptar").addEventListener("click", () => {
    document.getElementById("confirmModal").style.display = "none";
    // Aquí podrías enviar el formulario si lo deseas
    // document.querySelector("form").submit();
  });
});


