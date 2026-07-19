function flipCard(card) {
    card.classList.toggle('flipped');
}

const modal = document.getElementById('hologram-modal');
const holoImage = document.getElementById('hologram-image');
const holoName = document.getElementById('hologram-name');

function showHologram(imageSrc, name) {
    holoImage.src = imageSrc;
    holoName.innerText = name;
    holoName.setAttribute('data-text', name); 
    
    modal.classList.add('active');
}

function closeHologram() {
    modal.classList.remove('active');
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeHologram();
    }
});
