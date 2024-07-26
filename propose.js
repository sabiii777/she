const emojiContainer = document.getElementById('emoji-container');
const centerText = document.getElementById('center-text');
const imageBox = document.getElementById('image-box');
const closeBtn = document.getElementById('close-btn');
const emojis = ['❤️', '💕', '💖', '💘', '💗', '💓', '💞'];

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Random size
    const size = Math.random() * 50 + 20;
    emoji.style.fontSize = `${size}px`;
    
    // Random position
    const left = Math.random() * 100;
    emoji.style.left = `${left}%`;
    
    // Random glow
    if (Math.random() > 0.7) {
        emoji.classList.add('glow');
    }
    
    emojiContainer.appendChild(emoji);
    
    // Remove the emoji after the animation ends
    setTimeout(() => {
        emoji.remove();
    }, 10000); // 10s matches the duration of the float animation
}

// Create emojis continuously
setInterval(createEmoji, 1000);

centerText.addEventListener('click', () => {
    imageBox.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    imageBox.style.display = 'none';
});
