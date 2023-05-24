window.onload = function() {
    var fileImput = document.getElementById('fileInput');
    var loadingMessage = document.getElementById('loadingMessage');
    var videoPlayer = document.getElementById('videoPlayer');
    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');
    var volumeUpButton = document.getElementById('volumeUpButton');
    var volumeDownButton = document.getElementById('volumeDownButton');

    playButton.addEventListener('click', function() {
        videoPlayer.play();
    });

    pauseButton.addEventListener('click', function() {
        videoPlayer.pause();
    });

    volumeUpButton.addEventListener('click', function() {
        if (videoPlayer.volume < 1) {
            videoPlayer.volume += 0.1;
        }
    });

    volumeDownButton.addEventListener('click', function() {
        if (videoPlayer.volume > 0) {
            videoPlayer.volume -= 0.1;
        }
    });

    fileImput.addEventListener('change', function(event) {
        loadingMessage.classList.remove('error-color')
        loadingMessage.classList.remove('info-color')

        var file = event.target.files[0];
        var fileURL = URL.createObjectURL(file);
        var videoType = file.type.split('/')[0];


        if (videoType === 'video') {
            loadingMessage.classList.add('info-color')
            loadingMessage.style.display = 'block';
            loadingMessage.innerText = 'Cargando video...';

            setTimeout(() => {

                videoPlayer.src = fileURL;

                videoPlayer.addEventListener('canplay', function() {
                    loadingMessage.style.display = 'none';
                });

                loadingMessage.style.display = 'none';
            }, 3000);


        } else {
            loadingMessage.classList.add('error-color')
            loadingMessage.style.display = 'block';
            loadingMessage.innerText = 'El archivo seleccionado no es un video válido';
        }
    });
};