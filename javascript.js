// Seleccionar el botón de conexión y el audio
const connectButton = document.querySelector('.s_submit');
const trollAudio = document.getElementById('trollAudio');

// Reproducir el audio al hacer clic en el botón
connectButton.addEventListener('click', () => {
    console.log('Botón presionado'); // Confirmar que el evento ocurre
    trollAudio.play()
        .then(() => console.log('Audio reproducido con éxito'))
        .catch((error) => {
            console.error('Error al reproducir el audio:', error);
        });
});

