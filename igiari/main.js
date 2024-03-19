document.addEventListener("DOMContentLoaded", init, false);

let voiceType = 'none';

function init() {
    let audio = document.querySelector("#igiari_audio");
    let image = document.querySelector("#igiari_image");
    let voiceTypeP = document.querySelector("#current_voice_type");
    let imgSrc = "";

    document.addEventListener('keydown', (event) => {
        if (event.key === " ") {
            console.log("change voice type");
            if (voiceType === "none") {
                voiceType = "jp-igiari";
                audio.src = "igiari.mp3";
                imgSrc = "igiari.png";
            } else if (voiceType === "jp-igiari") {
                voiceType = "en-objection";
                audio.src = "objection.mp3";
                imgSrc = "objection.png"
            } else if (voiceType === "en-objection") {
                voiceType = "jp-matta";
                audio.src = "matta.mp3";
                imgSrc = "matta.png";
            } else if (voiceType === "jp-matta") {
                voiceType = "en-holdit";
                audio.src = "holdit.mp3";
                imgSrc = "holdit.png";
            } else if (voiceType === "en-holdit") {
                voiceType = "jp-kurae";
                audio.src = "kurae.mp3";
                imgSrc = "kurae.png";
            } else if (voiceType === "jp-kurae") {
                voiceType = "en-takethat";
                audio.src = "takethat.mp3";
                imgSrc = "takethat.png";
            } else if (voiceType === "en-takethat") {
                voiceType = "none";
            }
            voiceTypeP.innerHTML = "current: " + voiceType;
        }
    });

    audio.addEventListener('playing', () => {
        console.log("playing");
        image.src = imgSrc;
    });
    audio.addEventListener('pause', () => {
        console.log("pause");
        image.src = "empty.png";
    });

    document.addEventListener("mousemove", () => {
        if (voiceType !== "none") {
            audio.play();
        }
    });

}