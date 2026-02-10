const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const landing = document.querySelector('.landing');
const lettersPage = document.getElementById('lettersPage');
const h1 = document.querySelector('.landing h1');

let yesSize = 1.5; // initial scale
let addedPleaseText = false;

function moveNoButton() {
    // Add "please?" text only once
    if (!addedPleaseText) {
        const pleaseText = document.createElement('p');
        pleaseText.textContent = 'please?';
        pleaseText.style.fontSize = '1.5em';
        pleaseText.style.marginTop = '3px';
        pleaseText.style.color = '#ff5252';
        h1.insertAdjacentElement('afterend', pleaseText);
        addedPleaseText = true;
    }

    // Get landing page dimensions
    const landingWidth = landing.offsetWidth - noBtn.offsetWidth;
    const landingHeight = landing.offsetHeight - noBtn.offsetHeight;

    // Random position
    const randomX = Math.floor(Math.random() * landingWidth);
    const randomY = Math.floor(Math.random() * landingHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    // Grow Yes button
    yesSize += 0.1;
    yesBtn.style.transform = `scale(${yesSize})`;
}

// Desktop hover
noBtn.addEventListener('mouseenter', moveNoButton);

// Mobile touch
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // prevent accidental click
    moveNoButton();
});

// Yes button click
yesBtn.addEventListener('click', () => {
    landing.style.display = 'none';
    lettersPage.style.display = 'block';
});
