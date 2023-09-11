const calificaciones = ['8.5', '6.3', '9.8', '7.1', '3.5', '9.4'];

const finales = calificaciones.map((calificacion) => {
    
    if (parseFloat(calificacion) >= 7) {
        return 'Aprobado';
    } else {
        return 'Reprobado';
    }
});

console.log(finales);
