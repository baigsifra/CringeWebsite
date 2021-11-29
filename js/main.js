let start;

function letin() {
    document.getElementById("sound").play();
    let randInt = Math.floor(Math.random() * 4 + 1);
    console.log(randInt);
    if(randInt == 1) {
        window.location.href = "website.html";
    } else {
        document.getElementById('message').innerText = "u r bad";
    }
}

function startColors() {
    start = setInterval(randomColor, 1);
}

function stopColors() {
    clearInterval(start);
    let randInt = Math.floor(Math.random() * 3 + 1);
    setTimeout(startColors, randInt * 1000);
}

function randomColor() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    let box = document.getElementById("players-list-box");
    box.style.backgroundColor = "#" + color;
}