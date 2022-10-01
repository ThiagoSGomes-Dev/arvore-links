
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

// ====== START Widget WhastApp hospedagemwordpresspro ======

function showIt2() {document.getElementById("msg1").style.visibility = "visible";}    setTimeout("showIt2()", 5000); function hiddenIt() {document.getElementById("msg1").style.visibility = "hidden";}setTimeout("hiddenIt()", 15000); function showIt3() {document.getElementById("msg1").style.visibility = "visible";} setTimeout("showIt3()", 25000);  msg1.onclick = function() {document.getElementById('msg1').style.visibility = "hidden"; };function alertW() { document.getElementById("alertWapp").style.visibility = "visible";	} setTimeout("alertW()", 15000);

// ====== END Widget WhastApp ======

function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'O link da sua página',
			text: 'Thiago Desenvolvedor Front-End',
			url: 'https://thiagosgomes-dev.github.io/arvore-links/',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}