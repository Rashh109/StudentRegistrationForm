function openImage(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('fullImage');
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}
