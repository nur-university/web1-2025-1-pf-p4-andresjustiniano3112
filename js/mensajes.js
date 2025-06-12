let chats = {
  vendiendo: {},
  comprando: {}
};

let anuncioActualVendiendo = 'Samsung s24+';
let personaActual = '';
let anuncioActualComprando = 'Samsung s24+';

const personasPorAnuncio = {
  'Samsung s24+': ['Pedro', 'Luis'],
  'Pc Gamer HP': ['Ana', 'María'],
  'Teclado Logitech': ['Carlos', 'Elena']
};

function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(s => s.classList.remove('visible'));
  document.getElementById(id).classList.add('visible');
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.tab:nth-child(${id === 'vendiendo' ? 1 : 2})`).classList.add('active');
  renderizarMensajes(id);
}

function cambiarAnuncio(modo, anuncio) {
  if (modo === 'vendiendo') {
    anuncioActualVendiendo = anuncio;

    const personas = personasPorAnuncio[anuncio] || [];
    const ul = document.getElementById('personasVendiendo');
    ul.innerHTML = '';

    personas.forEach((persona, i) => {
      const li = document.createElement('li');
      li.textContent = persona;
      li.onclick = () => cambiarPersona(persona);
      ul.appendChild(li);
      if (i === 0) cambiarPersona(persona);
    });

  } else {
    anuncioActualComprando = anuncio;
  }

  renderizarMensajes(modo);
}

function cambiarPersona(persona) {
  personaActual = persona;

  document.querySelectorAll('#personasVendiendo li').forEach(li => {
    li.classList.remove('activo');
    if (li.textContent === persona) li.classList.add('activo');
  });

  const titulo = document.getElementById('tituloPersona');
  if (titulo) titulo.textContent = `Conversación con ${persona}`;

  renderizarMensajes('vendiendo');
}

function enviarMensaje(modo) {
  const input = document.getElementById(`input${modo.charAt(0).toUpperCase() + modo.slice(1)}`);
  const texto = input.value.trim();
  if (texto === '') return;

  const clave = modo === 'vendiendo'
    ? `${anuncioActualVendiendo}::${personaActual}`
    : `${anuncioActualComprando}`;

  if (!chats[modo][clave]) {
    chats[modo][clave] = [];
  }

  chats[modo][clave].push({ tipo: 'enviado', texto });
  input.value = '';
  renderizarMensajes(modo);
}

function renderizarMensajes(modo) {
  const chatBox = document.getElementById(`chatBox${modo.charAt(0).toUpperCase() + modo.slice(1)}`);
  chatBox.innerHTML = '';

  const clave = modo === 'vendiendo'
    ? `${anuncioActualVendiendo}::${personaActual}`
    : `${anuncioActualComprando}`;

  const mensajes = chats[modo][clave] || [];

  mensajes.forEach(m => {
    const div = document.createElement('div');
    div.className = `mensaje ${m.tipo}`;
    div.innerText = m.texto;
    chatBox.appendChild(div);
  });

  if (modo === 'vendiendo') {
    const titulo = document.getElementById('tituloPersona');
    if (titulo) titulo.textContent = `Conversación con ${personaActual}`;
  }

  chatBox.scrollTop = chatBox.scrollHeight;
}

window.addEventListener('DOMContentLoaded', () => {
  cambiarAnuncio('vendiendo', 'Samsung s24+');
});
