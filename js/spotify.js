const player = document.getElementById('spotifyPlayerContainer');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

player.addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'IFRAME') return;

    const rect = player.getBoundingClientRect();

    // Calculate cursor position inside the player FIRST
    offsetX = e.clientX - rect.left + 340;
    offsetY = e.clientY - rect.top;

    // Then convert its current position to left/top

    isDragging = true;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    player.style.left = `${e.clientX - offsetX}px`;
    player.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

const openBtn = document.getElementById("spotify-open");

let bool = false;
function show(){
    bool = !bool;
    if(bool) document.getElementById("spotifyPlayerContainer").style.visibility = 'visible';
    else document.getElementById("spotifyPlayerContainer").style.visibility = 'hidden'
}

openBtn.addEventListener('click', show)