function playAudio(audioName){
    const audio = new Audio("../src/audio/theme.mp3");
    audio.volume = 0.5;
    audio.play();
}
let select = document.querySelectorAll('.personagem-item');
let character = document.getElementById("mostrarPersonagem");
select.forEach((square) =>{
    square.addEventListener("mouseenter",()=>{
        character.src = "../src/images/1.webp"
    })
})
playAudio();