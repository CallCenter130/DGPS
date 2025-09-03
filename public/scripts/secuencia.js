// Contenido de /src/scripts/secuencia.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (!form) return; // Salir si no se encuentra el formulario

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenimos el envío tradicional

        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        formStatus.textContent = '';

        // ¡AQUÍ ESTÁ NUESTRO TOKEN SECRETO! (Debe coincidir con el de GAS)
        const secretToken = "6Lfb6bwrAAAAAFcGP77eRkx8FCpbOj93plP9oVHa"; 
        
        // La URL de tu NUEVA implementación de Google Apps Script
        const gasUrl = 'https://script.google.com/macros/s/AKfycbwtoQmBb7SlXcx0Qe5haMstL6o_DyRs58yIp0UN8tLHc2CQPzLIYXyXiBXbKH-KNPml/exec';

        const formData = new FormData(form);
        formData.append('token', secretToken); // Agregamos el token a los datos del formulario

        fetch(gasUrl, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                formStatus.textContent = '¡Gracias! Su mensaje ha sido enviado correctamente.';
                formStatus.style.color = 'green';
                form.reset();
            } else {
                throw new Error(data.details || 'Ocurrió un error desconocido.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            formStatus.textContent = 'Error al enviar el formulario: ' + error.message;
            formStatus.style.color = 'red';
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Mensaje';
        });
    });
});