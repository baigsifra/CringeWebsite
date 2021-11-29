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

function randomColor() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    let box = document.getElementById("players-list-box");
    box.style.backgroundColor = "#" + color;
}