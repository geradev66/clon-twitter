document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#formulario');
    const alertCorreo = document.querySelector('#alertMail');
    const alertAsunto = document.querySelector('#alertAsunto');
    const alertMensaje = document.querySelector('#alertMensaje');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const correo = document.querySelector('#email').value.trim();
        const asunto = document.querySelector('#asunto').value.trim();
        const mensaje = document.querySelector('#mensaje').value.trim();
        
        validarCorreo(correo, alertCorreo, 'correo');
        validarAsunto(asunto, alertAsunto, 'asunto');
        validarMensaje(mensaje, alertMensaje, 'mensaje');
    });

    function validarCorreo(correo, target, mensajeError) {
        if (correo === '') {
            target.innerHTML = `
            <div class="alert alert-danger mt-2" role="alert">
               Este campo ${mensajeError} es obligatorio
            </div>
            `;
            setTimeout(() => {
                target.innerHTML = ''; // Ocultar el mensaje después de 3 segundos
            }, 3000);
            return;
        } else {
            target.innerHTML = '';
        }
    }

    function validarAsunto(asunto, target, mensajeError) {
        if (asunto === '') {
            target.innerHTML = `
            <div class="alert alert-danger mt-2" role="alert">
               Este campo ${mensajeError} es obligatorio
            </div>
            `;
            setTimeout(() => {
                target.innerHTML = ''; // Ocultar el mensaje después de 3 segundos
            }, 3000);
            return;
        } else {
            target.innerHTML = '';
        }
    }

    function validarMensaje(mensaje, target, mensajeError) {
        if (mensaje === '') {
            target.innerHTML = `
            <div class="alert alert-danger mt-2" role="alert">
               Este campo ${mensajeError} es obligatorio
            </div>
            `;
            setTimeout(() => {
                target.innerHTML = ''; // Ocultar el mensaje después de 3 segundos
            }, 3000);
            return;
        } else {
            target.innerHTML = '';
        }
    }

});