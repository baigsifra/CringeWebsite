let start;
let sound = new Howl({
  src: ['https://ia800902.us.archive.org/23/items/tvtunes_502/Pink%20Panther.mp3']
});

setInterval(function(){sound.play();}, genRandTime(1, 6));

function letin() {
    let randInt = Math.floor(Math.random() * 4 + 1);
    console.log(randInt);
    if(randInt == 1) {
        window.location.href = "website.html";
    } else {
        document.getElementById('message').innerText = "u r bad";
    }
}

function begin() {
    startColors();
    setInterval(randomAnimation, 3000);
}

function startColors() {
    start = setInterval(randomColor, 1);
}

function genRandTime(min, max) {
    return Math.floor(Math.random() * max + min) * 1000;
}

function stopColors() {
    clearInterval(start);
    let randTime = genRandTime(1, 3);
    console.log(randTime);
    setTimeout(startColors, randTime);
}

function randomColor() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    let box = document.getElementById("players-list-box");
    box.style.backgroundColor = "#" + color;
}

function startAudio(){
    let audio = document.getElementById('audio');
    audio.play();
    console.log("playing");
}

function randomAnimation() {
    let box = document.getElementById('players-list-box');
    let randTime = Math.random() + .001;
    let animation = "move " + randTime + "s linear infinite";
    box.style.animation = animation;
}

function destruction(){
    let jumpscareImg = document.getElementById('jumpscare');
    jumpscareImg.style.display = "block";
    jumpscareImg.style.opacity = 1;
    setTimeout(hide, 1000);
}

function hide(){
    let jumpscareImg = document.getElementById('jumpscare');
    jumpscareImg.style.display = "none"
}