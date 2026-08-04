const modal = document.getElementById("verifyModal");
const buttons = document.querySelectorAll(".verify-btn");
const close = document.getElementById("closeModal");


buttons.forEach(button => {

    button.onclick = () => {
        modal.style.display = "flex";
    }

});


close.onclick = () => {

    modal.style.display = "none";

};


window.onclick = (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

};

const fullscreenBtn = document.getElementById("fullscreenBtn");

fullscreenBtn.addEventListener("click", () => {

    if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen();

        fullscreenBtn.textContent = "Exit Fullscreen";

    } else {

        document.exitFullscreen();

        fullscreenBtn.textContent = "Fullscreen";

    }

});