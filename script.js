// Captura el evento de envío del formulario
document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Obtiene los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim(); //value.trim elimina los espacios en blanco en ambos extremos del string.
    const edad = parseInt(document.getElementById('edad').value, 10);

    // Valida los campos
    if (nombre === '' || apellidos === '') {
        alert('Por favor, complete todos los campos de nombre y apellidos.'); // Alerta si hay campos vacíos
        return; // Detiene la ejecución si hay un error
    }

    if (isNaN(edad) || edad <= 0) { //isNaN intenta convertir el parámetro pasado a un número.
        alert('La edad debe ser un número positivo mayor a 0.'); // Alerta si la edad es inválida
        return; // Detiene la ejecución si hay un error
    }

    // Muestra los datos en la caja de información
    //innerHTML podemos tanto 'capturar' todo el contenido de un elemento,
    document.getElementById('infoContent').innerHTML = `Nombre: ${nombre}<br>Apellidos: ${apellidos}<br>Edad: ${edad}`;
    //style.display establece cómo se muestra un elemento (como inline o block) 
    document.getElementById('infoBox').style.display = 'block'; // Muestra la caja de información

    // Borra el formulario
    document.getElementById('infoForm').reset();
});

// Captura el evento de clic del botón "Cerrar"
document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('infoBox').style.display = 'none'; // Oculta la caja de información
    document.getElementById('infoForm').reset(); // Borra el contenido del formulario
    document.getElementById('nombre').focus(); // Pone el enfoque en el campo de nombre
});
