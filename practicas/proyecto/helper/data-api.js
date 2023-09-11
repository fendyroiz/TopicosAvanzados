const api = [
    {
        image: {
            uri: './recursos/fotoSiete.jpg',
            description: 'cascass'
        },
        title: 'Desarrollo Web',
        description: 'Un desarrollador web es un profesional que crea y mantiene sitios web y aplicaciones web utilizando lenguajes de programación como HTML, CSS y JavaScript. Su objetivo es construir sitios funcionales y atractivos, asegurándose de que sean seguros y eficientes.Trabajan en una variedad de proyectos y colaboran con diseñadores para dar vida a la presencia en línea de empresas0 y personas un desarrollador web es un arquitecto digital.'
    },
    {
        image: {
            uri: './recursos/fotoDos.jpg',
            description: 'xaxsasx'
        },
        title: 'Ciberseguridad',
        description: 'Un profesional en ciberseguridad es un experto en proteger sistemas, y datos de amenazas cibernéticas. Su trabajo es prevenir y combatir ataques informáticos, evaluar vulnerabilidades y establecer políticas de seguridad digital. Son esenciales en un mundo digitalizado para proteger información y privacidad, Su trabajo es crucial en un mundo cada vez más conectado digitalmente la privacidad se han vuelto críticas para empresas.'
    },
    {
        image: {
            uri: './recursos/fotoTres.jpg',
            description: 'asxasxa'
        },
        title: 'Base de datos',
        description: 'Un profesional en base de datos también se encarga de garantizar la seguridad y privacidad de los datos, implementando medidas de protección y cumplimiento de regulaciones para resguardar la información digital de manera efectiva. Además, desempeña un papel fundamental en el análisis y la extracción de información valiosa a partir de grandes conjuntos de datos, contribuyendo a la toma de decisiones estratégicas.'
    },
    {
        image: {
            uri: './recursos/fotoCuatro.jpg',
            description: 'ceddcs'
        },
        title: 'Desarrollo Movil',
        description: 'Un desarrollador móvil se enfoca en crear aplicaciones para dispositivos móviles como smartphones y tabletas. Utilizan lenguajes de programación específicos para desarrollar aplicaciones funcionales y atractivas. Su objetivo es asegurarse de que las aplicaciones sean fáciles de usar, eficientes y compatibles con diferentes plataformas, proporcionando soluciones innovadoras a través de dispositivos móviles.'
    },
    {
        image: {
            uri: './recursos/fotoCinco.jpg',
            description: 'dcsd'
        },
        title: 'Inteligencia Artificial',
        description: 'Un profesional en inteligencia artificial trabaja en el desarrollo de sistemas y algoritmos que pueden aprender y tomar decisiones de manera autónoma. Utilizan técnicas de aprendizaje automático y procesamiento de datos para crear soluciones que imiten la inteligencia humana. Su objetivo es aplicar la IA en diversos campos, como la automatización de tareas, la toma de decisiones y la resolución de problemas.'
    },
    {
        image: {
            uri: './recursos/fotoSeis.jpg',
            description: 'hnghn'
        },
        title: 'Video Juegos',
        description: 'Un desarrollador de videojuegos se dedica a la creación de experiencias interactivas en forma de juegos digitales. Utilizan habilidades de programación, diseño de personajes y gráficos para construir mundos virtuales atractivos. Su tarea es garantizar la jugabilidad, la calidad visual y la diversión del juego, colaborando en equipos multidisciplinarios para llevar a cabo proyectos de entretenimiento interactivo.'
    }
]

const tablaInfo = document.getElementById('tablaInfo');

api.forEach(item => {
    const listaItem = document.createElement('div');
    listaItem.classList.add('item-container');
    listaItem.innerHTML = `
        <img src="${item.image.uri}" alt="${item.image.description}">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <button class = "boton">Ver oferta academica</button>
    `;
    tablaInfo.appendChild(listaItem);
});
export { tablaInfo };

//api.map((item) => console.log(item.image))

//api.forEach((item)=> console.log(item))