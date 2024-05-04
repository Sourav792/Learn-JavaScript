
const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause-btn");
const volumeControl = document.getElementById("volume");
const progressControl = document.getElementById("progress");

// Play or pause the audio
playPauseButton.addEventListener("click", function () {
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseButton.textContent = "Pause";
  } else {
    audio.pause();
    playPauseButton.textContent = "Play";
  }
});

// Update volume
volumeControl.addEventListener("input", function () {
  audio.volume = this.value;
});

// Update progress
audio.addEventListener("timeupdate", function () {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressControl.value = progress;
});

// Seek through the audio
progressControl.addEventListener("input", function () {
  const seekTime = audio.duration * (progressControl.value / 100);
  audio.currentTime = seekTime;
});

// Update UI when audio ends
audio.addEventListener("ended", function () {
  playPauseButton.textContent = "Play";
});
