let songName = document.getElementById('song-name');
let play = document.getElementById('play')
let audio = document.getElementById('audio');
let bandName = document.getElementById('band-name')
let cover = document.getElementById('cover')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let progress = document.getElementById('current-progress')
let progressContainer = document.getElementById('progress-container')
let playerN = document.getElementById('playerName')
let like = document.getElementById('like');
let isPlaying = false ;
let isliked = true ;

let daniel = {
    songName : 'HOT LIMIT' , 
    artist : 'T.M - Revolution' , 
    file : 'T-M-Revolution-HOT-LIMIT.mp3',
    image: '410Xm1xMc9L._UF1000_1000_QL80_.png',
    playerName : 'Player : Daniel'
}
let dbgt = {
    songName : 'Dan dan kokoro hikareteku' , 
    artist : 'Field of View - Sanks' , 
    file : 'Dragon-Ball-Dan-Dan-Kokoro-Hikareteku.mp3' ,
    image : '892ab776279414977933b566575cf62d.gif' , 
    theme : 'dragon-ball' , 
    playerName : ''
}
let dmc = {
    songName : 'Devils Never Cry' ,
    artist : 'Devil May Cry 3 - CAPCOM' ,
    file : 'Devils Never Cry.mp3' , 
    image : 'artworks-w9hCYe774yygLUQt-zI0bPg-t1080x1080.png' , 
    playerName : 'Player : Pedro'
}
let katyperry = {
    songName : 'The One That Got Away',
    artist : 'Katy Perry',
    file: 'Katy Perry - The One That Got Away.mp3',
    image : 'Screenshot_1.png' , 
    playerName : 'Player : Laura'
};
let sonic = {
    songName : 'Find your flame',
    artist : 'Sonic - Frontiers',
    file: 'Find Your Flame.mp3',
    image : 'artworks-NHp0yctCFpypTkEI-5kzxMw-t500x500.png',
    playerName : 'Player : Bruno'
};
let mj = {
    songName : 'Smooth Criminal',
    artist : 'Michael Jackson',
    file: 'MICHAEL JACKSON - SMOOTH CRIMINAL.mp3',
    image : '28f5bc624ebe2476a3fbb4ffddd9e45e6526115228fc9.png' ,
    playerName : 'Player : Fernanda'
};
let playlist = [katyperry, sonic, mj , dmc , dbgt, daniel];
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
    cover.src = `images/${playlist[index].image}`;
    songName.textContent = `${playlist[index].songName}`;
    bandName.textContent = `${playlist[index].artist}`;
    audio.src = `songs/${playlist[index].file}`;
    playerN.textContent = `${playlist[index].playerName}`
    
    document.body.classList.remove('dragon-ball')
    cover.style.width ='400px'
    cover.style.transition = '6s';
    document.getElementById('title').textContent = 'Guild Playlist'
    document.getElementById('title').style.fontFamily = 'sans-serif';
        if (playlist[index].theme === 'dragon-ball'){
            cover.style.transition = '18s';
            document.body.classList.add('dragon-ball');
            cover.style.width = '700px' ;
            document.getElementById('title').textContent = ' S a v e  P o i n t ';
            document.getElementById('title').style.fontFamily = 'monospace';
            document.getElementById('title').style.transition ='20s'
        }
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
function liked(){
    if (isliked === true) {
        like.querySelector('.bi').classList.remove('bi-heart');
        like.querySelector('.bi').classList.add('bi-heart-fill');
        like.style.fontSize = '2.3em';
        like.style.color = 'white'
        like.style.transition ='1s'
        isliked = false ;
    } else {
        like.querySelector('.bi').classList.add('bi-heart');
        like.querySelector('.bi').classList.remove('bi-heart-fill');
        isliked = true ;
        like.style.fontSize = '1.5em';
        like.style.color = 'rgb(139,153, 156)'
        like.style.transition ='1s'
    }
    
}

initializeSong();
progressContainer.addEventListener('click', jumpTo);
play.addEventListener('click', playpauseDecider);
prev.addEventListener('click' , previ);
next.addEventListener('click', nextS);
audio.addEventListener('timeupdate', progressBar);
like.addEventListener('click', liked);







