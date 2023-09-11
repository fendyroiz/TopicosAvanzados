const titulo = document.createElement('h1');
titulo.innerHTML = 'FUNCIONES';

const borrar = document.createElement('h1');
borrar.innerHTML = 'BORRAR ESTUDIANTES';

document.body.appendChild(titulo);
document.body.appendChild(borrar);

const estudiantes = ['Ricardo', 'Julio', 'Daniela', 'Arlete'];

titulo.addEventListener('click', () => {
  for (let estudiante of estudiantes) {
    const p = document.createElement('p');
    p.innerHTML = estudiante;
    document.body.appendChild(p);
  }
});

borrar.addEventListener('click', () => {
    const eliminar = document.querySelectorAll('p');
  
    for (let p of eliminar) {
      p.remove();
    }
  });
  