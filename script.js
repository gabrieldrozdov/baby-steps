let colors = ['white', 'red', 'blue', 'purple', 'yellow', 'green', 'pink'];
function setColor(color) {
	const body = document.querySelector('body');
	body.style.setProperty('--primary', "var(--"+color+")")
}
setColor(colors[Math.floor(Math.random()*colors.length)]);

let fonts = ['Monaspace Neon', 'Monaspace Argon', 'Monaspace Xenon', 'Monaspace Radon', 'Monaspace Krypton'];
function setFont(font) {
	const body = document.querySelector('body');
	body.style.setProperty('--font', font +', monospace');
}
setFont(fonts[Math.floor(Math.random()*fonts.length)]);