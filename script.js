document.querySelector('.message').addEventListener('click', () => {
    const hiddenMessage = document.querySelector('.hidden-message');
    hiddenMessage.style.transform = 'translateX(0)';
    hiddenMessage.style.opacity = '1';
    for (let i = 0; i < 30; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.color = getRandomColor();
    heart.textContent = '💜';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

function getRandomColor() {
    const colors = ['#ff0000', '#ff69b4', '#ff1493', '#db7093', '#c71585'];
    return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(() => {
    createHeart();
}, 500);
