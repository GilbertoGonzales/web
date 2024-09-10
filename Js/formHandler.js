document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const formMessages = document.getElementById('formMessages');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                formMessages.textContent = 'Correo enviado correctamente.';
                formMessages.classList.remove('error');
                formMessages.classList.add('success');
                formMessages.style.display = 'block';
                form.reset();
            } else {
                return response.json().then(data => {
                    throw new Error(data.message || 'Ocurrió un error al enviar el correo.');
                });
            }
        }).catch(error => {
            formMessages.textContent = `¡Ups! Algo salió mal, inténtelo de nuevo. ${error.message}`;
            formMessages.classList.remove('success');
            formMessages.classList.add('error');
            formMessages.style.display = 'block';
        });
    });
});
