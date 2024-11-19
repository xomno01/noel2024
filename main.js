// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Snow Effect
    function createSnowflake() {
        const snow = document.createElement('div');
        snow.classList.add('snowflake');
        snow.innerHTML = '❄';
        snow.style.left = Math.random() * 100 + 'vw';
        snow.style.animationDuration = Math.random() * 3 + 2 + 's';
        snow.style.opacity = Math.random();
        document.querySelector('.snow-container').appendChild(snow);

        setTimeout(() => snow.remove(), 5000);
    }
    setInterval(createSnowflake, 100);

    // Countdown Timer
    function updateCountdown() {
        const christmas = new Date('December 25, 2024 00:00:00').getTime();
        const now = new Date().getTime();
        const gap = christmas - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        document.getElementById('days').innerText = Math.floor(gap / day);
        document.getElementById('hours').innerText = Math.floor((gap % day) / hour);
        document.getElementById('minutes').innerText = Math.floor((gap % hour) / minute);
        document.getElementById('seconds').innerText = Math.floor((gap % minute) / second);
    }
    setInterval(updateCountdown, 1000);

    // Audio Control
    const audio = document.getElementById('bgMusic');
    const audioBtn = document.getElementById('audioToggle');
    
    audioBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            audioBtn.textContent = '🔊';
        } else {
            audio.pause();
            audioBtn.textContent = '🔈';
        }
    });
});

// Parallax Effect
window.addEventListener('mousemove', (e) => {
    const depth = 5;
    const moveX = (e.pageX - window.innerWidth/2) / depth;
    const moveY = (e.pageY - window.innerHeight/2) / depth;
    
    document.querySelector('.hero-content').style.transform = 
        `translate(${moveX}px, ${moveY}px)`;
});