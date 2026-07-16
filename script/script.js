let songName = document.getElementById('song-name');
let play = document.getElementById('play')
let audio = document.getElementById('audio');
let bandName = document.getElementById('band-name')
let cover = document.getElementById('cover')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let progress = document.getElementById('current-progress')
let progressContainer = document.getElementById('progress-container')
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
let index = 2;
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

function previ(){
    if (index === 0){
       index = playlist.length ; 
    } else {
        index -= 1 ;
    }
    initializeSong();
    playSong();
    
}
function nextS (){
    if (index === playlist.length - 1) {
        index = 0 ; 
    } else {
        index += 1;
    }
    initializeSong();
    playSong();
}

function progressBar(){
    let barWidth = (audio.currentTime/ audio.duration*100) ;
    progress.style.setProperty('--progress', `${barWidth}%`);
}

function jumpTo(event){
    let width = progressContainer.clientWidth;
    let clickPosition = event.offsetX;
    const jumpTotime = (clickPosition / width) * audio.duration ; 
    audio.currentTime = jumpTotime;
    progressContainer.style.cursor = 'pointer';
}

initializeSong();
progressContainer.addEventListener('click', jumpTo);
play.addEventListener('click', playpauseDecider);
prev.addEventListener('click' , previ);
next.addEventListener('click', nextS);
audio.addEventListener('timeupdate', progressBar);







