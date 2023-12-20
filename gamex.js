score = 0;
cross = true;

audio = new Audio('funkland_music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        rabbit = document.querySelector('.rabbit');
        rabbit.classList.add('animateRbt');
        setTimeout(() => {
            rabbit.classList.remove('animateRbt')
        }, 700);
    }
    if (e.keyCode == 39) {
        rabbit = document.querySelector('.rabbit');
        rbtX = parseInt(window.getComputedStyle(rabbit, null).getPropertyValue('left'));
        rbt.style.left = rbtX + 112 + "px";
    }
    if (e.keyCode == 37) {
        rabbit = document.querySelector('.rabbit');
        rbtX = parseInt(window.getComputedStyle(rabbit, null).getPropertyValue('left'));
        rabbit.style.left = (rbtX - 112) + "px";
    }
}

setInterval(() => {
    rabbit = document.querySelector('.rabbit');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    rx = parseInt(window.getComputedStyle(rabbit, null).getPropertyValue('left'));
    ry = parseInt(window.getComputedStyle(rabbit, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(rx - ox);
    offsetY = Math.abs(ry - oy);

    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Got stung! Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => 
        {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Score : " + score
}