"use strict";

const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play"); // Botão play
const next = document.getElementById("next"); // Botão next
const previous = document.getElementById("previous"); // Botão previous

const wayMuchBetter = {
  songName: "Way Much Better",
  artist: "Daniel Lavor",
  file: "way_much_better",
  imageExt: "png",
};

const demons = {
  songName: "Demons",
  artist: "Boyce",
  file: "demons_boyce",
  imageExt: "jpg",
};

const shivers = {
  songName: "Shivers",
  artist: "Jonah Baker",
  file: "shivers",
  imageExt: "png",
};

let isPlaying = false;
const playlist = [wayMuchBetter, demons, shivers];
let index = 0;

function playSong() {
  play.querySelector(".bi").classList.remove("bi-play-circle-fill");
  play.querySelector(".bi").classList.add("bi-pause-circle-fill");
  song.play();
  isPlaying = true;
}

function pauseSong() {
  play.querySelector(".bi").classList.add("bi-play-circle-fill");
  play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
  song.pause();
  isPlaying = false;
}

function playPauseDecider() {
  if (isPlaying === true) {
    pauseSong();
  } else {
    playSong();
  }
}

function initializeSong() {
  const imagePath = `./image/${playlist[index].file}.${playlist[index].imageExt}`;
  cover.src = imagePath;
  song.src = `./music/${playlist[index].file}.mp3`;
  songName.innerText = playlist[index].songName;
  bandName.innerText = playlist[index].artist;
}

function previousSong() {
  if (index === 0) {
    index = playlist.length - 1;
  } else {
    index -= 1;
  }
  initializeSong();
  playSong();
}

function nextSong() {
  if (index === playlist.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  initializeSong();
  playSong();
}

initializeSong();

play.addEventListener("click", playPauseDecider);
previous.addEventListener("click", previousSong);
next.addEventListener("click", nextSong);
