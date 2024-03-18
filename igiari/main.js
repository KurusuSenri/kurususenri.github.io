document.addEventListener("DOMContentLoaded", init, false);

function init() {
    var msg = document.querySelector("#message");
    var audio = document.querySelector("#igiari_audio");
    var image = document.querySelector("#igiari_image");

    msg.innerHTML = "resources loaded."

    audio.addEventListener('playing', () => {
        console.log("playing");
        image.src = ("igiari.jpg")
    });
    audio.addEventListener('pause', () => {
        console.log("pause");
        image.src = ("empty.png")
    });

    document.addEventListener("mousemove", () => {
        audio.play();
    });


}