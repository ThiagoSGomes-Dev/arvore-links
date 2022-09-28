
// ====== SCROLL BAR ======
function onScroll() {
    if(scrollY > 0) {
        navgation.classList.add('scroll')
    } else {
        navgation.classList.remove('scroll')
    }
}
// ====== SCROLL BAR ======

// ====== CANVAS POSTCARD ======

let end = Date.now() + (15 * 1000);

// go Buckeyes!
let colors = ['#f71da3', '#ffff00', '#02fe99'];

(function frame() {
confetti({
    particleCount: 3,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
});
confetti({
    particleCount: 3,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
});

if (Date.now() < end) {
    requestAnimationFrame(frame);
}
}());

// ====== CANVAS POSTCARD ======