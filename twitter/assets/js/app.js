document.addEventListener("DOMContentLoaded", function() {
    const contenidoTweet = document.querySelector('#post');
    const botonTweet = document.querySelector('#mandar-tweet');
    const darkMode = document.querySelector('#dark-mode')
    const cuerpo = document.querySelector('.main')
    const card = document.querySelectorAll('.card')
    const areaTweet =document.querySelector('.area-tweets')
   

    botonTweet.addEventListener('click', function(e) {
        e.preventDefault();

        const textArea = document.querySelector('#tweet'); // Mantener referencia al elemento
        const mensaje = textArea.value.trim();

        capturarTweet(mensaje);

        function capturarTweet(mensaje) {
            if (mensaje) {
                // Comprobar si el mensaje ya existe
                const tweetsExistentes = contenidoTweet.querySelectorAll('.post p');
                //// tweet repreosenta las etiquetas <p>
                const mensajeDuplicado = Array.from(tweetsExistentes).some(function(tweet) { //transforma los nodos en array y el some berifica que no haya duplicidad
                    return tweet.textContent === mensaje;
                });

                if (!mensajeDuplicado) {
                    contenidoTweet.innerHTML += `
                    <section class="card post p-3">
                        <div class="info d-flex justify-content-around">
                            <span class="d-flex gap-2">
                                <img src="./assets/img/profile.jpg" class="rounded-5 " width="60" height="60" alt="">
                                <span class="d-flex gap-3 flex-column">
                                    <h5><b>Gerardo ponce</b> <span class="username">@jerry66ponce</span></h5> 
                                    <p>${mensaje}</p>
                                </span>
                            </span>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle bg-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Actions
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item eliminar-btn" href="#">Delete</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr>
                        <footer class="d-flex justify-content-lg-around">
                            <div class="icono d-flex gap-2">
                                <i class="fa-solid fa-comment"></i>
                                <p>0</p>
                            </div>
                            <div class="icono d-flex gap-2">
                                <i class="fa-solid fa-repeat"></i>
                                <p>0</p>
                            </div>
                            <div class="icono d-flex gap-2">
                                <i class="fas fa-heart"></i>
                                <p>0</p>
                            </div>
                        </footer>
                    </section>
                    `;
                }
                // Limpiar el textarea después de enviar el mensaje
                textArea.value = '';
            } else {
                alert("El campo de texto está vacío. Por favor, ingresa un mensaje.");
            }
        }
    });

    // Delegación de eventos para el botón eliminar
    contenidoTweet.addEventListener('click', function(e) {
        if (e.target && e.target.matches('.eliminar-btn')) {
            e.preventDefault();
            eliminarTweet(e.target);
        }
    });

    function eliminarTweet(eliminarBtn) {
        const eliminarContenido = eliminarBtn.closest('.post'); // Cambiado a clase post para eliminar solo el tweet
        if (eliminarContenido) {
            eliminarContenido.remove();
        }
    }

     // Asegúrate de que el checkbox se haya seleccionado correctamente
     console.log(darkMode); // Esto debería mostrar el elemento del checkbox

     if (darkMode) {
         darkMode.addEventListener('click', function() {
             console.log('Checkbox clicked'); // Verificar que se hace clic en el checkbox
             cuerpo.classList.toggle('dark'); // Alternar la clase 'dark'
             console.log(cuerpo.classList); // Mostrar las clases del body para confirmar que 'dark' se agrega o quita
         });
     } else {
         console.error('No se encontró el elemento con ID dark-mode');
     }

     if (darkMode) {
        darkMode.addEventListener('click', function() {
            console.log('Checkbox clicked'); // Verificar que se hace clic en el checkbox
            card.classList.toggle('dark'); // Alternar la clase 'dark'
            console.log(cuerpo.classList); // Mostrar las clases del body para confirmar que 'dark' se agrega o quita
        });
    } else {
        console.error('No se encontró el elemento con ID dark-mode');
    }


    if (darkMode) {
        darkMode.addEventListener('click', function() {
            console.log('Checkbox clicked'); // Verificar que se hace clic en el checkbox
            areaTweet.classList.toggle('dark'); // Alternar la clase 'dark'
            console.log(cuerpo.classList); // Mostrar las clases del body para confirmar que 'dark' se agrega o quita
        });
    } else {
        console.error('No se encontró el elemento con ID dark-mode');
    }
});
