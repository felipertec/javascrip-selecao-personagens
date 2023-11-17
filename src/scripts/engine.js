let select = document.querySelectorAll('.personagem-item');
let character = document.getElementById("mostrarPersonagem");
let inicio = document.getElementById("acao")
let header = document.getElementById("header")
let container = document.getElementById("container")
let escolhido = 0;


function playAudio(audioName) {
    let audio = new Audio(`../../src/audio/${audioName}`);
    audio.volume = 0.2;
    audio.muted = false;
    audio.play();
}

select.forEach((square) => {
    square.addEventListener("click", () => {
        if(escolhido == 0){
            escolhido = 1;
            playAudio(square.id + ".mp3")
            square.firstChild.style.filter = "brightness(50%)";
        }
    })
    setInterval(()=>{
        if(escolhido == 1){
            reload();
            square.classList.add('personagem-item-novo')
            square.classList.remove('personagem-item');
        }
    },1)
})

select.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        if(escolhido == 0){
            character.src = `../src/images/${square.id}.webp`
        }
    })
})

function reload(){
    setTimeout(()=>{
        escolhido = 0;
        select.forEach((square)=>{ 
            square.firstChild.style.filter = "brightness(100%)";
            square.classList.remove('personagem-item-novo');
            square.classList.add('personagem-item');
        })
        console.log('pronto');
        console.log(escolhido);
    },5000)
}

function iniciar() {
    playAudio('theme.mp3')
    playAudio('haha.mp3')
    inicio.style.display = "none";
    setTimeout(() => {
        header.style.display = 'flex';
        container.style.display = 'flex'
    }, 2000)
}


