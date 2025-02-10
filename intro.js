document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById('background-music');
    const muteButton = document.getElementById('mute-button');
    const volumeSlider = document.getElementById('volume-slider');
    const icon = muteButton.querySelector("i"); // Get the icon inside the button

    // Set default volume and loop
    audio.volume = 1;
    audio.loop = true;

    audio.play().catch(error => {
        console.log('Autoplay was prevented. User interaction needed.');
    });

    // Mute/Unmute button functionality
    muteButton.addEventListener("click", function () {
        audio.muted = !audio.muted;
        volumeSlider.value = audio.muted ? 0 : audio.volume; // Sync slider with volume
        icon.className = audio.muted ? "fa fa-volume-off" : "fa fa-volume-up"; // Toggle icon
    });

    // Volume slider functionality
    volumeSlider.addEventListener("input", function () {
        audio.volume = volumeSlider.value;
        audio.muted = volumeSlider.value == 0; // Auto-mute if slider is at 0
        icon.className = audio.muted ? "fa fa-volume-off" : "fa fa-volume-up"; // Toggle icon
    });
});
