let timerId;
const button = document.querySelector("#music");
const audio = document.querySelector("#player");
button.addEventListener("click", function(){
    if(audio.paused) {
        audio.play();
        button.classList.toggle("pause");
        timerId = setInterval(timerPlay, 1000);
    }
    else {
        audio.pause();
        button.classList.toggle("pause");
        stopTimer();
    }
})
const timer = 30;
let amountTime = timer * 60;
function timerPlay() {
    const countdown = document.querySelector("#time");
    let minutes = Math.floor(amountTime / 60);
    let seconds = amountTime % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    countdown.textContent = `${minutes}:${seconds}`;
    amountTime --;
    if (amountTime < 0) {
        stopTimer();
        amountTime = 0;
    }
}
function stopTimer() {
    clearInterval(timerId);
}