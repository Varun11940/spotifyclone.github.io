console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");

// Play/Pause toggle
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// Progress bar update
audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = isNaN(progress) ? 0 : progress;
});

// Seeking in track
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Next song
document.getElementById("next").addEventListener("click", () => {
  songIndex = (songIndex + 1) % 10;
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = `Playing: ${songIndex + 1}`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

// Previous song
document.getElementById("previous").addEventListener("click", () => {
  songIndex = songIndex <= 0 ? 0 : songIndex - 1;
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = `Playing: ${songIndex + 1}`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

// Shuffle
document.getElementById("shuffle").addEventListener("click", () => {
  songIndex = Math.floor(Math.random() * 10);
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = `Playing: ${songIndex + 1}`;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

// Repeat
let isRepeating = false;
document.getElementById("repeat").addEventListener("click", () => {
  isRepeating = !isRepeating;
  document.getElementById("repeat").style.color = isRepeating ? "green" : "white";
});

audioElement.addEventListener("ended", () => {
  if (isRepeating) {
    audioElement.currentTime = 0;
    audioElement.play();
  } else {
    document.getElementById("next").click();
  }
});
