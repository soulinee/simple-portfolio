function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function likePost(button) {
    let likeCountSpan = button.nextElementSibling;
    let currentCount = parseInt(likeCountSpan.textContent);
    likeCountSpan.textContent = currentCount + 1;
}
