let select = document.querySelectorAll('.personagem-item');
let character = document.getElementById("mostrarPersonagem");
let inicio = document.getElementById("acao")
let header = document.getElementById("header")
let container = document.getElementById("container")


function playAudio(audioName) {
    let audio = new Audio(`../../src/audio/${audioName}`);
    audio.volume = 0.2;
    audio.muted = false;
    audio.play();
}

select.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        character.src = `../src/images/${square.id}.webp`
    })
})

function iniciar() {
    playAudio('theme.mp3')
    inicio.style.display = "none";
    setTimeout(() => {
        header.style.display = 'flex';
        container.style.display = 'flex'
    }, 1000)
}


