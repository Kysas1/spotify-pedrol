let songName = document.getElementById('song-name');
let play = document.getElementById('play')
let audio = document.getElementById('audio');
let bandName = document.getElementById('band-name')
let cover = document.getElementById('cover')
let isPlaying = false ;
let katyperry = {
    songName : 'The One That Got Away',
    artist : 'Katy Perry',
    file: 'Katy Perry - The One That Got Away',
    image : 'Screenshot_1'
};
let sonic = {
    songName : 'Find your flame',
    artist : 'Sonic - Frontiers',
    file: 'Find Your Flame',
    image : 'artworks-NHp0yctCFpypTkEI-5kzxMw-t500x500'
};
let mj = {
    songName : 'Smooth Criminal',
    artist : 'Michael Jackson',
    file: 'MICHAEL JACKSON - SMOOTH CRIMINAL',
    image : '28f5bc624ebe2476a3fbb4ffddd9e45e6526115228fc9'
};
let playlist = [katyperry, sonic, mj];
let index = 0;
function playSong (){ 
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    audio.play();
    isPlaying = true ; 
} 


function pauseSong (){ 
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    audio.pause();
    isPlaying = false;
}
function playpauseDecider() {
    if(isPlaying === true) {
        pauseSong();
    } else {
        playSong();
    }
}
function initializeSong(){
    cover.src = `images/${playlist[index].image}.png`;
    songName.textContent = `${playlist[index].songName}`;
    bandName.textContent = `${playlist[index].artist}`;
    audio.src = `songs/${playlist[index].file}.mp3`;
}
initializeSong();
play.addEventListener('click', playpauseDecider)






