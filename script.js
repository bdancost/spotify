"use strict";

const songName = document.getElementById("song-name");
const song = document.getElementById("audio");
const play = document.getElementById("play"); // Botão play

songName.innerText = "Way Much Better";

function playSong() {
  song.play();
}

play.addEventListener("click", playSong);
