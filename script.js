// Flip card logic
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Hologram Modal Logic
const modal = document.getElementById('hologram-modal');
const holoImage = document.getElementById('hologram-image');
const holoName = document.getElementById('hologram-name');

function showHologram(imageSrc, name) {
    holoImage.src = imageSrc;
    holoName.innerText = name;
    holoName.setAttribute('data-text', name); // For glitch effect
    
    modal.classList.add('active');
}

function closeHologram() {
    modal.classList.remove('active');
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeHologram();
    }
});

// Sound Effect for UI (Optional touch)
document.querySelectorAll('.card, .hologram-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        // You could add a tiny hover sound effect here if desired
    });
});
