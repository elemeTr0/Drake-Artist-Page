const player = document.getElementById('spotifyPlayerContainer');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

player.addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'IFRAME') return;

    const rect = player.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    isDragging = true;
});

const CAROUSEL_WIDTH = 340; // must match .carousel-wrap's actual width

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const rect = player.getBoundingClientRect();

    let newLeft = e.clientX - offsetX;
    let newTop = e.clientY - offsetY;

    // Don't allow it left of the carousel on desktop
    const minLeft = window.innerWidth >= 880 ? CAROUSEL_WIDTH : 0;
    const maxLeft = window.innerWidth - rect.width;
    const maxTop = window.innerHeight - rect.height;

    newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
    newTop = Math.max(0, Math.min(newTop, maxTop));

    player.style.left = `${newLeft}px`;
    player.style.top = `${newTop}px`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

const openBtn = document.getElementById("spotify-open");

openBtn.addEventListener('click', () => {
    const isOpen = player.style.visibility === 'visible';
    player.style.visibility = isOpen ? 'hidden' : 'visible';
});

const closeBtn = document.getElementById("closeSpotify");

closeBtn.addEventListener('click', () => {
    player.style.visibility = 'hidden';
});